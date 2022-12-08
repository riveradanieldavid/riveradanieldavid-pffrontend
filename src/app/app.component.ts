// MYRESUME
import { Component, AfterViewInit, OnInit } from '@angular/core';
// INSTALL npm i --save-dev @types/aos
import * as AOS from 'aos';
// MYRESUME /

interface Detail {
  institute: string,
  position: string,
  time: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {
    AOS.init();
  }
  title = 'Rivera Daniel';
  ngAfterViewInit(): void {
  }
}
// MYRESUME /
