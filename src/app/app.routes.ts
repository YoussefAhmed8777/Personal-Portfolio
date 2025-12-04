import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full', title:'Home'},
  {path:'home', component:Home, pathMatch:'full', title:'Home'},
];
