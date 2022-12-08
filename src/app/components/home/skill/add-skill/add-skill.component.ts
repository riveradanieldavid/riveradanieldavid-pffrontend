import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/_models/skill.model';
import { SkillService } from 'src/app/_services/skill.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})

export class AddSkillComponent implements OnInit {
  // ATTRIBUTES
  skill: Skill = {
    nameskill: '',
    levelskill: ''
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
    private skillService: SkillService,
    private route: ActivatedRoute,
    private router: Router,
    // ADDED
    private tokenStorageService: TokenStorageService
    // ADDED /
  ) { }
  // SAVE DATA
  saveSkill(): void {
    const data = {
      nameskill: this.skill.nameskill,
      levelskill: this.skill.levelskill
    };
    // SERVICE
    this.skillService.create(data)
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

  newSkill(): void {
    this.submitted = false;
    this.skill = {
      nameskill: '',
      levelskill: ''
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
