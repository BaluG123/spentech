import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharemarketRoutingModule } from './sharemarket-routing.module';
import { SharemarketComponent } from './sharemarket/sharemarket.component';


@NgModule({
  declarations: [
    SharemarketComponent
  ],
  imports: [
    CommonModule,
    SharemarketRoutingModule
  ]
})
export class SharemarketModule { }
