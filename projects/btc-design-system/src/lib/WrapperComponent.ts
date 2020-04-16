import {
  Component,
  AfterViewInit,
  OnChanges,
  OnDestroy,
  Input,
} from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class ButtonComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() label: string;

  protected render() {}
}
