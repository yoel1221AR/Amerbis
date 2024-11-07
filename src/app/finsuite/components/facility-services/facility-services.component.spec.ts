import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityServicesComponent } from './facility-services.component';

describe('LaboratoryServicesComponent', () => {
  let component: FacilityServicesComponent;
  let fixture: ComponentFixture<FacilityServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
