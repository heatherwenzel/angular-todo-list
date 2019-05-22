import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../todo";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: Todo[]; //this is creating the todoList array so we can use it
  @Output() onCompleteTask = new EventEmitter<any>();
  @Output() onRemoveTodo = new EventEmitter<any>();

  constructor() { }

  completeTask(index: number): void {
    this.onCompleteTask.emit(index);
  }

  removeTodo(index: number): void {
    this.onRemoveTodo.emit(index); //"emit this event with this specific argument"
  }

  ngOnInit() {
  }

}
