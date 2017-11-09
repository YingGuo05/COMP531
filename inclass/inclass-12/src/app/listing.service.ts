import { Injectable } from '@angular/core';

@Injectable()
export class ListingService {
    private siteInfo:Object[];
  constructor() {
    this.siteInfo = [
        {name:"donate",description:"give me some money"},
        {
        name:"about",description:"learn about us"},
        {
        name:"contact",description:"contact us"},
        {
        name:"home",description:"landing page"},
        {
        name:"app",description:"redirects to home"},
        {
        name:"list",description:"list all components"}
    ];
  }
  getInfo():Object[]{
    return this.siteInfo;
  }
}
