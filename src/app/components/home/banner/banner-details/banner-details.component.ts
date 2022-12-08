import { Component, Input, OnInit } from '@angular/core';
import { BannerService } from 'src/app/_services/banner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/_models/banner.model';

@Component({
  selector: 'app-banner-details',
  templateUrl: './banner-details.component.html',
  styleUrls: ['./banner-details.component.css']
})

export class BannerDetailsComponent implements OnInit {
  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentBanner: Banner = {
    title: '',
    description: ''
  };
  message = '';
  // CONSTRUCTOR
  constructor(
    private bannerService: BannerService,
    private route: ActivatedRoute,
    private router: Router) { }
  // DATA AVAILABLE
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getBanner(this.route.snapshot.params["id"]);
    }
  }
  // GET DATA FROM DB
  getBanner(id: string): void {
    this.bannerService.get(id)
      .subscribe({
        next: (data) => {
          this.currentBanner = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  // UPDATE DATA AND PUT IN DB
  updateBanner(): void {
    this.message = '';
    this.bannerService.update(this.currentBanner.id, this.currentBanner)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          // this.router.navigate(['/banners']);
          // ADDED /
          this.message = res.message ? res.message : 'Actualizado'; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }
  // DELETE DATA FROM DB
  deleteBanner(): void {
    this.bannerService.delete(this.currentBanner.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/banners'])
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
      this.deleteBanner()
    }
  }
  // ADDED /

}


