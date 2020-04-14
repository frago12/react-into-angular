import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcComponentsComponent } from './btc-components.component';

describe('BtcComponentsComponent', () => {
  let component: BtcComponentsComponent;
  let fixture: ComponentFixture<BtcComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
