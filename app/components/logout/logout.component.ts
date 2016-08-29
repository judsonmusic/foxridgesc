import { Component } from '@angular/core';
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'logout',
  templateUrl: "app/components/logout/logout.component.html"
})
export class LogoutComponent {

  constructor(private userService: UserService){

    userService.logout();

  }
}
