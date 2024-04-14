import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [],
  template: `
    <p>
      view-tasks works! VID: {{vid}}
    </p>
  `,
  styleUrl: './view-tasks.component.css'
})
export class ViewTasksComponent{
  route: ActivatedRoute = inject(ActivatedRoute);
  vid: string = '';
  constructor(){
    this.vid = this.route.snapshot.params['vid'];
  }
}
