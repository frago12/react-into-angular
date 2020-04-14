import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterContentInit,
} from '@angular/core';

import { ReactWrapperComponent } from '@angular-react/core';

interface Props {}

@Component({
  selector: 'btc-counter',
  exportAs: 'myCounter',
  template: `<counter #myDiv>hola!</counter>`,
  // styles: ['react-renderer'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent extends ReactWrapperComponent<Props> {
  @ViewChild('myDiv', { static: true }) reactNodeRef: ElementRef;

  constructor(
    elementRef: ElementRef,
    changeDetectorRef: ChangeDetectorRef,
    renderer: Renderer2
  ) {
    super(elementRef, changeDetectorRef, renderer);
  }
}
