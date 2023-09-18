import { Component, OnInit, Input } from '@angular/core';
import {dataInvernadas} from '../../data/dataInvernadas';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css','awards-responsive.component.css']
})
export class AwardsComponent implements OnInit {

  @Input()
  invernadasAwards:string='teste';
  @Input()
  IdInvernadas:string = '';
  @Input()
  pAwards:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.IdInvernadas,this.pAwards)
  }

  setValuesToComponent(IdInvernadas:string | null, pAwards:string){
    const result = dataInvernadas.filter(
                      article => article.id == this.IdInvernadas)[0];

   const resultAwards = result.awards.filter(
                      trophies => trophies.t == this.pAwards)[0];

    this.invernadasAwards = resultAwards.p;
  }

}
