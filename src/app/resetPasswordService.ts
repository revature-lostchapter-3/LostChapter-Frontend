import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  constructor(private http: HttpClient) {}

  checkLoginStatus() {
    return this.http.get(`http://localhost:8081/loginstatus`,{
      //'http://ec2-54-84-57-117.compute-1.amazonaws.com:8081/loginstatus', {
      observe: 'response',
      withCredentials: true,
    });
  }

  login(username: string, password: string){
    return this.http.post(`http://localhost:8081/reset`,{
      //'http://ec2-54-84-57-117.compute-1.amazonaws.com:8081/login', {
      "username": username,
      "password": password
    }, {
      withCredentials: true,
      observe: 'response'
    })
  }


}
