import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetailsImageComponent } from './about-details-image.component';

describe('AboutDetailsImageComponent', () => {
  let component: AboutDetailsImageComponent;
  let fixture: ComponentFixture<AboutDetailsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDetailsImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDetailsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
