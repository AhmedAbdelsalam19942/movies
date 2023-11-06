import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    WhishlistComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
