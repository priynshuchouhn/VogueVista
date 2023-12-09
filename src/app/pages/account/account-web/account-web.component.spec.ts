import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWebComponent } from './account-web.component';

describe('AccountWebComponent', () => {
  let component: AccountWebComponent;
  let fixture: ComponentFixture<AccountWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
