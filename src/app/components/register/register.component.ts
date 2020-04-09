import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username1: any;
  password1: any;

  constructor() { }

  ngOnInit(): void {
  }

  RegisterUser() {
    if (this.username1 == "Nurgissa" && this.password1 == "123"){
      alert("Welcome, Nurgissa");
    } else{
      alert("Incorrect data");
    }
  }
}
