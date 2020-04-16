import {
  Component,
  AfterViewInit,
  OnChanges,
  OnDestroy,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from './Button';

@Component({
  selector: 'btc-button',
  template: ` <div id="btc-button"></div> `,
})
export class ButtonComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() label: string;
  @Input() variant: string;

  ngAfterViewInit() {
    this.render();
  }

  ngOnChanges() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.getDOMNode());
  }

  private render() {
    ReactDOM.render(this.createElements(), this.getDOMNode());
  }

  private createElements() {
    return React.createElement(Button, {});
  }

  private getProps() {
    return {
      label: this.label,
      variant: this.variant,
    };
  }

  private getDOMNode() {
    return document.getElementById('btc-button');
  }
}
