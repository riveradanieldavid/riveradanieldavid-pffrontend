import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/_models/skill.model';
import { SkillService } from 'src/app/_services/skill.service';
import { ActivatedRoute, Router } from '@angular/router';

// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /
// MYRESUME
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-skill-text',
  templateUrl: './skill-text.component.html',
  styleUrls: ['./skill-text.component.scss']
})

export class SkillTextComponent implements OnInit {
  // ATTRIBUTES
  skill?: Skill[];
  ccccurrentSkill: Skill = {};
  currentIndex = -1;
  html = '';
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
  @Input() currentSkill: Skill = {
    nameskill: ''
  };
  message = '';

  // CONSTRUCTOR
  constructor(
    private skillService: SkillService,
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
    this.retrieveSkill();
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
      this.getSkill1(this.route.snapshot.params["id"]);
    }

  }


  // GET DATA FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveSkill(): void {
    this.skillService.getAll()
      .subscribe({
        next: (data) => {
          this.skill = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
  }
  getSkill1(id: string): void {
    this.skillService.get(1)
      .subscribe({
        next: (data) => {
          this.currentSkill = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // SHOW ARTICE TO EDIT AND INDEX
  refreshList(): void {
    this.retrieveSkill();
    this.ccccurrentSkill = {};
    this.currentIndex = -1;
  }
  setActiveSkill(skill: Skill, index: number): void {
    this.ccccurrentSkill = skill;
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
  deleteSkill(): void {
    this.skillService.delete(this.currentSkill.id)
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
      this.deleteSkill()
    }
  }
  // ADDED /

  // MYRESUME
  get darkMode() {
    return this.darkModeService.darkMode;
  }
  // MYRESUME /


  // MYRESUME
  skills = [
    {
      skillname: "HTML",
      skillvalue: "67%",
    },
    {
      skillname: "CSS",
      skillvalue: "57%",
    },
    {
      skillname: "JAVASCRIPT",
      skillvalue: "47%",
    },
    {
      skillname: "JAVA",
      skillvalue: "37%",
    },
    {
      skillname: "ANGULAR",
      skillvalue: "47%",
    },
    {
      skillname: "REACT",
      skillvalue: "20%",
    },
    {
      skillname: "BOOTSTRAP",
      skillvalue: "30%",
    },
  ]
  // MYRESUME /


}


















