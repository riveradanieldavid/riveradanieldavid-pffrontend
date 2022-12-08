import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTextComponent } from './education-text.component';

describe('EducationTextComponent', () => {
  let component: EducationTextComponent;
  let fixture: ComponentFixture<EducationTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
