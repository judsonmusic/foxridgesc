import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {UserComponent} from "../user/user.component";
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'home-component',
  templateUrl: '/app/components/home/home.component.html',
  directives: [LoginComponent, UserComponent]
})
export class HomeComponent {


  constructor(public router: Router, public userService: UserService){


  }

  getStarted(){

    this.router.navigate(['/survey']);

  }

  getUser() {

    this.userService.getUser().subscribe();

  }
}
