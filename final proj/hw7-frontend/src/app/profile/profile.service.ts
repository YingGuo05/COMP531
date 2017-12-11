import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

import {NgForm} from '@angular/forms'
import {getDisplayname,getDob,getEmail,getPhone,getZipcode,getUsername} from '../../profileActions'
import {changeZipcode,changeDisplayname,changeEmail,changePhone,changePassword} from '../../profileActions'
@Injectable()
export class ProfileService {
    result={
        info:null,
        change:null
    }
    userinfo={
        name:'',
        displayname:'',
        phone:'',
        email:'',
        zipcode:'',
        password:'',
        birth:''
      };
  //use these to mark each info updates or not
  change={
    namechange:false,
    emailchange:false,
    phonechange:false,
    zipcodechange:false,
    passwordchange:false,
    pw:false,
    noupdate:''
  }
  
  initial(){
    getDisplayname()
    .then(res=>{
      this.userinfo.displayname = res.displayname
    })
    getDob()
    .then(res=>{
      this.userinfo.birth = res.dob.substring(0,10)
    })
    getEmail()
    .then(res=>{
      this.userinfo.email = res.email
    })
    getZipcode()
    .then(res=>{
      this.userinfo.zipcode = res.zipcode
    })
    getUsername()
    .then(res=>{
      this.userinfo.name = res.username
    })
    getPhone()
    .then(res=>{
      this.userinfo.phone = res.phone
    })
    return this.userinfo
  }
  constructor() {
  }
  onSubmit(profile:NgForm,user:any):any{
    this.userinfo = user;
    //check every info updates or not and display the remind info
    if(profile.value.password == profile.value.passwordConfirm && profile.valid){
      if(this.userinfo.displayname != profile.value.displayname && profile.value.displayname ){
          changeDisplayname(profile.value.displayname)
          .then(res=>{
              this.userinfo.displayname = res.displayname
          })
          this.change.namechange= true;
      }else{
          this.change.namechange= false;
      }
      if(this.userinfo.email != profile.value.email && profile.value.email){
          changeEmail(profile.value.email)
          .then(res=>{
              this.userinfo.email = res.email
          })
          this.change.emailchange = true;
      }
      else{
          this.change.emailchange = false;
      }
      if(this.userinfo.phone != profile.value.phone && profile.value.phone){
          changePhone(profile.value.phone)
          .then(res=>{
            this.userinfo.phone = res.phone
          })
          this.change.phonechange = true;
      }else{
          this.change.phonechange = false;
      }
      if(this.userinfo.zipcode != profile.value.zipcode && profile.value.zipcode){
           changeZipcode(profile.value.zipcode)
           .then(res=>{
            this.userinfo.zipcode = res.zipcode
           })
          this.change.zipcodechange = true;
      }else{
          this.change.zipcodechange = false;
      }
      if(this.userinfo.password != profile.value.password && profile.value.password){
          changePassword(profile.value.password)
          .then(res=>{
              this.userinfo.password = res.password
          })
          this.change.passwordchange=true;
      }else{
          this.change.passwordchange = false;
          this.change.pw = false;
      }
      profile.reset();
    }else if(profile.value.password != profile.value.passwordConfirm){
          this.change.pw = true;
          this.change.noupdate='will not change'
          profile.reset();
    }
    this.result.change = this.change
    this.result.info = this.userinfo
    return this.result
}
  

}
