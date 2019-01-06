import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutdataComponent } from './checkoutdata.component';

describe('CheckoutdataComponent', () => {
  let component: CheckoutdataComponent;
  let fixture: ComponentFixture<CheckoutdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
