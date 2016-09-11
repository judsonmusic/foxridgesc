import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "./../user-service/user.service";
import {AuthService} from "./../auth/auth.service";
import {LowercaseDirective} from "../pipes/lowercase.pipe";

@Component({
  selector: 'user-component',
  templateUrl: "/app/components/user/user.component.html",
  directives: [LowercaseDirective]
})
export class UserComponent {

  user: any;
  loggedIn: any;
  message: String;

  constructor(private userService: UserService, public authService: AuthService, public router: Router) {

    this.user = {

      firstName: "",
      lastName: "",
      email: "",
      password: ""

    };

    // this.userService.user$.subscribe((userData) => {
    //   this.user = userData;
    //   //console.log('We got some data!');
    // });
    //
    // this.userService.loggedIn$.subscribe((loggedIn) => {
    //   this.loggedIn = loggedIn;
    //   //console.log('The user is logged in!');
    // });

  }

  addAccount(user) {

    this.userService.createAccount(user).then((result) => {


     if(result){

        //console.log('Account Created Succesfully!', result['account']);

        this.userService.login(result['account']).subscribe((result) => {

          //console.log('You are now logged in as well...', result);
          this.authService.login();
          //onsole.log(this.authService.isLoggedIn);
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
          // Redirect the user
          this.router.navigate([redirect]);
        });


      }else{

        this.message = "Account already exists for this email!";


     }



    });
  }

  updateAccount(user) {

    this.userService.updateAccount(user).subscribe((result) => {
      if (result) {
        //console.log('Account Updated Succesfully!', result);

      }
    });
  }

}
