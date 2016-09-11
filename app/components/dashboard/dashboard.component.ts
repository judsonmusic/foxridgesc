import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DocsService} from "../services/docs.service";
import {UserService} from "../user-service/user.service";


@Component({
  selector: 'dashboard',
  templateUrl: '/app/components/dashboard/dashboard.component.html'
})
export class DashboardComponent {

  public documents: any;
  public profiles: any;

  constructor(public docsService: DocsService, public userService: UserService, public router: Router){

    this.docsService.getDocs().subscribe((docs)=>{

      this.documents = docs;


    });

    this.userService.getAll().subscribe((profiles)=>{

      console.log(profiles);

      this.profiles = profiles;


    });

  }



  viewFamily(id){

    this.router.navigate(['/family', id]);
  }
}
