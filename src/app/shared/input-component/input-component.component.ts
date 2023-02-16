import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.sass'],
})
export class InputComponentComponent implements OnInit {
  @Input('placeholder') placeholder: string = 'Please enter your text';
  @Input('label') label: string = '';
  constructor() {}
  value: string = '';

  @Input('defaultValue') defaultValue?: string;

  @Output() onChangeInput = new EventEmitter<any>();

  onChange(values: any) {
    this.onChangeInput.emit(values);
    this.value = '';
  }

  onKeyPress(evt: any) {
    this.value =
      typeof evt?.target?.value === 'string' ? evt?.target?.value : '';
  }

  ngOnInit(): void {
    // this.value = '';
  }
}
