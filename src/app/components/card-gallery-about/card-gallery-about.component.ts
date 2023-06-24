import { Component, OnInit, Input} from '@angular/core';
import {dataImageAbout} from '../../data/dataImageAbout';

@Component({
  selector: 'app-card-gallery-about',
  templateUrl: './card-gallery-about.component.html',
  styleUrls: ['./card-gallery-about.component.css']
})
export class CardGalleryAboutComponent implements OnInit {
  @Input()
  photoCardPatrono:string='';
  @Input()
  Id:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id)

  }

  setValuesToComponent(Id:string | null){
    const result = dataImageAbout.filter(
                      article => article.id == Id)[0]

    this.photoCardPatrono = result.local
  }
}
