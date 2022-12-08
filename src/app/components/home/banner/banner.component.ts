import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/_models/banner.model';
import { BannerService } from 'src/app/_services/banner.service';
// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  // ATTRIBUTES
  banner?: Banner[];
  ccccurrentBanner: Banner = {};
  currentIndex = -1;
  title = '';
  // ADDED
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  // ADDED /

  // CONSTRUCTOR
  constructor(private bannerService: BannerService,
    // ADDED
    private tokenStorageService: TokenStorageService
    // ADDED /
  ) { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveBanner();
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
  // GET DATA FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveBanner(): void {
    this.bannerService.getAll()
      .subscribe({
        next: (data) => {
          this.banner = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveBanner();
    this.ccccurrentBanner = {};
    this.currentIndex = -1;
  }
  // SHOW ARTICE TO EDIT
  setActiveBanner(banner: Banner, index: number): void {
    this.ccccurrentBanner = banner;
    this.currentIndex = index;
  }

}





