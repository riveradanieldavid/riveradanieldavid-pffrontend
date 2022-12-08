import { Component, Input, OnInit } from '@angular/core';
import { SkillService } from 'src/app/_services/skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/_models/skill.model';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.scss']
})

export class SkillDetailsComponent implements OnInit {
  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentSkill: Skill = {
    nameskill: ''
  };
  message = '';
  // CONSTRUCTOR
  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute,
    private router: Router) { }
  // DATA AVAILABLE
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getSkill(this.route.snapshot.params["id"]);
    }
  }
  // GET DATA FROM DB
  getSkill(id: string): void {
    this.skillService.get(id)
      .subscribe({
        next: (data) => {
          this.currentSkill = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  // UPDATE DATA AND PUT IN DB
  updateSkill(): void {
    this.message = '';
    this.skillService.update(this.currentSkill.id, this.currentSkill)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          // this.router.navigate(['/skills']);
          // ADDED /
          this.message = res.message ? res.message : 'Actualizado'; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }
  // DELETE DATA FROM DB
  deleteSkill(): void {
    this.skillService.delete(this.currentSkill.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/skills'])
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
      this.deleteSkill()
    }
  }
  // ADDED /

}


