import { Component, OnInit } from '@angular/core';
import {primaryInput} from 'detect-it';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css','menu-bar-responsive.component.css']
})
export class MenuBarComponent implements OnInit {

  imagemMenu:string='../../../assets/img/Comon/menu_resp_fechado_32x32.png';
  menuFechado:boolean=true;
  openMenu:string='';
  openSubmenu:string='none';
  direcaoSubmenu:string='';
  setaLateral:string=''

  posicaoMenuSuspenso:string='';
  posicaoMenuFixo:string='';

  //variavel de altura do menu
  alturaMenu:string = '3em';
  alturaSubMenu:string = '1em';
  menuAberto:boolean = false;
  //imagem do menu responsivo
  imageMenu:string = '../../../assets/img/Comon/menu_resp_fechado_32x32.png';

  constructor() {

    if(window.matchMedia('maxwidth: 769px').matches){
      document.addEventListener('touchstart', () => {
        this.keepTrack();
      },primaryInput? {passive:true} : false);
    }else{
      document.addEventListener('scroll', () => {
        this.keepTrack();
      })
    }

  }

  ngOnInit(): void {
    if(window.matchMedia('(max-width: 769px').matches) {
      this.openMenu = 'none';
      this.openSubmenu = 'none';
    }

  }

  keepTrack() {

      const element = document.getElementById('menu-bar');
      if (element != null) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= window.pageYOffset ) {
          this.posicaoMenuSuspenso='auto';
          this.posicaoMenuFixo='relative'
        }else{
          this.posicaoMenuSuspenso='0px';
          this.posicaoMenuFixo='fixed';
        }
      } else {

      }

  }


  abreMenuHamburgue(){

    if(this.menuFechado==true){
      this.menuFechado = false
      this.imagemMenu='../../../assets/img/Comon/menu_resp_aberto_32x32.png';
      this.openMenu='flex';
      this.posicaoMenuFixo='absolute'
    }else{
      this.menuFechado = true;
      this.imagemMenu = '../../../assets/img/Comon/menu_resp_fechado_32x32.png';
      this.openMenu='none';
      this.posicaoMenuFixo='fixed';
    }
    console.log(this.menuFechado);
    console.log(this.imagemMenu);
  }

  abreEFechaSubMenu(){
    if(this.openSubmenu=='none'){
      this.openSubmenu = 'flex';
      this.direcaoSubmenu = 'column';
      this.setaLateral='rotate(135deg)';
    }else{
      this.openSubmenu='none';
      this.setaLateral='rotate(45deg)';
    }
  }

  fechaSubmenu(){
    this.openSubmenu='none';
    this.setaLateral='rotate(45deg)';
    this.alturaMenu='3em';
    this.imageMenu = '../../../assets/img/Comon/menu_resp_fechado_32x32.png';
  }

  abreMenuResp() {
    const caixaMenu = document.getElementById('menu_resp');
    if(caixaMenu != null){
      if(this.menuAberto == false){
          this.alturaMenu = '23em';
          this.menuAberto = true;
          this.imageMenu = '../../../assets/img/Comon/menu_resp_aberto_32x32.png';
          this.posicaoMenuFixo='absolute';
      }else {
        this.alturaMenu='3em';
        this.menuAberto= false;
        this.imageMenu = '../../../assets/img/Comon/menu_resp_fechado_32x32.png';
        this.posicaoMenuFixo='relative';
      }
    }
    console.log('Está funcionando!');
  }

}
