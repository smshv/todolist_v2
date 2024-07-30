import { Component, Input } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [],
  template: `
    <div>
      {{task.name}}
      <ul>
        <li>{{task.projName}}</li>
      </ul>
    </div>
  `,
  styleUrl: './view-tasks.component.css'
})
export class ViewTasksComponent{
  @Input() task!: Task;
  constructor(){
  }
}
