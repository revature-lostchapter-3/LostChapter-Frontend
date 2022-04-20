import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { ResetPasswordService } from '../resetPasswordService';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router: Router, private resetPassword: ResetPasswordService, private http: HttpClient) {}

  ngOnInit(): void {
    this.checkIfLoggedIn();
  }

  username!: string;
  password!: string;
  errorMessage!: string;

  // show / hide password
  hide = true;

  updateUser(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    birthday: string,
    address: string,
    role: string
  ) {
    return this.http.put(`http://localhost:8081/user`,
      {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        birthday: birthday,
        address: address,
        role: role,
      },
      {
        withCredentials: true,
        observe: 'response',
      }
    );
  }

  checkIfLoggedIn() {
    this.resetPassword.checkLoginStatus().subscribe(
      (res) => {
        if (res.status === 200 || res.status === 201) {
          // depending on the status
          let body = <User>res.body;

          if (body.role === 'Customer') {
            this.router.navigate(['']);
          }

          if (body.role === 'Admin') {
            this.router.navigate(['/admin']);
          }
        }
      });
  }
}



