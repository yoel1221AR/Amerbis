import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ip-filters',
  templateUrl: './ip-filters.component.html',
  styleUrls: ['./ip-filters.component.scss'],
})
export class IpFiltersComponent implements OnInit {
  @Input() service!: string;
  @Input() filters!: Array<[string, string]>;
  @Output() close: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() applyFilters: EventEmitter<any> = new EventEmitter<any>();
  @Output() resetFormEvent: EventEmitter<any> = new EventEmitter<void>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        amountTo: [undefined],
        amountFrom: [undefined],
        start: [undefined],
        end: [undefined],
      },
      {
        validators: [
          this.formValidators,
          this.amountValidators,
          this.dateValidators,
        ],
      }
    );
  }

  amountValidators(formGroup: FormGroup) {
    const amountTo = formGroup.get('amountTo')?.value;
    const amountFrom = formGroup.get('amountFrom')?.value;
    if (
      (amountTo === undefined && amountFrom === undefined) ||
      (amountTo === null && amountFrom === null) ||
      (amountTo === null && amountFrom !== null && amountFrom > 0) ||
      (amountFrom === null && amountTo !== null && amountTo > 0) ||
      (amountTo !== null && amountFrom !== null && amountTo >= 0 && amountFrom >= 0 && amountFrom <= amountTo)
    ) {
      return null;
    } else {
      return { invalidNumberAmount: true };
    }
  }

  dateValidators(formGroup: FormGroup) {
    const dateTo = formGroup.get('end')?.value;
    const dateFrom = formGroup.get('start')?.value;
    if (
      (dateTo === undefined && dateFrom === undefined) ||
      (dateTo === null && dateFrom === null) ||
      (dateTo !== null && dateFrom !== null && dateTo >= dateFrom)
    ) {
      return null;
    } else {
      return { invalidDates: true };
    }
  }

  formValidators(formGroup: FormGroup) {
    const amountTo = formGroup.get('amountTo')?.value;
    const amountFrom = formGroup.get('amountFrom')?.value;
    const dateTo = formGroup.get('end')?.value;
    const dateFrom = formGroup.get('start')?.value;
    if (
      amountFrom == undefined &&
      amountTo == undefined &&
      dateTo == undefined &&
      dateFrom == undefined
    ) {
      return { invalidForm: true };
    } else {
      return null;
    }
  }

  onSubmit() {
    let filters: any = {};
    if (this.form.get('end')?.value || this.form.get('start')?.value) {
      const endValue = this.form.get('end')?.value;
      if (endValue) {
        const fecha = new Date(endValue);
        const fechaISO = fecha.toISOString().slice(0, 10);
        filters.dateTo = fechaISO + 'T23:59:59';
      }
      const startValue = this.form.get('start')?.value;
      if (startValue) {
        const fecha = new Date(startValue);
        const fechaISO = fecha.toISOString().slice(0, 10);
        filters.dateFrom = fechaISO + 'T00:00:00';
      }
    }
    if (
      this.form.get('amountTo')?.value &&
      this.form.get('amountFrom')?.value
    ) {
      filters.amountFrom = this.form.get('amountFrom')?.value;
      filters.amountTo = this.form.get('amountTo')?.value;
    }
    filters.keyDate = this.filters[0][1];
    this.applyFilters.emit(filters);
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }

  resetForm(event: Event) {
    event.preventDefault();
    this.form.controls['start'].setValue('');
    this.form.controls['end'].setValue('');
    this.form.controls['amountTo'].setValue('');
    this.form.controls['amountFrom'].setValue('');
    this.resetFormEvent.emit();
  }
}
