import { Component, OnInit,ViewChild } from '@angular/core';
import { ProfileService } from './profile.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShareService } from '../share.service';
import { HttpClientModule } from '@angular/common/http';
import { getAvatar,putAvatar} from '../../profileActions'
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
    avatarPic;
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
  constructor(private share :ShareService ,private http:HttpClient,private profileSer: ProfileService) { 
     getAvatar('')
     .then(res=>{
       console.log(res)
       this.avatarPic = res.avatars["0"].avatar
     })
  }
  upload(){
    putAvatar(this.url)
  }
  
  // changeAvatarPic(changeAvatar){
  //   console.log(changeAvatar);
  //   this.avatarPic = changeAvatar.replace("C:\\fakepath\\","./assets/images/");
  //   this.share.storeAvatar(this.avatarPic);
  // }
  displayPhoto(fileInput) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.url = fileInput.target.files[0]
      this.upload()
    const reader = new FileReader();
    reader.onload = ((e) => {
      this.avatarPic = e.target['result'];
    });
    reader.readAsDataURL(fileInput.target.files[0]);}
    this.ca.nativeElement.value = "";
    // var obj = document.getElementById('changeAvatar') ;  
    // obj.outerHTML=obj.outerHTML; 
    // .then(res=>{
    //   console.log(res)
    // })
  
}
  onSubmit(profile:NgForm){
    this.result = this.profileSer.onSubmit(profile,this.userinfo)
    this.change = this.result.change
    this.userinfo = this.result.info
    console.log(this.change)
  }
  ngOnInit(){
   this.userinfo = this.profileSer.initial()
  }

}
