import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';
import { routing } from '../registration/registration.routing';
import { EqualValidator } from './equal-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  declarations: [
    RegistrationComponent,
    EqualValidator
  ]
})
export class RegistrationModule { }
