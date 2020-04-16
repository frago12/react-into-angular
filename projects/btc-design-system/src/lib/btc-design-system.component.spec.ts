import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcDesignSystemComponent } from './btc-design-system.component';

describe('BtcDesignSystemComponent', () => {
  let component: BtcDesignSystemComponent;
  let fixture: ComponentFixture<BtcDesignSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcDesignSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
