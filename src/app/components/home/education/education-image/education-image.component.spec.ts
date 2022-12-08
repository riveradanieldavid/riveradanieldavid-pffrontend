import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationImageComponent } from './education-image.component';

describe('EducationImageComponent', () => {
  let component: EducationImageComponent;
  let fixture: ComponentFixture<EducationImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
