import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration.component';
import { routing } from '../registration/registration.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
