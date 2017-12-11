import { Component, OnInit,ViewChild } from '@angular/core';
import { ProfileService } from './profile.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { HttpClientModule } from '@angular/common/http';
import { getAvatar,putAvatar,link,unlink,getUsername} from '../../profileActions'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[]
})
export class ProfileComponent implements OnInit {
  @ViewChild('changeAvatar') ca:any;
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
    avatarPic='';
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
    url;
    link_account={
      username:'',
      password:''
    }
  constructor( private http:HttpClient,private profileSer: ProfileService) { 
     getAvatar('')
     .then(res=>{
       this.avatarPic = res.avatars["0"].avatar
     })
  }
  upload(){
    putAvatar(this.url)
    .then(res=>{
      this.avatarPic = res.avatar
    })
  }
  
  displayPhoto(fileInput) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.url = fileInput.target.files[0]
      console.log(this.url)
      this.upload()
    const reader = new FileReader();
    reader.onload = ((e) => {
      this.avatarPic = e.target['result'];
    });
    reader.readAsDataURL(fileInput.target.files[0]);}
    this.ca.nativeElement.value = "";
    
  
}
onLink(linkgg:NgForm){
  this.link_account.username = linkgg.value.accountname
  this.link_account.password = linkgg.value.account_password
  link(this.link_account)
  .then(res=>{
    if(res.result == 'success link Google'){
      let success = document.getElementById('link-success')
      success.style.display='block'
    }else{
      let fail = document.getElementById('link-error')
      fail.style.display='block'
    }
  })
  .catch(e=>{
    console.log(e)
  })
}
unlink(){
  var username = ''
  getUsername()
  .then(res=>{
    username = res.username
    unlink(username)
    .then(res=>{
      if(res.result == 'success link Google'){
        let success = document.getElementById('unlink-success')
        success.style.display='block'
      }else{
        let fail = document.getElementById('unlink-error')
        fail.style.display='block'
      }

    })
  })
}
  onSubmit(profile:NgForm){
    this.result = this.profileSer.onSubmit(profile,this.userinfo)
    this.change = this.result.change
    this.userinfo = this.result.info
   
  }
  ngOnInit(){
   this.userinfo = this.profileSer.initial()
  }

}
