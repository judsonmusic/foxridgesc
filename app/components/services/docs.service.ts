import { Injectable } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Headers } from '@angular/http';
import {AuthService} from "../auth/auth.service";
import {Subject} from "../../../node_modules/rxjs/src/Subject";
import {Observable} from "../../../node_modules/rxjs/src/Observable";



@Injectable()
export class DocsService{


  constructor(private http:Http, public authService:AuthService, public router:Router) {

  }

  getDocs(){

      let headers = new Headers();
      //headers.append('x-access-token', localStorage['jwt']);

      return this.http
        .get('/api/files', {headers : headers} )
        .map(res => res.json())
        .map((res) => {

          return res.files;

        }, (error) => console.log('There was an error', error));

  }

}
