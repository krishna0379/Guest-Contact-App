import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guest } from './guest.model';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private guestApiURL = environment.guestApiURL;

  constructor(private httpClient: HttpClient) {}

  getAllGuest(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(this.guestApiURL);
  }
  getGuestById(id: number): Observable<Guest> {
    return this.httpClient.get<Guest>(`${this.guestApiURL}/${id}`);
  }
  addGuest(guestToBeAdded: Guest) {
    return this.httpClient.post(this.guestApiURL, guestToBeAdded);
  }
  updateGuest(id: number, guestToBeUpdated: Guest) {
    return this.httpClient.put(`${this.guestApiURL}/${id}`, guestToBeUpdated);
  }
  deleteGuest(id: number) {
    return this.httpClient.delete(`${this.guestApiURL}/${id}`);
  }
}
