import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavebarComponent } from './navebar/navebar.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesModule } from '../movies/movies.module';

@NgModule({
  declarations: [NavebarComponent, FooterComponent],
  imports: [CommonModule, MoviesModule],
  exports: [NavebarComponent, FooterComponent],
})
export class SharedModule {}
