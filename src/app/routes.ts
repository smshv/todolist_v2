import { Routes } from '@angular/router';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';

export const routes: Routes = [
    {
        path: '',
        component: ViewTasksComponent,
        title: 'All tasks'
    },
    {
        path: 'for/:vid',
        component: ViewTasksComponent
    },
    {
        path: 'new',
        component: CreateTaskComponent,
        title: 'New ToDo Task'
    }
];
