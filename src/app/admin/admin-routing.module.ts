import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Authentic/register/register.component';
import { LoginComponent } from './Authentic/login/login.component';
import { HomeComponent } from './home/home.component';
import { ApparatusComponent } from './apparatus/apparatus.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ProfileComponent } from './profile/profile.component';
import { NetworkComponent } from './network/network.component';

const routes: Routes = [

  {
    path: 'admin',
    children: [
      {
        path: 'authentic',
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          // You can add more nested routes here if needed
          // For example: { path: 'forgot-password', component: ForgotPasswordComponent }
        ]
      },
      
      {
        path:'home',
        children:[
          {path:'',            component:HomeComponent},
          {path:'network', component:NetworkComponent},
          {path:'apparatus',   component:ApparatusComponent},
          {path:'transaction', component:TransactionComponent},
          {path:'profile',     component:ProfileComponent }   
        ]
      }
  
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
