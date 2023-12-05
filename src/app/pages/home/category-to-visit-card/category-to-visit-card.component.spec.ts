import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryToVisitCardComponent } from './category-to-visit-card.component';

describe('CategoryToVisitCardComponent', () => {
  let component: CategoryToVisitCardComponent;
  let fixture: ComponentFixture<CategoryToVisitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryToVisitCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryToVisitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
