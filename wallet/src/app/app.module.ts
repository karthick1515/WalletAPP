import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpModule } from 'src/component/signup/signup.module';
import { WalletAccountService } from 'src/services/walletaccountservice.service';
import { LoginModule } from 'src/component/login/login.module';
import { HomepageModule } from 'src/component/homepage/homepage.module';
import { ForgotPasswordModule } from 'src/component/forgotpassword/forgotpassword.module';
import { DashboardModule } from 'src/component/dashboard/dashboard.module';
import { ProfileModule } from 'src/component/profile/profile.module';
import { AddmoneyModule } from 'src/component/addmoney/addmoney.module';
import { SendMoneyModule } from 'src/component/sendmoney/sendmoney.module';
import { TransactionsModule } from 'src/component/transactions/transactions.module';
import { HelloangularworldComponent } from './helloangularworld/helloangularworld.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloangularworldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    SignUpModule,
    LoginModule,
    HomepageModule,
    ForgotPasswordModule,
    DashboardModule,
    ProfileModule,
    AddmoneyModule,
    SendMoneyModule,
    TransactionsModule
  ],
  providers: [WalletAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
