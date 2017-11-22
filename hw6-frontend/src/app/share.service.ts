import { Injectable,OnInit} from '@angular/core';

@Injectable()
export class ShareService implements OnInit{ 
  users:any;
  articles:Array<any>=[];
  public data :any;
  register_user;
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
    this.data.articles.push(articles);
    localStorage.setItem(this.data.name,JSON.stringify(this.data));
    localStorage.setItem("current",JSON.stringify(this.data));
  }
  set_articles(articles:any){
    this.data = JSON.parse(localStorage.getItem("current"))
    this.data.articles = articles;
    localStorage.setItem("article","initialized");
    localStorage.setItem(this.data.name,JSON.stringify(this.data));
    localStorage.setItem("current",JSON.stringify(this.data));
  }
  check_article():any{
    return localStorage.getItem("article");
  }
  storeUser(userinfo:any){
    localStorage.setItem(userinfo.name,JSON.stringify(userinfo));
    this.data = userinfo;
    localStorage.setItem("state","login");
    localStorage.setItem("current",JSON.stringify(userinfo));
  }
  check_registerUser(name:string):any{
    if(localStorage.getItem(name)){
      return JSON.parse(localStorage.getItem(name))
    }
    return null;
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
      localStorage.setItem("article","");
      localStorage.clear();
    }
  }
  initiate():any{
    return JSON.parse(localStorage.getItem("current"));
  }
  storeAvatar(url){
    localStorage.setItem("url",url);
  }
  getAvatar():any{
    return localStorage.getItem("url");
  }
  store_follower(follower:any){
    localStorage.setItem("follower",JSON.stringify(follower));
  }

  get_follower(){
    return JSON.parse(localStorage.getItem("follower"));
  }
  ngOnInit() {
    localStorage.setItem("state","logout");
    localStorage.clear();
  }
}