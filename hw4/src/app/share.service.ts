import { Injectable} from '@angular/core';
import { UserInfo  } from './userInfo';


@Injectable()
export class ShareService{
  public data:UserInfo={
    // the hardcode data for login user
      name:'Ying',
      email:'yg45@rice.edu',
      phone:'123-123-1234',
      birth:'1995-05-10',
      zipcode:'77030',
      password:'12345'
   };
  constructor() { }
  send_info(data:UserInfo){
    this.data = data;
  }
  get_info():UserInfo{
    return this.data;
  }
 
}