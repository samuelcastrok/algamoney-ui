import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
  <small *ngIf="temErro()" class="p-error">
    {{ text }}
  </small>
  `,
  styles: [
  ]
})
export class MessageComponent {

  @Input() error!: string;
  @Input() control!: NgModel;
  @Input() text!: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty?true:false;
  }

}
