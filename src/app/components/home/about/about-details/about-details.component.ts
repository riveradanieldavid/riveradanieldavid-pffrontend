import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/_models/about.model';
import { AboutService } from 'src/app/_services/about.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.css']
})

export class AboutDetailsComponent implements OnInit {
  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentAbout: About = {
    title: '',
    description: ''
  };
  message = '';
  // HIDE AND SHOW ELEMENT
  element = true;

  // CONSTRUCTOR
  constructor(
    private aboutService: AboutService,
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
    this.aboutService.get(id)
      .subscribe({
        next: (data) => {
          this.currentAbout = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  // UPDATE DATA AND PUT IN DB
  updateAbout(): void {
    this.message = '';
    this.aboutService.update(this.currentAbout.id, this.currentAbout)
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
  deleteAbout(): void {
    this.aboutService.delete(this.currentAbout.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/abouts'])
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
      this.deleteAbout()
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


