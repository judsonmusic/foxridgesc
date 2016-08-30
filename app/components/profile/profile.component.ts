import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "./../user-service/user.service";
import {AuthService} from "./../auth/auth.service";

@Component({
  selector: 'profile-component',
  templateUrl: "/app/components/profile/profile.component.html"
})
export class ProfileComponent implements OnInit {

  user: any;
  loggedIn: any;

  constructor(private userService: UserService, public authService: AuthService, public router: Router) {

    this.user = {

      firstName: "",
      lastName: "",
      email: "",
      password: ""

    };
    this.userService = userService;
    this.user = this.userService.userData;

  }

  ngOnInit() {


  }

  updateAccount(user) {

    this.userService.updateAccount(user).subscribe((result) => {
      console.log('Some result!', result);
      if (result) {
        console.log('Account Updated Succesfully!', result);
        alert('Account Updated!');
      }
    });
  }

}
