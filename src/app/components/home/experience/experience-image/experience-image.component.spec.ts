import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceImageComponent } from './experience-image.component';

describe('ExperienceImageComponent', () => {
  let component: ExperienceImageComponent;
  let fixture: ComponentFixture<ExperienceImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
