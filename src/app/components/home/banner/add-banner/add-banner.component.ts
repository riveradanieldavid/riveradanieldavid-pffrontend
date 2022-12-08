import { Component } from '@angular/core';
import { Banner } from 'src/app/_models/banner.model';
import { BannerService } from 'src/app/_services/banner.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
// ADDED /

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent {

  // ATTRIBUTES
  banner: Banner = {
    title: '',
    description: ''
  };
  submitted = false;

  // CONSTRUCTOR
  constructor(
    private bannerService: BannerService,
    private route: ActivatedRoute,
    private router: Router) { }

  // SAVE DATA
  saveBanner(): void {
    const data = {
      title: this.banner.title,
      description: this.banner.description
    };

    // SERVICE
    this.bannerService.create(data)
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

  newBanner(): void {
    this.submitted = false;
    this.banner = {
      title: '',
      description: ''
    };
  }

}

