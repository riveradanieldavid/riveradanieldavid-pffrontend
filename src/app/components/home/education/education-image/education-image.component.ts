import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/_models/education.model';
import { EducationService } from 'src/app/_services/education.service';
// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /
// MYRESUME
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-education-image',
  templateUrl: './education-image.component.html',
  styleUrls: ['./education-image.component.scss']
})
export class EducationImageComponent implements OnInit {
  // ATTRIBUTES
  education?: Education[];
  ccccurrentEducation: Education = {};
  currentIndex = -1;
  title = '';
  // ADDED
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  // ADDED /

  // CONSTRUCTOR
  constructor(
    private educationService: EducationService,
    // ADDED
    private tokenStorageService: TokenStorageService,
    // ADDED /
    // MYRESUME
    private darkModeService: DarkModeService
    // MYRESUME /
  ) { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveEducation();
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
  // GET DATA FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveEducation(): void {
    this.educationService.getAll().subscribe({
      next: (data) => {
        this.education = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveEducation();
    this.ccccurrentEducation = {};
    this.currentIndex = -1;
  }

  // MYRESUME
  get darkMode() {
    return this.darkModeService.darkMode;
  }
  // MYRESUME /


}
