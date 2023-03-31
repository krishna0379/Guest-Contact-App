import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from '../guest.model';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css'],
})
export class AddGuestComponent implements OnInit {
  constructor(private guestService: GuestService, private router: Router) {}

  ngOnInit(): void {}

  saveChanges(guestToAdded: Guest) {
    this.guestService.addGuest(guestToAdded).subscribe(
      () => {
        alert('New Guest Added');
        this.router.navigate(['/guests']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
