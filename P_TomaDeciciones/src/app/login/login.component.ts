import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  activeClass: boolean;
  login_form: FormGroup = new FormGroup({});
  isCheck: any;

  constructor( private fb: FormBuilder ) { 
    this.activeClass = true;
  }

  onClick(){
    this.activeClass = !this.activeClass
  }

  ngOnInit(): void {

    this.login_form = this.fb.group( {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    } )

  }

  sendLogin(): void {
    this.isCheck = { user: 1 }
  }

}
