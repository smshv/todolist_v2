import { Component, OnInit, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProjMenuComponent } from './proj-menu/proj-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, CommonModule, ProjMenuComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  breakPointObserver: BreakpointObserver = inject(BreakpointObserver);
  title: string = 'ToDoList';
  isPhoneProtrait: boolean = false;
  showProjMenu: boolean = false;
  ngOnInit() {
  this.breakPointObserver.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        this.isPhoneProtrait = result.matches;
      }
    );
  }
  async hideProjNav(){
    await new Promise(r => setTimeout(r, 600))
    this.showProjMenu = false;
  }
}
