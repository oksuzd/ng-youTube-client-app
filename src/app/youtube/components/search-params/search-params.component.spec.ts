import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchParamsComponent } from './search-params.component';

describe('SearchParamsComponent', () => {
  let component: SearchParamsComponent;
  let fixture: ComponentFixture<SearchParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchParamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
