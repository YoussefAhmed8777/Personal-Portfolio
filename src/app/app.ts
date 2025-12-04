import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/navbar/navbar";
import { Footer } from "./layout/footer/footer";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { EducationPlusCourses } from "./components/education-plus-courses/education-plus-courses";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet, Home, About, EducationPlusCourses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');

  
}
