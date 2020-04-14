import { registerElement } from '@angular-react/core';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BtcComponentsComponent } from './btc-components.component';
import { CounterComponent } from './counter/counter.component';

import CountUp from 'react-countup';
// import { MyCounter } from './counter/ReactCounter.js';

@NgModule({
  declarations: [BtcComponentsComponent, CounterComponent],
  imports: [],
  exports: [BtcComponentsComponent, CounterComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BtcComponentsModule {
  constructor() {
    registerElement('counter', () => CountUp);
  }
}
