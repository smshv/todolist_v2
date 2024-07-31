import { Component, Input } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [],
  template: `
    <ul>
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
