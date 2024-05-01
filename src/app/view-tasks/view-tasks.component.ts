import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskManager, Priority } from '../task-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [],
  template: `
    <p>
      view-tasks works! VID: {{getTasksBy}}
    </p>
  `,
  styleUrl: './view-tasks.component.css'
})
export class ViewTasksComponent implements OnInit, OnDestroy{
  private route: ActivatedRoute = inject(ActivatedRoute);
  private subscriptions = new Subscription();
  getTasksBy: string = 'all';
  constructor(){
  }
  
  ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.subscribe(params=>{
        if ( Object.keys(params).length < 1){
          this.getTasksBy = 'all';
        }
        else if ( params.hasOwnProperty('due') ){
          this.getTasksBy = params['due'];
        }else if ( params.hasOwnProperty('proj') ){
          this.getTasksBy = params['proj'];
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
