import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { EducationPlusCourses } from './components/education-plus-courses/education-plus-courses';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full', title:'Home'},
  {path:'home', component:Home, pathMatch:'full', title:'Home'},
  {path:'about', component:About, pathMatch:'full', title:'About Me'},
  {path:'educationandcourses', component:EducationPlusCourses, pathMatch:'full', title:'Education & Courses'},
];
