import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ip-button-filters',
  templateUrl: './ip-button-filters.component.html',
  styleUrls: ['./ip-button-filters.component.scss']
})
export class IpButtonFiltersComponent {
  options_: string[] = [];
  optionSelected: string = "";
  @Input() set options(options: string[]) {
    if (options) {
      this.options_ = options;
      this.optionSelected = options[0];
      this.handleOption.emit(this.optionSelected);
    }
  }
  @Output() handleOption: EventEmitter<string> = new EventEmitter<string>();

  onClick(option: string) {
    if (this.optionSelected != option) {
      this.optionSelected = option;
      this.handleOption.emit(this.optionSelected);
    }
  }
}
