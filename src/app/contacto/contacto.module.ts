import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InfoComponent
  ]
})
export class ContactoModule { }
