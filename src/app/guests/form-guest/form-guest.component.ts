import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Guest } from '../guest.model';

@Component({
  selector: 'app-form-guest',
  templateUrl: './form-guest.component.html',
  styleUrls: ['./form-guest.component.css'],
})
export class FormGuestComponent implements OnInit {
  @Input()
  model!: Guest;

  frmGroup: FormGroup;
  @Output()
  onGuestEvent: EventEmitter<Guest>;

  constructor(private fromBuilder: FormBuilder) {
    this.onGuestEvent = new EventEmitter<Guest>();
    this.frmGroup = this.fromBuilder.group({
      //createing this model similar to model we are going to patch
      id: Math.random(),
      name: '',
      contactNumber: '',
    });
  }

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.frmGroup.patchValue(this.model);
    }
  }

  saveChanges() {
    //triggering the custo event
    this.onGuestEvent.emit(this.frmGroup.value);
  }
}
