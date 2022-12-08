import { Component, OnInit } from '@angular/core';
// MYRESUME
import { DarkModeService } from '../../../_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
// MYRESUME
export class EducationComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }
  ngOnInit(): void {
  }
  get darkMode() {
    return this.darkModeService.darkMode;
  }

}
// MYRESUME /

