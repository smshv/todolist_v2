import { Component, OnInit, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  breakPointObserver: BreakpointObserver = inject(BreakpointObserver);
  title: string = 'ToDoList';
  @Input() isPhoneProtrait: boolean = false;
  ngOnInit() {
  this.breakPointObserver.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isPhoneProtrait = result.matches;
        console.log(result.matches);
      }
    );
  }
}
