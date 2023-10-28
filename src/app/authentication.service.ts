import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signupmodel } from './signupmodel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http:HttpClient) { }

  _registerapi='http://127.0.0.1:2000/userRegister'

  Register(signupmodel:Signupmodel)
  {

    const params=new HttpParams()
    .set('username',signupmodel.username)
    .set('usermail',signupmodel.usermail)
    .set('userpassword',signupmodel.userpassword)
    .set('profilephoto',signupmodel.photo);

    return this._http.get(this._registerapi,{params});

  }




}
