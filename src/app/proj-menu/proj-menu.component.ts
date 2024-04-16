import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'proj-menu',
  standalone: true,
  imports: [CommonModule, RouterLink], //(mouseleave)="hide.emit(false)"
  template: `
    <ul class="proj-nav" [ngClass]="{'visible':show}"> 
      <li 
        *ngFor="let projName of projList" 
        class="proj-nav__item"
        >
        <a [routerLink]="['proj', projName]">{{projName}}</a>
      </li>
    </ul>
  `,
  styles: `
    .proj-nav{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      background-color: #eee;
      list-style: none;
      visibility: hidden;
      padding-bottom: 0.25rem;
    }
    .proj-nav__item{
      margin: 0 auto;
      text-transform: uppercase;
      padding: 0.2rem;
      font-size: 1.125rem;
      color: #aa4162;
      border-bottom: 2px solid transparent;
    }
    .proj-nav__item:hover, .proj-nav__item:active{
      border-bottom-color: #aa4162;
    }
    .proj-nav:hover{
      visibility: visible;
    }
    .visible{
      visibility: visible;
    }
  `
})
export class ProjMenuComponent {
  projList: string[];
  taskService: TaskServiceService = inject(TaskServiceService);
  @Input() show: boolean = false;
  //@Output() hide = new EventEmitter<boolean>(); 
  constructor(){
    this.projList = this.taskService.getProjectList();
  }
}
