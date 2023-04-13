import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulary: FormGroup;
  

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.formulary = new FormGroup({
      dni: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
      
    })
  }

  async onSubmit() {
    console.log(this.formulary.value)
  }



checkError(control: string, validator: string) {
 return this.formulary.get(control)?.hasError(validator) && this.formulary.get(control)?.touched
}

}