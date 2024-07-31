import { Component, Input } from '@angular/core';
import { Task } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="card" [ngClass]="'priority'+task.priority.toString()">
      <li><div class="status"></div>{{task.name}}</li>
      <li>Project: {{task.projName}}</li>
      <li><button class="task-details">Details</button></li>
      <li>Due: {{task.duedate}}</li>
</ul>
  `,
  styleUrl: './view-tasks.component.css'
})
export class ViewTasksComponent{
  @Input() task!: Task;
  constructor(){
  }
}
