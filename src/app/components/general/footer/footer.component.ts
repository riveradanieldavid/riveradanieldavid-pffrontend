import { Component, OnInit } from '@angular/core';
// MYRESUME
import { DarkModeService } from 'src/app/_services/dark-mode.service';
// MYRESUME /

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    // MYRESUME
    private darkModeService: DarkModeService
    // MYRESUME /


  ) { }

  ngOnInit(): void {
  }
  // MYRESUME
  get darkMode() {
    return this.darkModeService.darkMode;
  }
  // MYRESUME /

}
