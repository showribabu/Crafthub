import { Component } from '@angular/core';
import { Loginmodel } from '../loginmodel';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginmodel=new Loginmodel("","");

  constructor(private auth:AuthenticationService){}

  response:any;
  onLogin(){
    alert(this.loginmodel.username);

    this.auth.Login(this.loginmodel).subscribe(

      (data)=>
      {
        this.response=data;
      }
    )

  }
}
