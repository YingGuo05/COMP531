import { Component, OnInit } from '@angular/core';
import { Donor } from './Donor';
import {DonorService} from './donor.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  providers:[DonorService]
})
export class DonateComponent implements OnInit {
   
    featuredDonor:Donor;
    
  constructor(private donorService: DonorService) {}
  
  
  
  ngOnInit() {
    this.featuredDonor = this.donorService.getFeaturedDonor();
  }

}
