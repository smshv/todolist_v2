import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [],
  template: `
    <p>
      view-tasks works! VID: {{val}}
    </p>
  `,
  styleUrl: './view-tasks.component.css'
})
export class ViewTasksComponent{
  route: ActivatedRoute = inject(ActivatedRoute);
  val: string = 'all';
  constructor(){
    const params = this.route.snapshot.params
    if ( Object.hasOwnProperty('vid')){
      this.val = params['vid'];
    }else if( Object.hasOwnProperty('today') ){
      this.val = 'today';
    }else if( Object.hasOwnProperty('thiswk') ){
      this.val = 'thiswk';
    }else if( Object.hasOwnProperty('projName') ){
      this.val = params['projName'];
    }
  }
}
