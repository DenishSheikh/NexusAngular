import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent {
showSignIn: any;

  openSignIn(){
    this.showSignIn=true;
  } 
  openSignUp(){
    this.showSignIn=false
  }

}
