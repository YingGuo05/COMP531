import { Injectable} from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ShareService } from '../share.service'
import { Router } from '@angular/router';
import {resource,login} from '../../profileActions'
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
    // this.users = users;
    //  if(this.share.check_registerUser(username)){
    //    this.user_info = this.share.check_registerUser(username);
    //     if(this.user_info.password == password){
    //       this.share.storeUser(this.user_info)
    //       this.share.send_info(this.user_info);
    //       return true;
    //     }
        
    //     else
    //     return false;
    //  }
        
    //  function validate(element) {
    //   if(element.name == username && element.password == password)
    //     return true;
    //   else
    //     return false;
    // }
    // this.user = users.find(validate);
    // if(this.user){
    //   this.share.storeUser(this.user)
    //   this.share.send_info(this.user);
    //   return true;
    // }
    // else
    //   return false;
    
  }
  getState():string{
    this.share.changeState("logout");
    return this.share.state();
  }
  constructor(private share:ShareService,private router:Router) {
    
  }

}
