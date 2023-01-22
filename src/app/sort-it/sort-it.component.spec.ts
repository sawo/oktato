import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortItComponent } from './sort-it.component';

describe('SortItComponent', () => {
  let component: SortItComponent;
  let fixture: ComponentFixture<SortItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
