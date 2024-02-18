import { NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css','./locacao-responsivo.component.css']
})
export class LocacaoComponent implements OnInit {

  public innerWidth: any;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    console.log(this.innerWidth);
  }

  @HostListener('window.resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }


}
