import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeModule} from './modules/home/home.module';
import {AboutModule} from './modules/about/about.module';
import {ArtisticModule} from './modules/artistic/artistic.module';
import {ContatoModule} from './modules/contato/contato.module';

import {MenuLogoComponent} from './components/menu-logo/menu-logo.component';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {FooterDefautComponent} from './components/footer-defaut/footer-defaut.component';
import {WhatsappComponent} from './components/whatsapp/whatsapp.component';
import {PopupComponent} from './components/popup/popup.component';

const routes: Routes = [
  {path: '', component:AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuLogoComponent,
    MenuBarComponent,
    FooterDefautComponent,
    WhatsappComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ArtisticModule,
    ContatoModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
