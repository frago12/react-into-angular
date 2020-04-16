import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BtcDesignSystemComponent } from './btc-design-system.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [BtcDesignSystemComponent, ButtonComponent],
  imports: [],
  exports: [BtcDesignSystemComponent, ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BtcDesignSystemModule {}
