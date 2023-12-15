import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './Authentic/login/login.component';
import { RegisterComponent } from './Authentic/register/register.component';
import { ApparatusComponent } from './apparatus/apparatus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NetworkComponent } from './network/network.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ApparatusComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    ProfileComponent,
    TransactionComponent,
    NetworkComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
