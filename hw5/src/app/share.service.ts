import { Injectable,OnInit} from '@angular/core';

@Injectable()
export class ShareService implements OnInit{ 
  users:any;
  articles:Array<any>=[];
  public data :any;
  constructor() {}
  send_info(data:any){
    this.data = data;
    localStorage.setItem(this.data.name,JSON.stringify(data));
    localStorage.setItem("current",JSON.stringify(data));
  }
  get_headline():string{
    return JSON.parse(localStorage.getItem("current")).headline;
  }
  set_headline(headline:string){
    this.data = JSON.parse(localStorage.getItem("current"));
    this.data.headline = headline;
    localStorage.setItem(this.data.name,JSON.stringify(this.data));
    localStorage.setItem("current",JSON.stringify(this.data));
  }
  set_article(articles:any){
    this.data = JSON.parse(localStorage.getItem("current"))
    this.data.articles.push(articles)
    localStorage.setItem(this.data.name,JSON.stringify(this.data));
    localStorage.setItem("current",JSON.stringify(this.data));
  }
  storeUser(userinfo:any){
    localStorage.setItem(userinfo.name,JSON.stringify(userinfo));
    this.data = userinfo;
    localStorage.setItem("state","login");
    localStorage.setItem("current",JSON.stringify(userinfo));
  }
  sendUser(username:string):any{
    return JSON.parse(localStorage.getItem(username));
  }
  set_user(name:string){
    this.data = JSON.parse(localStorage.getItem(name));
    localStorage.setItem("state","login");
    localStorage.setItem("current",JSON.stringify(this.data));
  }
  getData(){
    return this.data;
  }
  clear(){
    localStorage.clear();
  }
  state():string{
    return localStorage.getItem("state");
  }
  changeState(state:string){
    localStorage.setItem("state",state);
    if(state == "logout"){
      localStorage.setItem("current","");
    }
  }
  initiate():any{
    return JSON.parse(localStorage.getItem("current"));
  }
  ngOnInit() {
    localStorage.setItem("state","logout");
  }
}