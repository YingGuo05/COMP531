import { Injectable} from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';
import {resource,login,login_gg} from '../../profileActions'
@Injectable()
export class LoginService {
  users:Array<any>;
  user:any;
  state;
  mark = false;
  user_info:{
    displayname:'',
    name:'',
    password:'',
    email:'',
    phone:'',
    birth:'1995-05-10',
    zipcode:'',
    passwordConfirm:''
    
  }
  //validate the login in user is in profile.json or not
  loginValidate(users:any,username:string,password:string){
    login(username,password)
    .then(res=>{
      if(res.result == 'login-success')
        this.router.navigate(['../main']);
      else{
        let error = document.getElementById("login-error")
        error.style.display = "block"
      }
    })
  }
 login_google(){
  login_gg()
  
 }
  constructor(private router:Router) {
    
  }

}
