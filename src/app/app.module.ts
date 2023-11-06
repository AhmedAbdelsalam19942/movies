import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MoviesPipe } from './pipes/movies.pipe';
import { DetailsPipe } from './pipes/details.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MoviesPipe,
    DetailsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
