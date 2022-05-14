import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';
import { SsrFormComponent } from '../ssr-form/ssr-form.component';



const routes: Routes = [
  { path: '', component: HomeLayoutComponent},
  { path: 'ssr-form', component: SsrFormComponent}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeLayoutRoutingModule {}

