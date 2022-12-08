import { Component, HostListener, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// MYRESUME /
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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
export class HeaderComponent implements OnInit {
  // ATTRIBUTES
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  // CONSTRUCTOR
  constructor(
    private tokenStorageService: TokenStorageService,
    // MYRESUME
    private darkModeService: DarkModeService
    // MYRESUME /
  ) { }

  // DATA AVAILABLE
  ngOnInit(): void {
    // TOKEN IN isLoggedin
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    // ROLES
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
  }
  // SIGNOUT FROM TokenStorageService
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  // MYRESUME
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
    // ORIGINAL SCROLLING MENU
    if (window.scrollY >= window.innerHeight) {
      this.selectedBtn = 'profile';
    }
    // IF REMOVE BUTTONS, RECONFIGURE "window.scrollY" VALUES
    if (window.scrollY >= 2 * window.innerHeight) { //TRANSITION BETWEEN ABOUT AND EXPERIENCE
      this.selectedBtn = 'experience';
    }
    if (window.scrollY >= 4 * window.innerHeight) { //TRANSITION BETWEEN EXPERIENCE AND SKILLS...
      this.selectedBtn = 'skills';
    }
    if (window.scrollY >= 3.8 * window.innerHeight) {
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
  // MYRESUME /

}





