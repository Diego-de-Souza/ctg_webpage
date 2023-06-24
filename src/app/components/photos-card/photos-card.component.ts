import { Component, OnInit, Input } from '@angular/core';
import {dataImageAbout} from '../../data/dataImageAbout';

@Component({
  selector: 'app-photos-card',
  templateUrl: './photos-card.component.html',
  styleUrls: ['./photos-card.component.css']
})
export class PhotosCardComponent implements OnInit {

  @Input()
  photoCard:string='';
  @Input()
  tituloPhoto:string='';
  @Input()
  Id:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id)

  }

  setValuesToComponent(Id:string | null){
    const result = dataImageAbout.filter(
                      article => article.id == Id)[0]

    this.photoCard = result.local
    this.tituloPhoto =result.description
  }

}
