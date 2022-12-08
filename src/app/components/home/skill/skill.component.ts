import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/_services/dark-mode.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor(
    private darkModeService: DarkModeService
  ) { }

  ngOnInit(): void {
  }
  get darkMode() {
    return this.darkModeService.darkMode;
  }

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






}
