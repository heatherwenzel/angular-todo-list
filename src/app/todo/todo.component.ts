import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({ //this is a decorator, which contains the metadata
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoList: Todo[] = [ //when are are defining data inside our component, we can define it above our constructor, not inside the constructor (called fields)
    {
      task: "laundry",
      completed: false
    },
    {
      task: "pay bills",
      completed: true
    }
  ]
  constructor() { } //the job of the constructor is to accept services as injected dependencies

  //this is where we would start writing methods (outside the constructor, after the closing curly bracket)

  addTodo(todoName): void {
    this.todoList.push({
      task: todoName.value.todo,
      completed: false
    });
  }

  removeTodo(index: number): void { //when the parent changes, a new todoList array is passed to the child
    this.todoList.splice(index, 1);
  }

  completeTask(index: number): void {
    this.todoList[index].completed = true;
  }

  filterList(event): void {
    console.log(event.target.value);
  }

}
