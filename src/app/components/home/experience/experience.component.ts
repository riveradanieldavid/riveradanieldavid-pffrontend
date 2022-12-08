import { Component, OnInit } from '@angular/core';
// MYRESUME
import { DarkModeService } from '../../../_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
// MYRESUME
export class ExperienceComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }
  ngOnInit(): void {
  }
  get darkMode() {
    return this.darkModeService.darkMode;
  }

}
// MYRESUME /

