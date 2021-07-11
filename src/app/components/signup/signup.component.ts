import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any = {
    username: "",
    password: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  signUp(): void {
    console.log(this.user.username, this.user.password)
  }

}
