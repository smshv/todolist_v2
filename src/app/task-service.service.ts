import { Injectable, signal } from '@angular/core';

enum Priority{
  Low = 1, Medium, High
}

interface Task{
  taskName: string;
  taskId: number;
  //deadline: Date;
  priority: Priority;
  isComplete: boolean;
}

@Injectable({
  providedIn: 'root'
})



export class TaskServiceService {
  
  private projects: {[projName: string]: Task[]};
  private numProjects = signal(0);

  constructor(){
    this.projects = {
      'test': [{'taskName':'a', 'taskId': 12, 'priority': 3, 'isComplete': false}],
      'test2': [{'taskName':'a', 'taskId': 12, 'priority': 3, 'isComplete': false}]
    };
    this.numProjects = signal(Object.keys(this.projects).length);
  }

  createProject(projName:string):void {
    this.projects[projName] = [];
    this.numProjects.update((val: number)=>val+1);
  }
  deleteProject(projName:string):void {
    delete this.projects[projName];
    this.numProjects.update((val: number)=>val-1);
  }
  getProjectList(): string[]{
    return Object.keys(this.projects)
  }
}
