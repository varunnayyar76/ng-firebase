import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  loadChildren: '../home/home.module#HomeModule' },
  { path: 'login', loadChildren: '../login/login.module#LoginModule' },
  { path: 'registration',  loadChildren: '../registration/registration.module#RegistrationModule' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
