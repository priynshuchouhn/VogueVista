import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  @Input() type: string = '';
  @Input() options: {name: string, code?: string | undefined , link?: string}[] = [];
  @Output() optionSelected = new EventEmitter<{name: string, code?: string}>();
  @Input() defaultOption: string = '';
  selectedOption: string | undefined = '';

  selectOption(option: {name: string, code?: string}): void {
    this.selectedOption = option.code;
    this.optionSelected.emit(option);
  }

}
