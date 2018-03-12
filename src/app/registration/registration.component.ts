import { Component, OnInit } from '@angular/core';

import { Users } from '../model/users';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']

})
export class RegistrationComponent {

  submitted: Boolean = false;
  gender: string[] = ['Male', 'Female'];

  model: Users = new Users();

  constructor() { }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
}
