import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { SsrFormComponent } from '../ssr-form/ssr-form.component';
import { SharedModule } from '../common/shared.module';
import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HomeLayoutComponent } from './home-layout.component';
import { SsrService } from '../service/ssr.service';
import { FlightService } from '../service/flight.service';
import {ArrayToStringPipe} from '../common/array-to-string.pipe';
import {BookingFormComponent} from '../booking-form/booking-form.component';
import { AuthenticationService } from '../service/authentication.service';
import {BookingService} from '../service/booking.service'

@NgModule({
    declarations: [
      SsrFormComponent,
      HomeLayoutComponent,
      BookingFormComponent,
      ArrayToStringPipe
    ],
    imports: [
      RouterModule,
      HomeLayoutRoutingModule,
      SharedModule
    ],
  exports: [
    SsrFormComponent,
    HomeLayoutComponent,
    BookingFormComponent,
    SharedModule
  ],
  providers: [SsrService,FlightService,AuthenticationService,BookingService],
  entryComponents: [ HomeLayoutComponent,SsrFormComponent,BookingFormComponent]
  })
  export class HomeLayoutModule {}
