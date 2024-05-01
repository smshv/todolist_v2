import { Injectable } from '@angular/core';
import { DoublyLinkedList } from './doubly-linked-list.service';

export enum Priority{
  low = 1,
  medium,
  high
}

class Task{
  private _taskName: string;
  private _taskId: number;
  private _project: string;
  private _donestaus: boolean;
  private _priority: Priority;
  private _due: number; 
  constructor(taskName: string, taskId: number, project: string,
              donestatus: boolean, priority: Priority, due: number
  ){
    this._taskName = taskName;
    this._taskId = taskId;
    this._project = project;
    this._donestaus = donestatus;
    this._priority = priority;
    this._due = due;
  }
  get taskName(): string{
    return this._taskName;
  }
  changeTaskName(name: string):void{
    this._taskName = name;
  }
  get taskId(): number{
    return this._taskId;
  }
  changeTaskId(id: number):void{
    this._taskId = id;
  }
  get project(): string{ //a task should not be able to change its project
    return this._project;
  }
  get donestatus(): boolean{
    return this._donestaus;
  }
  toggleDoneStatus(): void{
    this._donestaus != this._donestaus;
  }
  get priority() : Priority{
    return this._priority;
  }
  changePriority(priority:Priority):void{
    this._priority = priority;
  }
  get due(): number{
    return this._due;
  }
  changeDue(due: number):void{
    this._due = due;
  }
}

@Injectable({
  providedIn: 'root'
})

export class TaskManager {
  private projects: { [key: string]: DoublyLinkedList }= {} //key denotes the project name
  constructor() {

    this.projects['test0'] = new DoublyLinkedList();
    this.projects['test0'].push(new Task('task1', 0, 'test0', false, Priority.low, 6), new Task('task2', 1, 'test0', true, Priority.high, 8));
    this.projects['test1'] = new DoublyLinkedList();
    this.projects['test1'].push(new Task('test_task1', 0, 'test1', true, Priority.medium, 4));
  }
  getProjectList(): Array<string>{
    return Object.keys(this.projects);
  }
  getAllTasks(): Array<[Task, string]>{
    const taskList: Array<[Task, string]> = [];
    for (const [projName, taskList] of Object.entries(this.projects)){
      for ( const task of taskList ){
        taskList.push([task, projName]);
      }
    }
    return taskList;
  }
  changeProject(task:Task, taskInd:number, oldProj:string, newProj:string):boolean {
    if ( oldProj === newProj ){
      return false;
    }else{
      this.projects[oldProj].removeAt(taskInd);

      if ( this.projects.hasOwnProperty(newProj) ){
        this.projects[newProj].push(task);
      }else{
        this.projects[newProj] = new DoublyLinkedList();
        this.projects[newProj].push(task);
      }
      return true;
    }
  }
  deletTask(taskInd: number, proj: string):void{
    this.projects[proj].removeAt(taskInd);
  }
  deleteProject(proj: string) :void{
    delete this.projects[proj];
  }
}
