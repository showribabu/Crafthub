import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signupmodel } from './signupmodel';
import { Loginmodel } from './loginmodel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http:HttpClient) { }

  _registerapi='http://127.0.0.1:2000/userRegister';
  _loginapi='http://127.0.0.1:2000/userLogin';


  Register(signupmodel:Signupmodel)
  {

    const params=new HttpParams()
    .set('username',signupmodel.username)
    .set('usermail',signupmodel.usermail)
    .set('userpassword',signupmodel.userpassword);


    return this._http.get(this._registerapi,{params});

  }

  Login(loginmodel:Loginmodel)
  {
    const params=new HttpParams()
    .set('username',loginmodel.username)
    .set('userpassword',loginmodel.userpassword);

    return this._http.get(this._loginapi,{params});



  }




}
