import { Component } from '@angular/core';
import { Signupmodel } from '../signupmodel';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  signupmodel = new Signupmodel("","","","");

  constructor(private auth:AuthenticationService){}
  

  response:any;
  onSignup(){
    // alert(this.signupmodel.name);

    this.auth.Register(this.signupmodel).subscribe(

      (data)=>
      {
        this.response=data;
      }
    )



  }

}
