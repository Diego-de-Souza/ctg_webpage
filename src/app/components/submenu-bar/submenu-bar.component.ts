import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu-bar',
  templateUrl: './submenu-bar.component.html',
  styleUrls: ['./submenu-bar.component.css','submenu-bar-responsive.component.css']
})
export class SubmenuBarComponent implements OnInit {

  posicaoMenuSuspenso:string='';
  posicaoMenuFixo:string='';
  larguraMenu:string = '';

  constructor() {
    document.addEventListener('scroll', () => {
      this.keepTrack();
    })
  }

  ngOnInit(): void {
  }

  keepTrack() {

    const element = document.getElementById('menu-bar');
    if (element != null) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= window.pageYOffset ) {
        this.posicaoMenuSuspenso='auto';
        this.posicaoMenuFixo='relative'
        this.larguraMenu ='auto'
      }else{
        this.posicaoMenuSuspenso='50px';
        this.posicaoMenuFixo='fixed';
        this.larguraMenu='85%'
      }
    } else {

    }
  }
}
