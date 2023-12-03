import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementBarComponent } from './annoucement-bar.component';

describe('AnnoucementBarComponent', () => {
  let component: AnnoucementBarComponent;
  let fixture: ComponentFixture<AnnoucementBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnoucementBarComponent]
    });
    fixture = TestBed.createComponent(AnnoucementBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
