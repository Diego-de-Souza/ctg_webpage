import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css','popup-responsive.component.css']
})
export class PopupComponent implements OnInit {

  display = 'flex';

  constructor() { }

  ngOnInit(): void {
  }
  fechaPopup(){
    this.display = 'none';
  }

}
