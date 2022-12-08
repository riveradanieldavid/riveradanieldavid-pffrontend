import { Component, OnInit } from '@angular/core';
// MYRESUME
import { DarkModeService } from '../../../_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
// MYRESUME
export class ProjectComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }
  ngOnInit(): void {
  }
  get darkMode() {
    return this.darkModeService.darkMode;
  }

}
// MYRESUME /

