import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSelectionComponent } from './search-selection.component';

describe('LaboratoryServicesComponent', () => {
  let component: SearchSelectionComponent;
  let fixture: ComponentFixture<SearchSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
