import { Injectable } from '@angular/core';
import { ShareService } from '../share.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes,Router } from '@angular/router';
import { logout } from '../../profileActions'
@Injectable()
export class NavService {
    
  constructor(private router:Router,private share : ShareService){}
  logout(){
    logout()
    .then(res=>{
      console.log(res)
    })
    this.router.navigate(['../auth']);
  }
  changeState() {
    this.share.changeState("logout");
  }
  profile(){// go to profile page
    this.router.navigate(['../profile']);
  }
}
