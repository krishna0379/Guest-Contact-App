import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddGuestComponent } from './guests/add-guest/add-guest.component';
import { ListGuestComponent } from './guests/list-guest/list-guest.component';
import { UpdateGuestComponent } from './guests/update-guest/update-guest.component';
import { FormGuestComponent } from './guests/form-guest/form-guest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddGuestComponent,
    ListGuestComponent,
    UpdateGuestComponent,
    FormGuestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
