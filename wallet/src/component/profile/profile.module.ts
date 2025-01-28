import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';



@NgModule({
  declarations: [
   ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports: [
    ProfileComponent
]
})
export class ProfileModule { }
