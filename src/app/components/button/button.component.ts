import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor() {
    this.text = ''; // Initialize text with a default value
    this.color = ''; // Initialize color with a default value
  }

  onClick() {
    this.btnClick.emit();
  }
}
