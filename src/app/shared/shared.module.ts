import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavebarComponent } from './navebar/navebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavebarComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavebarComponent, FooterComponent],
})
export class SharedModule {}
