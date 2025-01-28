import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { ForgotpasswordComponent } from './forgotpassword.component';
@NgModule({
  declarations: [
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    HttpClientModule
  ],exports: [
    ForgotpasswordComponent
  ]
})
export class ForgotPasswordModule { }