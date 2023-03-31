import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGuestComponent } from './guests/add-guest/add-guest.component';
import { ListGuestComponent } from './guests/list-guest/list-guest.component';
import { UpdateGuestComponent } from './guests/update-guest/update-guest.component';
import { HomeComponent } from './home/home.component';

/**Base Url :http://localhost:4200/ */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent /**Url :http://localhost:4200/ */,
  },
  {
    path: 'guests',
    component: ListGuestComponent /**Url :http://localhost:4200/guests */,
  },
  {
    path: 'guests/add',
    component: AddGuestComponent /**Url :http://localhost:4200/guests/add */,
  },
  {
    path: 'guests/update',
    component:
      UpdateGuestComponent /**Url :http://localhost:4200/guests/update */,
  },
  {
    path: '**',
    redirectTo:
      '' /** if we enter any UNKOWN it will Redirect to this Url :http://localhost:4200/ */,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
