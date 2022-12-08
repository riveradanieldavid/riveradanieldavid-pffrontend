import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/_models/experience.model';
import { ExperienceService } from 'src/app/_services/experience.service';
import { ActivatedRoute, Router } from '@angular/router';

// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /
// MYRESUME
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-experience-text',
  templateUrl: './experience-text.component.html',
  styleUrls: ['./experience-text.component.scss']
})

export class ExperienceTextComponent implements OnInit {
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
  // HIDE AND SHOW ELEMENT
  element = true;

  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentExperience: Experience = {
    title: '',
    description: ''
  };
  message = '';

  // CONSTRUCTOR
  constructor(
    private experienceService: ExperienceService,
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

    if (!this.viewMode) {
      this.message = '';
      this.getExperience1(this.route.snapshot.params["id"]);
    }

  }


  // GET DATA FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveExperience(): void {
    this.experienceService.getAll()
      .subscribe({
        next: (data) => {
          this.experience = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
  }
  getExperience1(id: string): void {
    this.experienceService.get(1)
      .subscribe({
        next: (data) => {
          this.currentExperience = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // SHOW ARTICE TO EDIT AND INDEX
  refreshList(): void {
    this.retrieveExperience();
    this.ccccurrentExperience = {};
    this.currentIndex = -1;
  }
  setActiveExperience(experience: Experience, index: number): void {
    this.ccccurrentExperience = experience;
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
  deleteExperience(): void {
    this.experienceService.delete(this.currentExperience.id)
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
      this.deleteExperience()
    }
  }
  // ADDED /

  // MYRESUME
  get darkMode() {
    return this.darkModeService.darkMode;
  }
  // MYRESUME /



}


