import { Component } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  userData: any;
  usersCount: any;
  constructor(private userLoginService: UserLoginService, private router: Router) {}
  
  ngOnInit() {
   this.getUserLoggedData();
   this.getTotalUsersCount();
  }

  getUserLoggedData() {
    console.log('Called');
    this.userLoginService.getLoggedUsersData().subscribe((data : any) => {
      console.log('Data', data.responseObj)
      if (data && data.responseObj) {
        this.userData = data.responseObj;
      } else {
        console.log('Error');
      }
    })
  }

  getTotalUsersCount() {
    console.log('Called method')
    this.userLoginService.getUsersCount().subscribe((data: any) => {
      console.log('DATa', data.responseObj[0].userCount);
      if (data) {
        this.usersCount = data.responseObj[0].userCount;
      }
    })
  }

  navigateToDetailsPage(id: any) {
    this.router.navigate([`users/${id}`]);
  }
}