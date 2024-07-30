import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private projList: { [key:string]: Array<Task>};
  projNameList = signal<Array<string>>([]);
  taskListInView = signal<Array<Task>>([]);
  isTaskAddedToView = signal<boolean>(false);
  projCounter: number = 0;
  constructor() { 
    this.projList = {};
  }
  createTask() {
    const task: Task = {name: 'task', projName: 'proj1', priority: Priority.High, duedate: '22/02/2021', doneStatus:false, details: 'abracadabra'}

    if ( this.projList.hasOwnProperty(task.projName) ){
      this.projList['proj'].push(task);
    }else{
      this.projList['proj'] = [task];
    }
    this.taskListInView.update(x=>{
      x.push(task);
      return x;
    })
  }
  createProj(){
    this.projList[`proj${this.projCounter}`] = [];
    this.projCounter += 1
    this.projNameList.update(x=>{
      x.push(`proj${this.projCounter}`);
      return x;
    });
  }
  getProjNames(){
    return Object.keys(this.projList);
  }
  getAllTasks(){
    return Object.entries(this.projList).map((x,_)=>x[1]).flat();
  }
}

enum Priority{
  Low = 1,
  Medium,
  High
}

export interface Task{
  name: string,
  projName: string,
  priority: Priority,
  duedate: string,
  details: string,
  doneStatus: boolean,
}
