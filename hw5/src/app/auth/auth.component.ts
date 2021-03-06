import { Component, OnInit,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';
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
    user_info ={
        name:'',
        password:'',
        email:'',
        phone:'',
        birth:new Date(),
        zipcode:'',
        passwordConfirm:''
    };
    users;
    display_control={
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
        this.display_control = this.register.validateReg(this.user_info);
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
            this.router.navigate(['../main']);
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
    //show the login error
    showLoginError() {
        this.login1 = true;
    }
    ngOnInit() {}
    constructor(private router:Router,private share:ShareService,private login:LoginService,private register:RegisterService,private http:HttpClient) { 
        const users = this.http.get('assets/data/profile.json')
        .subscribe((response:Array<any>) => {this.users= response['profile']});
      
    }
}
