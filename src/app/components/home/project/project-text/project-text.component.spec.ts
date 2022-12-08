import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTextComponent } from './project-text.component';

describe('ProjectsTextComponent', () => {
  let component: ProjectsTextComponent;
  let fixture: ComponentFixture<ProjectsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
