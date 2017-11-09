import { Injectable} from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ShareService } from '../share.service'
import { Router } from '@angular/router';
@Injectable()
export class LoginService {
  users:Array<any>;
  user:any;
  state;
  mark = false;
  //validate the login in user is in profile.json or not
  loginValidate(users:any,username:string,password:string):boolean{
     this.users = users;
     function validate(element) {
      if(element.name == username && element.password == password)
        return true;
      else
        return false;
    }
    this.user = users.find(validate);
    if(this.user){
      this.share.storeUser(this.user)
      this.share.send_info(this.user);
      return true;
    }
    else
      return false;
  }
  getState():string{
    this.share.changeState("logout");
    return this.share.state();
  }
  constructor(private share:ShareService,private router:Router) {
    
  }

}
