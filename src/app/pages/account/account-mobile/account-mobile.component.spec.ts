import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMobileComponent } from './account-mobile.component';

describe('AccountMobileComponent', () => {
  let component: AccountMobileComponent;
  let fixture: ComponentFixture<AccountMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
