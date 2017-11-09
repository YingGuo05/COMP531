import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import {ShareService } from '../share.service'
import {NgForm} from '@angular/forms'
@Injectable()
export class ProfileService {
  userinfo;
  //use these to mark each info updates or not
  change={
    namechange:false,
    emailchange:false,
    phonechange:false,
    zipcodechange:false,
    passwordchange:false,
    pw:false
  }
  

  constructor(private share:ShareService) {
  }
  onSubmit(profile:NgForm,user:any):any{
    this.userinfo = user;
    //check every info updates or not and display the remind info
    if(profile.value.password == profile.value.passwordConfirm && profile.valid){
      if(this.userinfo.name != profile.value.name && profile.value.name ){
          this.userinfo.name = profile.value.name;
          this.change.namechange= true;
      }else{
          this.change.namechange= false;
      }
      if(this.userinfo.email != profile.value.email && profile.value.email){
          this.userinfo.email = profile.value.email;
          this.change.emailchange = true;
      }
      else{
          this.change.emailchange = false;
      }
      if(this.userinfo.phone != profile.value.phone && profile.value.phone){
          this.userinfo.phone = profile.value.phone;
          this.change.phonechange = true;
      }else{
          this.change.phonechange = false;
      }
      if(this.userinfo.zipcode != profile.value.zipcode && profile.value.zipcode){
          this.userinfo.zipcode = profile.value.zipcode;
          this.change.zipcodechange = true;
      }else{
          this.change.zipcodechange = false;
      }
      if(this.userinfo.password != profile.value.password && profile.value.password){
          this.userinfo.password = profile.value.password;
          this.change.passwordchange=true;
      }else{
          this.change.passwordchange = false;
          this.change.pw = false;
      }
      this.share.send_info(this.userinfo);
      profile.reset();
    }else if(profile.value.password != profile.value.passwordConfirm){
          this.change.pw = true;
          profile.reset();
    }
    return this.change
}
  

}
