import { Component, Input, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/_services/experience.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/_models/experience.model';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss']
})

export class ExperienceDetailsComponent implements OnInit {
  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentExperience: Experience = {
    title: '',
    description: ''
  };
  message = '';
  // CONSTRUCTOR
  constructor(
    private experienceService: ExperienceService,
    private route: ActivatedRoute,
    private router: Router) { }
  // DATA AVAILABLE
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getExperience(this.route.snapshot.params["id"]);
    }
  }
  // GET DATA FROM DB
  getExperience(id: string): void {
    this.experienceService.get(id)
      .subscribe({
        next: (data) => {
          this.currentExperience = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  // UPDATE DATA AND PUT IN DB
  updateExperience(): void {
    this.message = '';
    this.experienceService.update(this.currentExperience.id, this.currentExperience)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          // this.router.navigate(['/experiences']);
          // ADDED /
          this.message = res.message ? res.message : 'Actualizado'; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }
  // DELETE DATA FROM DB
  deleteExperience(): void {
    this.experienceService.delete(this.currentExperience.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/experiences'])
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
      this.deleteExperience()
    }
  }
  // ADDED /

}


