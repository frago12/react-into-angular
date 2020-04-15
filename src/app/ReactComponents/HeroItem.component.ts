import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CountUp from 'react-countup';

import {
  Component,
  Input,
  OnDestroy,
  OnChanges,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'hero-item',
  template: `
    <div id="hero-item">
      I'm angular item!
    </div>
  `,
})
export class HeroItemComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() end: number;

  ngAfterViewInit() {
    this.render();
  }

  ngOnChanges() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.getRootDOMNode());
  }

  private render() {
    ReactDOM.render(
      React.createElement(CountUp, this.getProps()),
      this.getRootDOMNode()
    );
  }

  private getProps() {
    return {
      end: this.end,
    };
  }

  private getRootDOMNode() {
    const node = document.getElementById('hero-item');
    return node;
  }
}
