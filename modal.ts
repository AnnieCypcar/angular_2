/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'modal-button'
})
@View({
  template: '<button (click)="openModal()">Click Me</button>'
})
// Component controller
class ModalComponent {
    openModal() { 
    	alert('opened'); 
    }
}

bootstrap(ModalComponent);