import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalAuditsComponent } from './internal-audits.component';

describe('InternalAuditsComponent', () => {
  let component: InternalAuditsComponent;
  let fixture: ComponentFixture<InternalAuditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalAuditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
