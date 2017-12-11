import { Component, OnInit,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import {RegisterService} from './register.service'
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[RegisterService]
})

export class AuthComponent implements OnInit {
    @ViewChild('register') regForm:NgForm;
    @ViewChild('login') logForm :NgForm;
    //use pw1 and pw2 to check whether the password and passwordConfirm are the same
    pw1:string;
    pw2:string;
    array:any;
    login1=false;
    article=[];
    user_info ={
        displayname:'',
        name:'',
        password:'',
        email:'',
        phone:'',
        birth:new Date(),
        zipcode:'',
        passwordConfirm:'',
        articles:this.article,
    };
    users;
    display_control={
        displayname:false,
        name:false,
        email:false,
        phone:false,
        birth:false,
        zipcode:false,
        password_pattern:false,
        password_equal:false,
        success:false
      }
    //validate the register
    onRegSubmit(Form1:NgForm){
        this.display_control = this.register.validateReg(this.user_info).html;
    }
    //reset the reg form
    reset(){
        this.display_control = this.register.reset().html
        this.user_info = this.register.reset().user_info
    }
    //validate the login account
    onLogSubmit(Form2:NgForm){
        //update name and password into userinfo and send it to service
        if(this.login.loginValidate(this.users,Form2.value.accountname,Form2.value.account_password)){
            
        } 
        else{
            this.showLoginError()
        }
        this.logForm.reset();
    }
    //clear the login error info
    login_clear(){
        this.login1 = false;
    }
    login_google(){
        window.location.href='https://yg45-final.herokuapp.com/auth/google'
    }
    //show the login error
    showLoginError() {
        this.login1 = true;
    }
    ngOnInit() {}
    constructor(private router:Router,private login:LoginService,private register:RegisterService,private http:HttpClient) { 
        
    }
}
