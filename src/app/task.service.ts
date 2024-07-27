import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private projList: { [key:string]: Array<Task>};
  isProjChanged = signal<boolean>(false);
  projCounter: number = 0;
  constructor() { 
    this.projList = {};
    this.isProjChanged.set(true);
  }
  createTask() {
    if ( this.projList.hasOwnProperty('proj') ){
      this.projList['proj'].push(
        {name: 'task', priority: Priority.High, duedate: '22/02/2021'}
      );
    }else{
      this.projList['proj'] = [
        {name: 'task', priority: Priority.Low, duedate: '12/03/2020'}];
    }
  }
  createProj(){
    this.projList[`proj${this.projCounter}`] = [{name: 'task', priority: Priority.High, duedate: '22/02/2021'}];
    this.isProjChanged.set(!this.isProjChanged());
    this.projCounter += 1
  }
  getProjNames(){
    return Object.keys(this.projList);
  }
}

enum Priority{
  Low = 1,
  Medium,
  High
}

interface Task{
  name: string,
  priority: Priority,
  duedate: string
}
