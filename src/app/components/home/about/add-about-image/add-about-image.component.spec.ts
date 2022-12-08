import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAboutImageComponent } from './add-about-image.component';

describe('AddAboutImageComponent', () => {
  let component: AddAboutImageComponent;
  let fixture: ComponentFixture<AddAboutImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAboutImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAboutImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
