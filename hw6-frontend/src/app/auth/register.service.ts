import { Injectable } from '@angular/core';
import { ShareService} from '../share.service'
import {register,resource} from '../../profileActions'
@Injectable()
export class RegisterService {
    display_control={
      html:{
        displayname:false,
        name:false,
        email:false,
        phone:false,
        birth:false,
        zipcode:false,
        password_pattern:false,
        password_equal:false,
        success:false
      },
      user_info:{
        displayname:'',
        name:'',
        password:'',
        email:'',
        phone:'',
        birth:new Date(),
        zipcode:'',
        passwordConfirm:'',
        articles:[],
        headline:'this is my headline'

      }
      
    }
  constructor(private share :ShareService) { }
  birth:any;
  today;
  birthDate ;
  age ;
  m;
  mark = true;
  checkage(birthday:string):boolean{
    //check user is 18 years old or not
      this.birth = birthday;
      this.today = new Date();
      this.birthDate = new Date(this.birth);
      this.age = this.today.getFullYear() - this.birthDate.getFullYear();
      this.m = this.today.getMonth() - this.birthDate.getMonth();
      if (this.m < 0 || (this.m === 0 && this.today.getDate() < this.birthDate.getDate())) {
          this.age--;
      }
      if(this.age<18)
          return false;
      return true;
  }
  validateReg(form:any):any{
    if(!form.displayname){
      this.mark = false;
      this.display_control.html.displayname = true;
    }else{
      this.display_control.user_info.displayname = form.displayname
    }
    if(!form.name.match(/^([a-zA-Z]{1})([a-zA-Z0-9])*$/)){
      this.mark = false;
      this.display_control.html.name = true;
    }
    else{
      this.display_control.user_info.name = form.name;
    }
    if(!form.email
      .match(/^([a-zA-Z0-9\_\-\.])+@([a-zA-Z0-9\_\-])+((\.[a-zA-Z0-9]{2,4}){1,2})$/)){
        this.display_control.html.email = true;
        this.mark = false;
      }
      else{
        this.display_control.user_info.email = form.email;
      }
    if(!form.phone.match(/^([0-9]{3}\-)([0-9]{3}\-)([0-9]{4})$/)){
      this.display_control.html.phone = true;
      this.mark = false;
    }else{
      this.display_control.user_info.phone = form.phone;
    }
    if(!this.checkage(form.birth)){
      this.display_control.html.birth = true;
      this.mark = false;
    }else{
      this.display_control.user_info.birth = form.birth;
    }
    if(!form.zipcode.match(/^([0-9]{5})$/)){
      this.mark = false;
      this.display_control.html.zipcode = true;
    }else{
      this.display_control.user_info.zipcode = form.zipcode
    }
    if(form.password != form.passwordConfirm){
      this.mark = false;
      this.display_control.html.password_equal = true;
    }
    else if(!form.password
      .match(/^([a-zA-Z0-9]+\-)([a-zA-Z0-9]+\-)([a-zA-Z0-9]+)$/)){
        this.display_control.html.password_pattern = true;
        this.mark = false;
      } else{
        this.display_control.user_info.password = form.password;
        this.display_control.user_info.passwordConfirm = form.passwordConfirm;
      }
    if(this.mark){
      console.log("ok");
      register(this.display_control.user_info)
      .then(res=>{
        console.log(res)
      })
      // this.display_control.user_info.articles = form.articles;
      this.display_control.html.success = true;
      // this.share.storeUser(this.display_control.user_info);
      let success = document.getElementById("success")
      success.style.display = "block"
    }
    return this.display_control;
  }
  reset():any{
    this.display_control.html.displayname = false;
    this.display_control.html.name = false;
    this.display_control.html.email = false;
    this.display_control.html.password_equal = false;
    this.display_control.html.password_pattern = false;
    this.display_control.html.phone = false;
    this.display_control.html.birth = false;
    this.display_control.html.zipcode = false;
    this.display_control.html.success = false;
    this.display_control.user_info.displayname = '';
    this.display_control.user_info.name = '';
    this.display_control.user_info.email = '';
    this.display_control.user_info.phone = '';
    this.display_control.user_info.password = '';
    this.display_control.user_info.zipcode = '';
    this.display_control.user_info.passwordConfirm ='';
    this.display_control.user_info.birth = null;
    return this.display_control;
  }
}
