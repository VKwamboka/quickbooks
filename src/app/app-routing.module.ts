import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:()=>import('./homepage/homepage.component').then(h=>h.HomepageComponent)},
  {path:'login', loadComponent:()=>import('../app//login/login.component').then(l=>l.LoginComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
