import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './user/layout/header/header.component';
import { AboutComponent } from './user/about/about.component';
import { ServicesComponent } from './user/services/services.component';
import { ContactComponent } from './user/contact/contact.component';
import { CartComponent } from './user/cart/cart.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent
  },
  {
    path:'home',
    component:UserComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'service',
    component:ServicesComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
