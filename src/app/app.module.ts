import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './users/profile/profile.component';
import { MoviesPipe } from './pipes/movies.pipe';
import { DetailsPipe } from './pipes/details.pipe';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './movies/movies.module';
// import { CutstrPipe } from './pipes/cutstr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MoviesPipe,
    DetailsPipe,
    HomeComponent,
    // CutstrPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AuthModule,
    MoviesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
