/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'modal-button'
})
@View({
  template: '<button (click)="openModal()">Open Modal</button>' +
  	'<div class="modal" [class.visible]="modalOpen">' +
		'<div class="modal-container"></div>' +
	'</div>'
})

class ModalComponent {
	modalOpen: Boolean;
    openModal() { 
    	return this.modalOpen = true;
    }
}

bootstrap(ModalComponent);