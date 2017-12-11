import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[NavService]
})

export class MainComponent implements OnInit {
    constructor(private router:Router,private nav : NavService) {}
    logout(){
        this.nav.logout();
    }
    profile(){
        this.nav.profile();
    }
    ngOnInit() {
    }
}
