import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <div class="container">
  <h1>Liste des choses à faire</h1>
    <ul *ngFor="let todo of todolist">
      <li *ngIf="!todo.isCompleted">{{ todo.title }}</li>
    </ul>
    </div>`,
    styles: []
})
export class AppComponent {
  todolist = TODOS;

  constructor() {}

  ngOnInit() {
    console.table(this.todolist);
    this.selectTodo(8);
  }

  selectTodo(id: number) {
    console.table(this.todolist[id-1]);
  }
}
