import { Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var jQuery:any;

@Component({
    selector: 'c-header',
    templateUrl: '/app/components/layout/header.component.html'
})
export class HeaderComponent  implements AfterViewInit {

  @ViewChild('hoversafe') el:ElementRef;

  ngAfterViewInit() {

    jQuery("a").on('click', function(evt){

      if(jQuery('.navbar-collapse').hasClass('in')) {

        evt.stopPropagation();

        jQuery('.navbar-toggle').click();
      }


    });

   jQuery('.navbar-collapse').on('mouseleave', function(evt){

      if(jQuery(this).hasClass('in')) {

        jQuery('.navbar-toggle').click();

      }

    });

    jQuery('.row.content').on('touchstart', function(evt){
      if(jQuery('.navbar-collapse').hasClass('in')) {
        jQuery('.navbar-toggle').click();
      }

    });

  }

}
