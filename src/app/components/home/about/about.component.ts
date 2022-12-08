import { Component, OnInit } from '@angular/core';
// MYRESUME
import { DarkModeService } from '../../../_services/dark-mode.service';
// MYRESUME /

// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
// MYRESUME
export class AboutComponent implements OnInit {

  // ADDED
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  // ADDED /

  constructor(
    // ADDED
    private tokenStorageService: TokenStorageService,
    // ADDED /

    // MYRESUME
    private darkModeService: DarkModeService
    // MYRESUME /


  ) { }
  ngOnInit(): void {

    // ADDED
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
    // ADDED /


  }
  // MYRESUME
  get darkMode() {
    return this.darkModeService.darkMode;
  }
  // MYRESUME /
}
