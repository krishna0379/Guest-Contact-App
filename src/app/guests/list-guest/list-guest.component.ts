import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest.model';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-list-guest',
  templateUrl: './list-guest.component.html',
  styleUrls: ['./list-guest.component.css'],
})
export class ListGuestComponent implements OnInit {
  guests: Guest[];
  constructor(private guestService: GuestService) {
    this.guests = [];
  }
  loadedGuests() {
    this.guestService.getAllGuest().subscribe((guestList: Guest[]) => {
      this.guests = guestList;
    });
  }

  ngOnInit(): void {
    this.loadedGuests();
  }
}
