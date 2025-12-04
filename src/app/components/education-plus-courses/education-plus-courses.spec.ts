import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPlusCourses } from './education-plus-courses';

describe('EducationPlusCourses', () => {
  let component: EducationPlusCourses;
  let fixture: ComponentFixture<EducationPlusCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationPlusCourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationPlusCourses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
