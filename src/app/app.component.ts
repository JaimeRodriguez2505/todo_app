import { Component } from '@angular/core';
import { Task } from './task.model'; // Asegúrate de actualizar la ruta si creaste un archivo separado

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  tasks: Task[] = []; // Ahora TypeScript sabe que 'tasks' es un array de objetos 'Task'
  currentFilter = 'all';

  addTask(taskName: string) {
    this.tasks.push({ name: taskName, completed: false });
  }

  changeFilter(newFilter: string) {
    this.currentFilter = newFilter;
  }
}
