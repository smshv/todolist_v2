import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private projList: { [key:string]: Array<Task>};
  isProjChanged = signal<boolean>(false);
  isTaskAddedToView = signal<boolean>(false);
  projCounter: number = 0;
  constructor() { 
    this.projList = {};
    this.isProjChanged.set(true);
  }
  createTask() {
    if ( this.projList.hasOwnProperty('proj') ){
      this.projList['proj'].push(
        {name: 'task', projName: 'proj1', priority: Priority.High, duedate: '22/02/2021', doneStatus:false, details: 'abracadabra'}
      );
    }else{
      this.projList['proj'] = [
        {name: 'task', projName: 'proj1', priority: Priority.High, duedate: '22/02/2021', doneStatus:false, details: 'abracadabra'}];
    }
    this.isTaskAddedToView.set(!this.isTaskAddedToView);
  }
  createProj(){
    this.projList[`proj${this.projCounter}`] = [];
    this.isProjChanged.set(!this.isProjChanged());
    this.projCounter += 1
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
