import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-btc-components',
  template: `
    <p id="customId">
      btc-components works!
    </p>
  `,
  styles: [],
})
export class BtcComponentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
