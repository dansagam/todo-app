import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  @Input('content') content: string = '';

  @Output() onEditClick = new EventEmitter();
  @Output() onDeleteClick = new EventEmitter();

  ngOnInit(): void {}

  onEdit(values: string | number | object) {
    this.onEditClick.emit(values);
  }
  onRemove(value: string | number | object) {
    this.onDeleteClick.emit(value);
  }
}
