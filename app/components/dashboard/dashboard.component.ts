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
  public files: any;

  constructor(public docsService: DocsService, public userService: UserService, public router: Router){

    this.docsService.getDocs().subscribe((docs)=>{

      this.documents = docs;


    });

    this.userService.getAll().subscribe((profiles)=>{

      this.profiles = profiles;


    });

  }

  uploadFile($event){

   this.userService.uploadFile(this.files).then((res)=>{

     console.log(res);

   })

  }

  setFiles(event){

    this.files = event.srcElement.files;
    console.log(this.files);
  }


  viewFamily(id){

    this.router.navigate(['/family', id]);
  }
}
