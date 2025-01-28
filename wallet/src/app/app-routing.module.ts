import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmoneyComponent } from 'src/component/addmoney/addmoney.component';
import { DashboardComponent } from 'src/component/dashboard/dashboard.component';
import { ForgotpasswordComponent } from 'src/component/forgotpassword/forgotpassword.component';
import { HomepageComponent } from 'src/component/homepage/homepage.component';
import { LoginComponent } from 'src/component/login/login.component';
import { ProfileComponent } from 'src/component/profile/profile.component';
import { SendmoneyComponent } from 'src/component/sendmoney/sendmoney.component';
import { SignupComponent } from 'src/component/signup/signup.component';
import { TransactionsComponent } from 'src/component/transactions/transactions.component';

const routes: Routes = [
  {component: HomepageComponent, path:''},
  {component: SignupComponent, path: 'signup'},
  {component: LoginComponent, path: 'login'},
  {component: ForgotpasswordComponent, path: 'forgotpassword'},
  {component: DashboardComponent, path: 'dashboard'},
  {component: ProfileComponent,path:'profile'},
  {component: AddmoneyComponent,path:'add-money'},
  {component: SendmoneyComponent,path:'send-money'},
  {component: TransactionsComponent,path:'transactions'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }