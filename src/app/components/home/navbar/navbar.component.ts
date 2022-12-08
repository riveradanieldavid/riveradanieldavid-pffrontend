// MYRESUME /
import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    // animation triggers go here
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ]),
    ]),
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    private darkModeService: DarkModeService
  ) { }

  ngOnInit(): void {
  }

  get darkMode() {
    return this.darkModeService.darkMode
  }

  scroll(id: any) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  darkmodeHandler() {
    this.darkModeService.darkMode = !this.darkModeService.darkMode
    console.log(this.darkMode, 'hiiii');

  }

  showNavbar: boolean = false;
  runningTimeOut: any;
  selectedBtn = 'profile'

  // ACTIVATES A SPECIFIC LINK FROM SIDE MENU WHEN SCROLLING THE PAGE
  // "HostListener" prevent default event. And implement a method instead
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.runningTimeOut) {
      clearTimeout(this.runningTimeOut);
    }
    if (window.scrollY >= 0.8 * window.innerHeight) {
      this.showNavbar = true;
      this.runningTimeOut = setTimeout(() => {
        this.showNavbar = false
      }, 5000);
    }
    else {
      this.showNavbar = false;
    }

    // IF REMOVE BUTTONS, RECONFIGURE "window.scrollY" VALUES
    if (window.scrollY >= -1 * window.innerHeight) {
      this.selectedBtn = 'home';
    }
    if (window.scrollY >= 0.7 * window.innerHeight) {
      this.selectedBtn = 'about';
    }
    if (window.scrollY >= 2 * window.innerHeight) { //TRANSITION BETWEEN ABOUT AND EXPERIENCE
      this.selectedBtn = 'experience';
    }
    if (window.scrollY >= 3.2 * window.innerHeight) { //TRANSITION BETWEEN ABOUT AND EXPERIENCE
      this.selectedBtn = 'education';
    }
    if (window.scrollY >= 4.5 * window.innerHeight) { //TRANSITION BETWEEN EXPERIENCE AND SKILLS...
      this.selectedBtn = 'skill';
    }
    if (window.scrollY >= 5.5 * window.innerHeight) { //TRANSITION BETWEEN ABOUT AND EXPERIENCE
      this.selectedBtn = 'project';
    }
    if (window.scrollY >=5.9 * window.innerHeight) {
      this.selectedBtn = 'contact';
    }

    /* DELETED BUTTONS AND RECONFIGURED
        if (window.scrollY >= window.innerHeight) {
          this.selectedBtn = 'profile';
        }
        // if(window.scrollY>=1.8*window.innerHeight){
        //   this.selectedBtn = 'experience';
        // }
        if (window.scrollY >= 1.8 * window.innerHeight) {
          this.selectedBtn = 'skills';
        }
        if (window.scrollY >= 2.8 * window.innerHeight) {
          this.selectedBtn = 'contact';
        }
     */

  }
}


