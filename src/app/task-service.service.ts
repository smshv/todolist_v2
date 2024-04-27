import { Injectable } from '@angular/core';

class Task{
  _taskName: string;
  _taskId: number;
  constructor(taskName: string, taskId: number){
    this._taskName = taskName;
    this._taskId = taskId;
  }
  get taskName(): string{
    return this._taskName;
  }
  get taskId(): number{
    return this._taskId;
  }
}

@Injectable({
  providedIn: 'root'
})

export class TaskServiceService {
  private projects: { [key: string]: Array<Task>; }= {} //key denotes the project name
  constructor() {
    const val = new Task('a', 2);
    this.projects['test0'] = new Array(new Task('task1', 0), new Task('task2', 1));
    this.projects['test1'] = new Array(new Task('test_task1', 0));
  }
  getProjectList(): Array<string>{
    return Object.keys(this.projects);
  }
}
