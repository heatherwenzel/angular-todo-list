import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @Output() onAddTodo = new EventEmitter<any>();

  constructor() { }

  addTodo(form): void {
    this.onAddTodo.emit(form);
  }

  ngOnInit() {
  }

}