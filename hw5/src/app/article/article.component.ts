import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ShareService } from '../share.service'
import { NewArticleService } from './new-article.service';
import { ArticlesService } from './articles.service';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { resource } from '../../profileActions'
import {CommentService } from './comment.service'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[NewArticleService,ArticlesService]
})
export class ArticleComponent implements OnInit {

  userlist:any;
  name:string;
  status:string='';
  followers:Array<any>=[];
  follower:string='';
  headline='';
  search;
  article:Array<any> = [];
  find:boolean = false;
  remind:string="";
  btn="Display comments";
  display = false;
  newPost;
  public articles:Array<any>=[];
  constructor(private http:HttpClient,private share:ShareService
    ,private newarticle:NewArticleService,private articleSer: ArticlesService,private commentSer:CommentService) { 
    
}
  ngOnInit() {
    if(this.share.state() == "login"){
      this.headline = this.share.initiate().headline;
      this.name = this.share.initiate().name;
      this.articles = this.share.initiate().articles;
      this.fetchArticles();
    }
    const followers = this.http.get('assets/data/followers.json').subscribe(
      response => {this.followers = response['followers']});
    const userlist = this.http.get('assets/data/profile.json')
      .subscribe(response => {this.userlist = response['profile']});
  }
  //fetch data from json file
  fetchArticles(){
    const articles = this.http.get('assets/data/articles.json')
    .subscribe(response => 
      {this.article = response['articles']
      this.article.push(...this.articles),
      this.article = this.article.reverse()
    });
  }
  //add new article
  addPost(){
    if(this.newPost){//create new article
      this.article = this.newarticle.addNewArticle(this.name,this.article,this.newPost);
      this.share.set_article(this.newarticle.createNew(this.name,this.newPost));
      this.newPost='';
    }  
  }
  // follow somebody
  add(){
    for(var i = 0 ; i < this.userlist.length;i++){
        if(this.userlist[i].name == this.follower){
            this.followers.push({name:this.follower,status:this.userlist[i],img:'assets/images/pic3.jpg',display:true});
            this.article = this.article.reverse();
            this.article.push(...this.userlist[i].articles);
            this.article = this.article.reverse();
            this.find = true;
            this.remind = "";
        }
    }
    if(!this.find){
        this.remind ="The user is not existed."
    }
    this.follower = "";
    this.find = false;
  }
  //clear the input article
  clear(){
    this.newPost='';
  }
  //search the matched post and display them on main page
  filter(event:any){
    this.article = this.articleSer.filter(this.article,event.target.value);
  }
  
  toggle(id){
    this.btn = this.commentSer.toggle(id)
  }

  delete(f:any){//unfollow someone
    for(var i = 0;i < this.followers.length ; i++){
      if(this.followers[i].name == f)
        this.followers.splice(i,1);
    }
    this.article = this.articleSer.deleteArticle(this.article,f);
  }
  // change current headline
  changeStatus(){
    this.headline = this.status;
    this.status = '';
    this.share.set_headline(this.headline);
  }
}
