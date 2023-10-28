import { Component } from '@angular/core';
import { Loginmodel } from '../loginmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginmodel=new Loginmodel("","");

  onLogin(){
    alert(this.loginmodel.username);
  }
}
