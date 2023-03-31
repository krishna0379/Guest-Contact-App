import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from '../guest.model';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
  styleUrls: ['./update-guest.component.css'],
})
export class UpdateGuestComponent implements OnInit {
  guestId!: number;
  model!: Guest;
  constructor(
    private activedRoute: ActivatedRoute,
    private guestService: GuestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.guestId = params['id'];
      this.guestService
        .getGuestById(params['id'])
        .subscribe((guestToBeUpdated: Guest) => {
          this.model = guestToBeUpdated;
        });
    });
  }

  saveChanges(guestToBeUpdated: Guest) {
    this.guestService.updateGuest(this.guestId, guestToBeUpdated).subscribe(
      () => {
        alert(' Guest Record Updated');
        this.router.navigate(['/guests']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
