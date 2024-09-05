import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntologicalCoachingComponent } from './ontological-coaching.component';

describe('OntologicalCoachingComponent', () => {
  let component: OntologicalCoachingComponent;
  let fixture: ComponentFixture<OntologicalCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OntologicalCoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OntologicalCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
