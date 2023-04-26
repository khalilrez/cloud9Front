import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {

    // Header Sticky
    $(window).on('scroll', function () {
      if ($(this).scrollTop()! > 120) {
        $('.navbar-area').addClass("is-sticky");
      }
      else {
        $('.navbar-area').removeClass("is-sticky");
      }
    });

  }

}
