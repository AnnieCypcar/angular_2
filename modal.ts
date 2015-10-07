/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'modal-button'
})
@View({
  template: '<button (click)="openModal()">Open Modal</button>' +
  	'<div class="modal" [class.visible]="modalOpen">' +
		'<div class="modal-container"></div>' +
		'<button class="button-close" (click)=closeModal()>x</button>' +
	'</div>'
})

class ModalComponent {
	modalOpen: Boolean;
    openModal() { 
    	return this.modalOpen = true;
    }
    closeModal() {
    	return this.modalOpen = false;
    }
}

bootstrap(ModalComponent);