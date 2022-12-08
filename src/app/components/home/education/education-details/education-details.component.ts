import { Component, Input, OnInit } from '@angular/core';
import { EducationService } from 'src/app/_services/education.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/_models/education.model';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss']
})

export class EducationDetailsComponent implements OnInit {
  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentEducation: Education = {
    title: '',
    description: ''
  };
  message = '';
  // CONSTRUCTOR
  constructor(
    private educationService: EducationService,
    private route: ActivatedRoute,
    private router: Router) { }
  // DATA AVAILABLE
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getEducation(this.route.snapshot.params["id"]);
    }
  }
  // GET DATA FROM DB
  getEducation(id: string): void {
    this.educationService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEducation = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  // UPDATE DATA AND PUT IN DB
  updateEducation(): void {
    this.message = '';
    this.educationService.update(this.currentEducation.id, this.currentEducation)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          // this.router.navigate(['/educations']);
          // ADDED /
          this.message = res.message ? res.message : 'Actualizado'; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }
  // DELETE DATA FROM DB
  deleteEducation(): void {
    this.educationService.delete(this.currentEducation.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/educations'])
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
      this.deleteEducation()
    }
  }
  // ADDED /

}


