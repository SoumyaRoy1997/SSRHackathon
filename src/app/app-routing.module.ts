import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SsrFormComponent } from './ssr-form/ssr-form.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },{
    path: 'home',
    loadChildren: () => import('./home-layout/home-layout-module').then(m => m.HomeLayoutModule)
  },
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
  },
  { path: '**', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
