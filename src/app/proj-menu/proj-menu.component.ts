import { Component, Input, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'proj-menu',
  standalone: true,
  imports: [CommonModule], //(mouseleave)="hide.emit(false)"
  template: `
    <ul class="proj-nav" [ngClass]="{'visible':show}">
      <li class="proj-nav__item" *ngFor="let name of projNames">
        {{name}}
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
    }
    .proj-nav__item{
      margin: 0.2rem auto;
      text-transform: uppercase;
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
  
  @Input() show: boolean = false;
  //@Output() hide = new EventEmitter<boolean>();
  private taskService: TaskService = inject(TaskService);
  projNames: Array<string>=[];
  constructor(){
    effect(()=>{
      this.taskService.isProjChanged();
      this.projNames = this.taskService.getProjNames();
    });

  }
  
}
