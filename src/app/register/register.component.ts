import { Component } from '@angular/core';
import { Signupmodel } from '../signupmodel';
import { AuthenticationService } from '../authentication.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  signupmodel = new Signupmodel("","","");

  constructor(private auth:AuthenticationService, private _http:HttpClient){};

  images:any;

  onUpload(event :any)
  {

    if(event.target.files.length>0)
    {
      const file = event.target.files[0];
      console.log(file);

      this.images=file;
    }

  }


  
  response:any;
  onSignup(){
    // alert(this.signupmodel.name);


    //files....

    // const formdata=new FormData();
    // formdata.append('file',this.images);

    // alert('Hello formdata ready to send');


    // this._http.post('http://127.0.0.1:2000/file',formdata).subscribe(

    // (res)=>
    // {
    //   console.log(res);
    // });

    // alert('Hello formdata  sended!!!');

    
    this.auth.Register(this.signupmodel).subscribe(

      (data)=>
      {
        this.response=data;
      }
    )

  }




}
