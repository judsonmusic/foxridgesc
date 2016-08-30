import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from "../user-service/user.service";
import {MyFilterPipe} from "../pipes/filter.pipe";

@Component({
  selector: 'my-hero-detail',
  templateUrl: '/app/components/family/family.component.html',
  pipes: [MyFilterPipe]
})


export class FamilyComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  public family:any;


  constructor(private route: ActivatedRoute,
              private userService: UserService) {

  }

  ngOnInit() {


    //passing route param...
    this.sub = this.route.params.subscribe(params => {

      //console.log('Dimension Comp', this.userService.userData);
      let id = params['id']; // (+) converts string 'id' to a number
      console.log(id);
      //get the family based on id;
      this.userService.getFamily(id).subscribe((family)=>{

       this.family = family;
        console.log(this.family)

      })

    });

  }

  buildData() {



  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

