import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project.model';
import { ProjectService } from 'src/app/_services/project.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})

export class AddProjectComponent implements OnInit {
  // ATTRIBUTES
  project: Project = {
    title: '',
    description: '',
    link: '',
    linkdescription: ''
  };
  submitted = false;
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
    private route: ActivatedRoute,
    private router: Router,
    // ADDED
    private tokenStorageService: TokenStorageService
    // ADDED /
  ) { }
  // SAVE DATA
  saveProject(): void {
    const data = {
      title: this.project.title,
      description: this.project.description,
      link: this.project.link,
      linkdescription: this.project.linkdescription
    };
    // SERVICE
    this.projectService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          this.router.navigate(['/home']);
          // ADDED /
          // this.submitted = true; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }

  newProject(): void {
    this.submitted = false;
    this.project = {
      title: '',
      description: '',
      link: '',
      linkdescription: ''
    };
  }
  // DATA AVAILABLE
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

  toBack() {
    return this.router.navigate(['/home']);
  }

}
