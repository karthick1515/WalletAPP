import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { SendmoneyComponent } from './sendmoney.component';
@NgModule({
  declarations: [
    SendmoneyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    HttpClientModule
  ],exports: [
    SendmoneyComponent
  ]
})
export class SendMoneyModule { }
