import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  toggleMenu(){
    let menu = document.getElementById('content');
    menu?.classList.toggle('hidden');
  };

}
