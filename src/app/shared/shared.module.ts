import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavebarComponent } from './navebar/navebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
