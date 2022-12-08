import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/_models/experience.model';
import { ExperienceService } from 'src/app/_services/experience.service';
// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /
// MYRESUME
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-experience-image',
  templateUrl: './experience-image.component.html',
  styleUrls: ['./experience-image.component.scss']
})
export class ExperienceImageComponent implements OnInit {
  // ATTRIBUTES
  experience?: Experience[];
  ccccurrentExperience: Experience = {};
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
    private experienceService: ExperienceService,
    // ADDED
    private tokenStorageService: TokenStorageService,
    // ADDED /
    // MYRESUME
    private darkModeService: DarkModeService
    // MYRESUME /
  ) { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveExperience();
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
  retrieveExperience(): void {
    this.experienceService.getAll().subscribe({
      next: (data) => {
        this.experience = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveExperience();
    this.ccccurrentExperience = {};
    this.currentIndex = -1;
  }

  // MYRESUME
  get darkMode() {
    return this.darkModeService.darkMode;
  }
  // MYRESUME /


}
