import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from './share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router,private share:ShareService){}   
  ngOnInit(){
    
  
  }
}
