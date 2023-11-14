import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { DetailsComponent } from './movies/details/details.component';
import { ProfileComponent } from './users/profile/profile.component';
import { WhishlistComponent } from './users/whishlist/whishlist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'whislist', component: WhishlistComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
