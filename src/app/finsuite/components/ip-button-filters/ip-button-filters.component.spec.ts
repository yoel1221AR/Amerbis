import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpButtonFiltersComponent } from './ip-button-filters.component';

describe('IpButtonFiltersComponent', () => {
  let component: IpButtonFiltersComponent;
  let fixture: ComponentFixture<IpButtonFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpButtonFiltersComponent]
    });
    fixture = TestBed.createComponent(IpButtonFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
