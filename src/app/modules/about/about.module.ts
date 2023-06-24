import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AboutComponent} from '../../pages/about/about.component';
import {HomeModule} from '../home/home.module';

import {QuadroImagensComponent} from '../../components/quadro-imagens/quadro-imagens.component';
import {HistoriaComponent} from '../../components/historia/historia.component';
import {GalleryAboutComponent} from '../../components/gallery-about/gallery-about.component';
import {CardPatronagemComponent} from '../../components/card-patronagem/card-patronagem.component';
import {CardGalleryAboutComponent} from '../../components/card-gallery-about/card-gallery-about.component';

@NgModule({
  declarations: [
    AboutComponent,
    QuadroImagensComponent,
    HistoriaComponent,
    GalleryAboutComponent,
    CardPatronagemComponent,
    CardGalleryAboutComponent
  ],exports:[
    AboutComponent,
    QuadroImagensComponent,
    HistoriaComponent,
    GalleryAboutComponent,
    CardPatronagemComponent,
    CardGalleryAboutComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class AboutModule { }
