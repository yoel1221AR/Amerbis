import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoStandarsComponent } from './iso-standars.component';

describe('IsoStandarsComponent', () => {
  let component: IsoStandarsComponent;
  let fixture: ComponentFixture<IsoStandarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoStandarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoStandarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
