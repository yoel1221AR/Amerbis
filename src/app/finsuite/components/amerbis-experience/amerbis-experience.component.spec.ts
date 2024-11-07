import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmerbisExperienceComponent } from './amerbis-experience.component';

describe('AmerbisExperienceComponent', () => {
  let component: AmerbisExperienceComponent;
  let fixture: ComponentFixture<AmerbisExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmerbisExperienceComponent]
    });
    fixture = TestBed.createComponent(AmerbisExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
