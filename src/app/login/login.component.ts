import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';

interface model {
  data : {
    id : number ,
    email : string ,
    password : string
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  
  constructor(private http: HttpClient, private userLoginService: UserLoginService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const payload = {...this.loginForm.value};
      this.userLoginService.createLoggedInUser(payload).subscribe();
      this.router.navigate(['/users']);
      this.loginForm.reset();
    }
  }
}