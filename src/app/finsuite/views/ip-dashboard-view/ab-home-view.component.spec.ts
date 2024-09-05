import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDashboardViewComponent } from './ab-home-view.component';

describe('IpDashboardViewComponent', () => {
  let component: IpDashboardViewComponent;
  let fixture: ComponentFixture<IpDashboardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpDashboardViewComponent]
    });
    fixture = TestBed.createComponent(IpDashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
