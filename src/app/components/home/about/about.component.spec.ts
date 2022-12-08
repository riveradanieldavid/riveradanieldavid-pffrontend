import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGeneralExperienceComponent } from './about.component';

describe('ArticleGeneralExperienceComponent', () => {
  let component: ArticleGeneralExperienceComponent;
  let fixture: ComponentFixture<ArticleGeneralExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleGeneralExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleGeneralExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
