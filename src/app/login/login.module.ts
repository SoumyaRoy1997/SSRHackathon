import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import {SharedModule} from '../common/shared.module';
import {LoginService} from '../service/login.service'

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
      SharedModule,
      AngularFireAuthModule,
      LoginRoutingModule,
      RouterModule
    ],
  exports: [
    LoginComponent
  ],
  providers: [LoginService]
  })
  export class LoginModule {}
