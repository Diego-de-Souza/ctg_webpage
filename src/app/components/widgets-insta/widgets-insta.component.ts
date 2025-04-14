import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-widgets-insta',
  templateUrl: './widgets-insta.component.html',
  styleUrls: ['./widgets-insta.component.css']
})
export class WidgetsInstaComponent implements OnInit {
  @ViewChild('widgetContainer', { static: false }) widgetContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('widgetIframe', { static: false }) widgetIframe!: ElementRef<HTMLIFrameElement>;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // Código de inicialização se necessário
  }

  ngAfterViewInit(): void {
    this.adjustWidgetHeight();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.adjustWidgetHeight();
  }

  private adjustWidgetHeight(): void {
    if (!this.widgetContainer?.nativeElement || !this.widgetIframe?.nativeElement) {
      return;
    }

    const container = this.widgetContainer.nativeElement;
    const widget = this.widgetIframe.nativeElement;
    
    // Calcula a altura baseada na largura (para grid 4x4)
    const containerWidth = container.offsetWidth;
    const itemHeight = containerWidth / 4; // 4 colunas
    const totalHeight = itemHeight * 4; // 4 linhas
    
    container.style.height = `${totalHeight}px`;
    widget.style.height = `${totalHeight}px`;
  }
}
