import { Component, OnInit,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';
import { UserInfo } from '../userInfo';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[]
})

export class AuthComponent implements OnInit {
    @ViewChild('register') regForm:NgForm;
    @ViewChild('login') logForm :NgForm;
    //use pw1 and pw2 to check whether the password and passwordConfirm are the same
    pw1:string;
    pw2:string;
    
    user_info : UserInfo = {// the hardcode data for login user
        name:'Ying',
        email:'yg45@rice.edu',
        phone:'123-123-1234',
        birth:'1995-05-10',
        zipcode:'77030',
        password:'12345'
    }
     
    reset(){
        this.regForm.reset();
    }

    birth = this.user_info.birth;
    today = new Date();
    birthDate = new Date(this.birth);
    age = this.today.getFullYear() - this.birthDate.getFullYear();
    m = this.today.getMonth() - this.birthDate.getMonth();

    checkage(birthday:string):boolean{//check user is 18 years old or not
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
    
    onRegSubmit(Form1:NgForm){
        if(Form1.valid && this.pw1 == this.pw2 && this.checkage(Form1.value.birth) ){
            //update the userinfo and send it to share service, go to main page
            this.user_info.name = Form1.value.name;
            this.user_info.email = Form1.value.email;
            this.user_info.phone = Form1.value.phone;
            this.user_info.birth = Form1.value.birth;
            this.user_info.zipcode = Form1.value.zipcode;
            this.user_info.password = Form1.value.password;
            this.share.send_info(this.user_info);
            this.router.navigate(['../main']);
        }
    }
    
    onLogSubmit(Form2:NgForm){
        //update name and password into userinfo and send it to service
        this.user_info.name = Form2.value.accountname;
        this.user_info.password = Form2.value.account_password;
        this.share.send_info(this.user_info);
        this.router.navigate(['../main']);//go to main page
        this.logForm.reset();
    }
    constructor(private router:Router,private share:ShareService) { 
    }
    ngOnInit() {
    }

}
