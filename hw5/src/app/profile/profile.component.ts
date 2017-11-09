import { Component, OnInit,ViewChild } from '@angular/core';
import { ProfileService } from './profile.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShareService } from '../share.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[]
})
export class ProfileComponent implements OnInit {
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
  constructor(private share :ShareService ,private http:HttpClient,private profileSer: ProfileService) { 
     this.fetchInfo();
  }
  fetchInfo(){
    if(this.share.state() == "login"){
        //get user info from landing page via service
        this.userinfo = this.share.initiate();
    }else{
        const userinfo = this.http.get('assets/data/profile.json')
        .subscribe(response => 
          {this.userinfo= response['profile'][0]
        });
    } 
  }
  onSubmit(profile:NgForm){
    this.change = this.profileSer.onSubmit(profile,this.userinfo)
  }
  ngOnInit(){
  }

}
