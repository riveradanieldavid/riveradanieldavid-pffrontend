import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/_models/experience.model';
import { ExperienceService } from 'src/app/_services/experience.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})

export class AddExperienceComponent implements OnInit {
  // ATTRIBUTES
  experience: Experience = {
    title: '',
    description: ''
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
    private experienceService: ExperienceService,
    private route: ActivatedRoute,
    private router: Router,
    // ADDED
    private tokenStorageService: TokenStorageService
    // ADDED /
  ) { }
  // SAVE DATA
  saveExperience(): void {
    const data = {
      title: this.experience.title,
      description: this.experience.description
    };
    // SERVICE
    this.experienceService.create(data)
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

  newExperience(): void {
    this.submitted = false;
    this.experience = {
      title: '',
      description: ''
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
