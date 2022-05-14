import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { SsrFormComponent } from '../ssr-form/ssr-form.component';
import { SharedModule } from '../common/shared.module';
import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HomeLayoutComponent } from './home-layout.component';
import { SsrService } from '../service/ssr.service';
import { FirebaseService } from '../service/firebase.service';
import {ArrayToStringPipe} from '../common/array-to-string.pipe';

@NgModule({
    declarations: [
      SsrFormComponent,
      HomeLayoutComponent,
      ArrayToStringPipe
    ],
    imports: [
      RouterModule,
      HomeLayoutRoutingModule,
      SharedModule
    ],
  exports: [
    SsrFormComponent,
    HomeLayoutComponent
  ],
  providers: [SsrService,FirebaseService],
  entryComponents: [ HomeLayoutComponent,SsrFormComponent]
  })
  export class HomeLayoutModule {}
