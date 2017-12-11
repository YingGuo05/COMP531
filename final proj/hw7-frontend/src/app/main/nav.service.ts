import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes,Router } from '@angular/router';
import { logout } from '../../profileActions'
@Injectable()
export class NavService {
    
  constructor(private router:Router){}
  logout(){
    logout()
    // .then(res=>{
    //   console.log(res)
    // })
    this.router.navigate(['../auth']);
  }

  profile(){// go to profile page
    this.router.navigate(['../profile']);
  }
}
