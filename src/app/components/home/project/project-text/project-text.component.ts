import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project.model';
import { ProjectService } from 'src/app/_services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /
// MYRESUME
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-project-text',
  templateUrl: './project-text.component.html',
  styleUrls: ['./project-text.component.scss']
})

export class ProjectTextComponent implements OnInit {
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
  // HIDE AND SHOW ELEMENT
  element = true;

  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentProject: Project = {
    title: '',
    description: ''
  };
  message = '';

  // CONSTRUCTOR
  constructor(
    private projectService: ProjectService,
    // ADDED
    private tokenStorageService: TokenStorageService,
    // ADDED /
    private route: ActivatedRoute,
    private router: Router,
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

    if (!this.viewMode) {
      this.message = '';
      this.getProject1(this.route.snapshot.params["id"]);
    }

  }


  // GET DATA FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveProject(): void {
    this.projectService.getAll()
      .subscribe({
        next: (data) => {
          this.project = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
  }
  getProject1(id: string): void {
    this.projectService.get(1)
      .subscribe({
        next: (data) => {
          this.currentProject = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // SHOW ARTICE TO EDIT AND INDEX
  refreshList(): void {
    this.retrieveProject();
    this.ccccurrentProject = {};
    this.currentIndex = -1;
  }
  setActiveProject(project: Project, index: number): void {
    this.ccccurrentProject = project;
    this.currentIndex = index;
  }

  // HIDE AND SHOW ELEMENT
  showEditor() {
    return (this.element = false);
  }
  hideEditor() {
    return (this.element = true
    );
  }
  // HIDE AND SHOW ELEMENT/




  // DELETE DATA FROM DB
  deleteProject(): void {
    this.projectService.delete(this.currentProject.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/home'])
          // ADDED
          window.location.reload();
          // ADDED
        },
        error: (e) => console.error(e)
      });
  }
  // ADDED
  confirmDelete() {
    if (window.confirm('Borrar item seleccionado?')) {
      this.deleteProject()
    }
  }
  // ADDED /

  // MYRESUME
  get darkMode() {
    return this.darkModeService.darkMode;
  }
  // MYRESUME /



}


