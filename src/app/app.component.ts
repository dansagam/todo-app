import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'todo-app';
  inputObj = {
    placeholder: 'enter todo',
    label: 'Activies',
  };
  isEmpty: boolean = false;

  arr: string[] = [];

  onChangeInput(values: any): void {
    console.log({ values, type: typeof values });
  }

  ngOnInit(): void {
    if (this.arr.length === 0) {
      this.isEmpty = true;
    }
  }
  ngDoCheck(): void {
    if (this.arr.length === 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }
  onSubmit(values: any) {
    console.log({ values, type: typeof values });
    this.arr = [...this.arr, values?.target?.value];
  }
}
