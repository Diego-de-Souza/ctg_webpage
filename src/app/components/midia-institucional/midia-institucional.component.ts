import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-midia-institucional',
  templateUrl: './midia-institucional.component.html',
  styleUrls: ['./midia-institucional.component.css','midia-institucional-responsive.component.css']
})
export class MidiaInstitucionalComponent {

  images = [
    '../../../assets/img/institucional/adulta2-300.jpg',
    '../../../assets/img/institucional/campeira1-300.jpg',
    '../../../assets/img/institucional/cultural1-300.jpg',
    '../../../assets/img/institucional/escolhinha1-300.jpg',
    '../../../assets/img/institucional/imagem_9.jpg',
    '../../../assets/img/institucional/individuais9-300.jpg',
    '../../../assets/img/institucional/juvenil7-300.jpg',
    '../../../assets/img/institucional/mirim2-300.jpg',
    '../../../assets/img/institucional/veterana20233.jpg',
    '../../../assets/img/institucional/xiru20232.jpg'
  ];

  selectedIndex = 3; // Starting at the fourth image (index 3)

  // Calculate the classes for each image based on the current selectedIndex
  getImageClass(index: number) {
    const diff = (index - this.selectedIndex + this.images.length) % this.images.length;

    switch (diff) {
      case 0:
        return 'selected';
      case 1:
        return 'next';
      case 2:
        return 'nextRightSecond';
      case this.images.length - 1:
        return 'prev';
      case this.images.length - 2:
        return 'prevLeftSecond';
      default:
        return diff < this.images.length / 2 ? 'hideRight' : 'hideLeft';
    }
  }

  // Handle the 'next' and 'prev' clicks
  moveToSelected(direction: string) {
    if (direction === 'next') {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    } else if (direction === 'prev') {
      this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
    }
  }

}
