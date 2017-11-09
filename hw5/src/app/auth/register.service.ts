import { Injectable } from '@angular/core';


@Injectable()
export class RegisterService {
    display_control={
      html:{
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
        name:'',
        password:'',
        email:'',
        phone:'',
        birth:new Date(),
        zipcode:'',
        passwordConfirm:''
      }
      
    }
  constructor() { }
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
    if(!form.name.match(/^([a-zA-Z]{1})([a-zA-Z0-9])*$/)){
      this.mark = false;
      this.display_control.html.name = true;
    }
    if(!form.email
      .match(/^([a-zA-Z0-9\_\-\.])+@([a-zA-Z0-9\_\-])+((\.[a-zA-Z0-9]{2,4}){1,2})$/)){
        this.display_control.html.email = true;
        this.mark = false;
      }
    if(!form.phone.match(/^([0-9]{3}\-)([0-9]{3}\-)([0-9]{4})$/)){
      this.display_control.html.phone = true;
      this.mark = false;
    }
    if(!this.checkage(form.birth)){
      this.display_control.html.birth = true;
      this.mark = false;
    }
    if(!form.zipcode.match(/^([0-9]{5})$/)){
      this.mark = false;
      this.display_control.html.zipcode = true;
    }
    if(form.password != form.passwordConfirm){
      this.mark = false;
      this.display_control.html.password_equal = true;
    }
    if(!form.password
      .match(/^([a-zA-Z0-9]+\-)([a-zA-Z0-9]+\-)([a-zA-Z0-9]+)$/)){
        this.display_control.html.password_pattern = true;
        this.mark = false;
      }
    if(this.mark)
      this.display_control.html.success = true;
    return this.display_control;
  }
  reset():any{
    this.display_control.html.name = false;
    this.display_control.html.email = false;
    this.display_control.html.password_equal = false;
    this.display_control.html.password_pattern = false;
    this.display_control.html.phone = false;
    this.display_control.html.birth = false;
    this.display_control.html.zipcode = false;
    this.display_control.html.success = false;
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
