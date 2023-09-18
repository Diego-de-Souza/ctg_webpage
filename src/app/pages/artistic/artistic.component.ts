import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistic',
  templateUrl: './artistic.component.html',
  styleUrls: ['./artistic.component.css','artistic-responsive.component.css']
})
export class ArtisticComponent implements OnInit {

  imgContainer1!: string;
  imgContainer2!: string;
  imgContainer3!: string;
  imgContainer4!: string;
  imgContainer5!: string;
  imgContainer6!: string;
  imgContainer7!: string;
  estadoImg1:boolean = false;
  estadoImg2:boolean = false;
  estadoImg3:boolean = false;
  estadoImg4:boolean = false;
  estadoImg5:boolean = false;
  estadoImg6:boolean = false;
  estadoImg7:boolean = false;
  modoMobile:boolean = false;

  larguraTela:number=window.screen.width;
  alturatela:number = window.screen.height;

  constructor() { }
  
  ngOnInit(): void {
    console.log(this.larguraTela, this.alturatela);

    if(this.larguraTela <= 769){
      this.modoMobile = true;
    }else{
      this.modoMobile = false;
    }
    this.imgContainer1 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
    this.imgContainer2 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
    this.imgContainer3 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
    this.imgContainer4 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
    this.imgContainer5 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
    this.imgContainer6 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
    this.imgContainer7 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
  }

  abrirSecao(secao:string){
    const estiloContainer1= document.getElementById('main-artistic__adulta')?.style;
    const estiloContainer2= document.getElementById('main-artistic__veterana')?.style;
    const estiloContainer3= document.getElementById('main-artistc__juvenil')?.style;
    const estiloContainer4= document.getElementById('main-artistic__mirim')?.style;
    const estiloContainer5= document.getElementById('main-artistic__xiru')?.style;
    const estiloContainer6= document.getElementById('main-artistic__escolinha')?.style;
    const estiloContainer7= document.getElementById('main-artistic__individual')?.style;

      if(this.larguraTela >769){
        if(secao == "1"){
        if(this.estadoImg1 == false){
          this.imgContainer1 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
          this.estadoImg1 = true;
          if(estiloContainer1 != undefined){
            estiloContainer1.height="auto";
          }
        }else{
          this.imgContainer1 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
          this.estadoImg1 = false;
          if(estiloContainer1 != undefined){estiloContainer1.height="80px";};
        }
        }else if(secao == "2"){
          if(this.estadoImg2 == false){
            this.imgContainer2 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
            this.estadoImg2 = true;
            if(estiloContainer2 != undefined){estiloContainer2.height="auto";};
          }else{
            this.imgContainer2 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
            this.estadoImg2 = false;
            if(estiloContainer2 != undefined){estiloContainer2.height="80px";};
          }
        }else if(secao == "3"){
          if(this.estadoImg3 == false){
            this.imgContainer3 = "../../../assets/img/Artistic/diversas/sinal-de-menos.pngg";
            this.estadoImg3 = true;
            if(estiloContainer3 != undefined){estiloContainer3.height="auto";};
          }else{
            this.imgContainer3 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
            this.estadoImg3 = false;
            if(estiloContainer3 != undefined){estiloContainer3.height="80px";};
          }
        }else if(secao == "4"){
          if(this.estadoImg4 == false){
            this.imgContainer4 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
            this.estadoImg4 = true;
            if(estiloContainer4 != undefined){estiloContainer4.height="auto";};
          }else{
            this.imgContainer4 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
            this.estadoImg4 = false;
            if(estiloContainer4 != undefined){estiloContainer4.height="80px";};
          }
        }else if(secao == "5"){
          if(this.estadoImg5 == false){
            this.imgContainer5 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
            this.estadoImg5 = true;
            if(estiloContainer5 != undefined){estiloContainer5.height="auto";};
          }else{
            this.imgContainer5 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
            this.estadoImg5 = false;
            if(estiloContainer5 != undefined){estiloContainer5.height="80px";};
          }
        }else if(secao == "6"){
          if(this.estadoImg6 == false){
            this.imgContainer6 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
            this.estadoImg6 = true;
            if(estiloContainer6 != undefined){estiloContainer6.height="auto";};
          }else{
            this.imgContainer4 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
            this.estadoImg4 = false;
            if(estiloContainer4 != undefined){estiloContainer4.height="80px";};
          }
        }else if(secao == "7"){
          if(this.estadoImg7 == false){
            this.imgContainer7 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
            this.estadoImg7 = true;
            if(estiloContainer7 != undefined){estiloContainer7.height="auto";};
          }else{
            this.imgContainer7 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
            this.estadoImg7 = false;
            if(estiloContainer7 != undefined){estiloContainer7.height="80px";};
          }
        }
      }else{
        if(secao == "1"){
          if(this.estadoImg1 == false){
            this.imgContainer1 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
            this.estadoImg1 = true;
            if(estiloContainer1 != undefined){
              estiloContainer1.height="auto";
            }
          }else{
            this.imgContainer1 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
            this.estadoImg1 = false;
            if(estiloContainer1 != undefined){estiloContainer1.height="3em";};
          }
          }else if(secao == "2"){
            if(this.estadoImg2 == false){
              this.imgContainer2 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
              this.estadoImg2 = true;
              if(estiloContainer2 != undefined){estiloContainer2.height="auto";};
            }else{
              this.imgContainer2 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
              this.estadoImg2 = false;
              if(estiloContainer2 != undefined){estiloContainer2.height="3em";};
            }
          }else if(secao == "3"){
            if(this.estadoImg3 == false){
              this.imgContainer3 = "../../../assets/img/Artistic/diversas/sinal-de-menos.pngg";
              this.estadoImg3 = true;
              if(estiloContainer3 != undefined){estiloContainer3.height="auto";};
            }else{
              this.imgContainer3 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
              this.estadoImg3 = false;
              if(estiloContainer3 != undefined){estiloContainer3.height="3em";};
            }
          }else if(secao == "4"){
            if(this.estadoImg4 == false){
              this.imgContainer4 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
              this.estadoImg4 = true;
              if(estiloContainer4 != undefined){estiloContainer4.height="auto";};
            }else{
              this.imgContainer4 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
              this.estadoImg4 = false;
              if(estiloContainer4 != undefined){estiloContainer4.height="3em";};
            }
          }else if(secao == "5"){
            if(this.estadoImg5 == false){
              this.imgContainer5 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
              this.estadoImg5 = true;
              if(estiloContainer5 != undefined){estiloContainer5.height="auto";};
            }else{
              this.imgContainer5 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
              this.estadoImg5 = false;
              if(estiloContainer5 != undefined){estiloContainer5.height="3em";};
            }
          }else if(secao == "6"){
            if(this.estadoImg6 == false){
              this.imgContainer6 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
              this.estadoImg6 = true;
              if(estiloContainer6 != undefined){estiloContainer6.height="auto";};
            }else{
              this.imgContainer4 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
              this.estadoImg4 = false;
              if(estiloContainer4 != undefined){estiloContainer4.height="3em";};
            }
          }else if(secao == "7"){
            if(this.estadoImg7 == false){
              this.imgContainer7 = "../../../assets/img/Artistic/diversas/sinal-de-menos.png";
              this.estadoImg7 = true;
              if(estiloContainer7 != undefined){estiloContainer7.height="auto";};
            }else{
              this.imgContainer7 = "../../../assets/img/Artistic/diversas/sinal-de-mais.png";
              this.estadoImg7 = false;
              if(estiloContainer7 != undefined){estiloContainer7.height="3em";};
            }
          }
      }
  }

}
