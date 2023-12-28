import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'taskFilter' })
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: any[], filter: string): any[] {
    if (!tasks) return [];
    if (filter === 'all') return tasks;
    return tasks.filter(task => 
      (filter === 'completed' && task.completed) || 
      (filter === 'notCompleted' && !task.completed));
  }
}
