import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCompanyCardsComponent } from './ip-company-cards.component';

describe('IpCompanyCardsComponent', () => {
  let component: IpCompanyCardsComponent;
  let fixture: ComponentFixture<IpCompanyCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpCompanyCardsComponent]
    });
    fixture = TestBed.createComponent(IpCompanyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
