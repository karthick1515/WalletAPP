import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AddmoneyComponent } from './addmoney.component';
@NgModule({
  declarations: [
    AddmoneyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    HttpClientModule
  ],exports: [
    AddmoneyComponent
  ]
})
export class AddmoneyModule { }
