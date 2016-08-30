import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "./../user-service/user.service";
import {AuthService} from "./../auth/auth.service";
import {LowercaseDirective} from "../pipes/lowercase.pipe";

@Component({
  selector: 'profile-component',
  directives: [LowercaseDirective],
  templateUrl: "/app/components/profile/profile.component.html"
})
export class ProfileComponent implements OnInit {

  user: any;
  loggedIn: any;
  editMode: boolean;
  public files: any;
  public file: any;
  public uploadComplete: boolean;

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
        this.editMode = !this.editMode;
        alert('Account Updated!');
      }
    });
  }

  setFiles(event){
    this.uploadComplete = false;
    this.files = event.srcElement.files;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.file = e.target['result'];
      };

      reader.readAsDataURL(event.target.files[0]);

    }

    console.log(event);

  }


  uploadFile($event){

    this.userService.uploadFile(this.files).then((res)=>{

      this.user.image = res.account.image;
      this.files = null;
      this.uploadComplete = true;
      //when successful, we need to update acount with the file name.

    })

  }

}
