import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTextComponent } from './banner-text.component';

describe('ExperienceTextComponent', () => {
  let component: ExperienceTextComponent;
  let fixture: ComponentFixture<ExperienceTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
