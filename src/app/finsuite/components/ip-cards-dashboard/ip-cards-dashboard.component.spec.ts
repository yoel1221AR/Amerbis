import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCardsDashboardComponent } from './ip-cards-dashboard.component';

describe('IpCardsDashboardComponent', () => {
  let component: IpCardsDashboardComponent;
  let fixture: ComponentFixture<IpCardsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpCardsDashboardComponent]
    });
    fixture = TestBed.createComponent(IpCardsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
