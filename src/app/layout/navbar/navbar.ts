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
    let menuBtnIcon = document.getElementById('menuBtnIcon');
    menu?.classList.toggle('hidden');

    if (!menu?.classList.contains('hidden')) {
      menuBtnIcon?.classList.replace('fa-bars','fa-xmark');
    }else{
      menuBtnIcon?.classList.replace('fa-xmark','fa-bars');
    };
  };

}
