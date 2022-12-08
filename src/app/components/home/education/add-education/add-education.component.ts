import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/_models/education.model';
import { EducationService } from 'src/app/_services/education.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})

export class AddEducationComponent implements OnInit {
  // ATTRIBUTES
  education: Education = {
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
    private educationService: EducationService,
    private route: ActivatedRoute,
    private router: Router,
    // ADDED
    private tokenStorageService: TokenStorageService
    // ADDED /
  ) { }
  // SAVE DATA
  saveEducation(): void {
    const data = {
      title: this.education.title,
      description: this.education.description
    };
    // SERVICE
    this.educationService.create(data)
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

  newEducation(): void {
    this.submitted = false;
    this.education = {
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
