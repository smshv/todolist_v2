import { Component, OnInit, effect, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { TaskService, Task } from './task.service';
import { ProjMenuComponent } from './proj-menu/proj-menu.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProjMenuComponent, ViewTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  breakPointObserver: BreakpointObserver = inject(BreakpointObserver);
  title: string = 'ToDoList';
  isPhoneProtrait: boolean = false;
  showProjMenu: boolean = false;
  taskService: TaskService = inject(TaskService);
  
  ngOnInit() {
    this.breakPointObserver.observe(Breakpoints.HandsetPortrait)
        .subscribe(result => {
          this.isPhoneProtrait = result.matches;
        }
      );
  }
  async hideProjNav(){
    await new Promise(r => setTimeout(r, 600))
    this.showProjMenu = false;
  }
}
