import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project.model';
import { ProjectService } from 'src/app/_services/project.service';
// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /
// MYRESUME
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-project-image',
  templateUrl: './project-image.component.html',
  styleUrls: ['./project-image.component.scss']
})

export class ProjectImageComponent implements OnInit {


  // ATTRIBUTES
  project?: Project[];
  ccccurrentProject: Project = {};
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
    private projectService: ProjectService,
    // ADDED
    private tokenStorageService: TokenStorageService,
    // ADDED /
    // MYRESUME
    private darkModeService: DarkModeService
    // MYRESUME /
  ) { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveProject();
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
  retrieveProject(): void {
    this.projectService.getAll().subscribe({
      next: (data) => {
        this.project = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveProject();
    this.ccccurrentProject = {};
    this.currentIndex = -1;
  }

  // MYRESUME
  get darkMode() {
    return this.darkModeService.darkMode;
  }
  // MYRESUME /


}
