import { Component, OnInit,ViewChild } from '@angular/core';
import { ProfileService } from './profile.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShareService } from '../share.service';
import { UserInfo } from '../userInfo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[]
})
export class ProfileComponent implements OnInit {
    @ViewChild('profile') profileForm:NgForm;
    userinfo : UserInfo = {
        name:'Ying',
        email:'yg45@rice.edu',
        phone:'123-123-1234',
        birth:'1995-05-10',
        zipcode:'77030',
        password:'12345'
    }
    //use these to mark each info updates or not
    namechange=false;
    emailchange=false;
    phonechange=false;
    zipcodechange=false;
    passwordchange=false;
    pw=false;
    info;

  constructor(private share :ShareService ) { 
    this.userinfo = this.share.get_info();//get user info from landing page via service
  }
  
  onSubmit(profile:NgForm){
      //check every info updates or not and display the remind info
      if(profile.value.password == profile.value.passwordConfirm){
        if(this.userinfo.name != profile.value.name && profile.value.name ){
            this.userinfo.name = profile.value.name;
            this.namechange= true;
        }
        if(this.userinfo.email != profile.value.email && profile.value.email){
            this.userinfo.email = profile.value.email;
            this.emailchange = true;
        }
        if(this.userinfo.phone != profile.value.phone && profile.value.phone){
            this.userinfo.phone = profile.value.phone;
            this.phonechange = true;
        }
        if(this.userinfo.zipcode != profile.value.zipcode && profile.value.zipcode){
            this.userinfo.zipcode = profile.value.zipcode;
            this.zipcodechange = true;
        }
        if(this.userinfo.password != profile.value.password && profile.value.password){
            this.userinfo.password = profile.value.password;
            this.passwordchange=true;
        }
        this.profileForm.reset();
      }else{
            this.pw = true;
      }
    
  }
  reset(){
    this.profileForm.reset();
  }
  ngOnInit(){
  }

}
