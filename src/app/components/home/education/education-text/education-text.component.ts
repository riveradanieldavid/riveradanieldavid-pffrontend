import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/_models/education.model';
import { EducationService } from 'src/app/_services/education.service';
import { ActivatedRoute, Router } from '@angular/router';

// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /
// MYRESUME
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-education-text',
  templateUrl: './education-text.component.html',
  styleUrls: ['./education-text.component.scss']
})

export class EducationTextComponent implements OnInit {
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
  // HIDE AND SHOW ELEMENT
  element = true;

  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentEducation: Education = {
    title: '',
    description: ''
  };
  message = '';

  // CONSTRUCTOR
  constructor(
    private educationService: EducationService,
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

    if (!this.viewMode) {
      this.message = '';
      this.getEducation1(this.route.snapshot.params["id"]);
    }

  }


  // GET DATA FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveEducation(): void {
    this.educationService.getAll()
      .subscribe({
        next: (data) => {
          this.education = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
  }
  getEducation1(id: string): void {
    this.educationService.get(1)
      .subscribe({
        next: (data) => {
          this.currentEducation = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // SHOW ARTICE TO EDIT AND INDEX
  refreshList(): void {
    this.retrieveEducation();
    this.ccccurrentEducation = {};
    this.currentIndex = -1;
  }
  setActiveEducation(education: Education, index: number): void {
    this.ccccurrentEducation = education;
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
  deleteEducation(): void {
    this.educationService.delete(this.currentEducation.id)
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
      this.deleteEducation()
    }
  }
  // ADDED /

  // MYRESUME
  get darkMode() {
    return this.darkModeService.darkMode;
  }
  // MYRESUME /



}


