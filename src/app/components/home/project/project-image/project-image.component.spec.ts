import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsImageComponent } from './project-image.component';

describe('ProjectsImageComponent', () => {
  let component: ProjectsImageComponent;
  let fixture: ComponentFixture<ProjectsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
