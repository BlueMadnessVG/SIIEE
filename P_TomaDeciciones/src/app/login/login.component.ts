import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  activeClass: boolean;

  constructor() { 
    this.activeClass = true;
  }

  onClick(){
    this.activeClass = !this.activeClass
  }

  ngOnInit(): void {
  }

}
