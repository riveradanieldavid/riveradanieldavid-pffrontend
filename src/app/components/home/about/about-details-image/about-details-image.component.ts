import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/_models/image.model';
import { AboutService } from 'src/app/_services/aboutImage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-details-image',
  templateUrl: './about-details-image.component.html',
  styleUrls: ['./about-details-image.component.css']
})
export class AboutDetailsImageComponent implements OnInit {

  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentImage: Image = {
    // title: '',
    // description: ''
  };
  message = '';
  // HIDE AND SHOW ELEMENT
  element = true;

  // CONSTRUCTOR
  constructor(
    private imageService: AboutService,
    private route: ActivatedRoute,
    private router: Router) { }
  // DATA AVAILABLE
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAbout(this.route.snapshot.params["id"]);
    }
  }
  // GET DATA FROM DB
  getAbout(id: string): void {
    this.imageService.get(id)
      .subscribe({
        next: (data) => {
          this.currentImage = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  // UPDATE DATA AND PUT IN DB
  updateAbout(): void {
    this.message = '';
    this.imageService.update(this.currentImage.id, this.currentImage)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          // this.router.navigate(['/abouts']);
          // ADDED /
          this.message = res.message ? res.message : 'Actualizado'; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }
  // DELETE DATA FROM DB
  deleteImage(): void {
    this.imageService.delete(this.currentImage.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/images'])
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
      this.deleteImage()
    }
  }
  // ADDED /

  // HIDE AND SHOW ELEMENT
  showEditor() {
    return (this.element = true);
  }
  hideEditor() {
    return (this.element = false);
  }
  // HIDE AND SHOW ELEMENT/


}


