import { Component } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userDetails: any;

  constructor(private userLoginService: UserLoginService , private route : ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe((data: any)=> {
      const id = parseInt(data.get('id'));
      this.userLoginService.getUserdetails(id).subscribe((data: any) => {
        this.userDetails = data.responseObj[0];
      })
    })
  }

  deleteUser(id: any) {
    this.userLoginService.deleteUserRecord(id).subscribe((data: any) => {
      console.log('Delete User Success', data);
      this.router.navigate(['/users']);
    })
  }
}