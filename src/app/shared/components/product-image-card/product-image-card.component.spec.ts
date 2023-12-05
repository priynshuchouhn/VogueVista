import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageCardComponent } from './product-image-card.component';

describe('ProductImageCardComponent', () => {
  let component: ProductImageCardComponent;
  let fixture: ComponentFixture<ProductImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
