import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from '../../pages/home/home.component';

import {SliderShowComponent} from '../../components/slider-show/slider-show.component';
import {CardArticleComponent} from '../../components/card-article/card-article.component';
import {MidiaInstitucionalComponent} from '../../components/midia-institucional/midia-institucional.component';
import {SpotifyComponent} from '../../components/spotify/spotify.component';
import {ParceirosComponent} from '../../components/parceiros/parceiros.component';
import {WidgetsInstaComponent} from '../../components/widgets-insta/widgets-insta.component';

@NgModule({
  declarations: [
    HomeComponent,
    SliderShowComponent,
    CardArticleComponent,
    MidiaInstitucionalComponent,
    SpotifyComponent,
    ParceirosComponent,
    WidgetsInstaComponent
  ],exports:[
    HomeComponent,
    SliderShowComponent,
    CardArticleComponent,
    MidiaInstitucionalComponent,
    SpotifyComponent,
    ParceirosComponent,
    WidgetsInstaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
