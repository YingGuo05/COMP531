import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    siteCompInfo;
  constructor(private listServ:ListingService) { }

  ngOnInit() {
  this.siteCompInfo = this.listServ.getInfo();
  }

}
