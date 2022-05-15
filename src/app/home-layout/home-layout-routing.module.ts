import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';
import { SsrFormComponent } from '../ssr-form/ssr-form.component';
import {AuthGuard} from '../_helper/auth.guard'
import { BookingFormComponent } from '../booking-form/booking-form.component';


const routes: Routes = [
  { path: '', component: HomeLayoutComponent},
  { path: 'booking', 
  component: BookingFormComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeLayoutRoutingModule {}

