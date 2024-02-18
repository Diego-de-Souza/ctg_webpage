import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocacaoComponent } from '../../pages/locacao/locacao.component';

@NgModule({
  declarations: [
    LocacaoComponent
  ],
  exports: [
    LocacaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LocacaoModule { }
