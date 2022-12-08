import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/_models/about.model';
import { AboutService } from '../../../../_services/about.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-add-about',
  templateUrl: './add-about.component.html',
  styleUrls: ['./add-about.component.css']
})

export class AddAboutComponent implements OnInit {
  // ATTRIBUTES
  about: About = {
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
    private aboutService: AboutService,
    private route: ActivatedRoute,
    private router: Router,
    // ADDED
    private tokenStorageService: TokenStorageService
    // ADDED /
  ) { }
  // SAVE DATA
  saveAbout(): void {
    const data = {
      title: this.about.title,
      description: this.about.description
    };
    // SERVICE
    this.aboutService.create(data)
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

  newAbout(): void {
    this.submitted = false;
    this.about = {
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
