/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'modal-button'
})
@View({
  template: '<button>Click Me</button>'
})
// Component controller
class ModalComponent {
  name: string;
  constructor() {
    this.onclick = function () { alert('opened'); };
  }
}

bootstrap(ModalComponent);