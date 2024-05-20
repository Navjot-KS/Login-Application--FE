import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  createLoggedInUser(payload: any) {
    return this.http.post(`${URL}/create`, payload);
  }

  getLoggedUsersData() {
    console.log('Called- service');
    return this.http.get(`${URL}/userInfo`)
  }

  getUsersCount() {
    return this.http.get(`${URL}/count`);
  }

  getUserdetails(id: any) {
    console.log('service hit with id:' , id)
    console.log('Link', `${URL}/userInfo/${id}`)
    return this.http.get(`${URL}/userInfo/${id}`)
  }

  deleteUserRecord(id: any) {
    return this.http.delete(`${URL}/deleteUser/${id}`)
  }
}