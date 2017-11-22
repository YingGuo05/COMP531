import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ShareService } from '../share.service'
import { NewArticleService } from './new-article.service';
import { ArticlesService } from './articles.service';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { resource,getHeadlines,getUserHeadline,getDisplayname,changeHeadline ,getAvatar,getFollowing,deleteFollowing,addFollowing,addArticle, getArticles, changeArticle, getUsername} from '../../profileActions'
import {CommentService } from './comment.service'
import { getAppInitializer } from '@angular/router/src/router_module';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[NewArticleService,ArticlesService]
})
export class ArticleComponent implements OnInit {
  @ViewChild('postPic') pp :any
  username:'';
  url;
  front_back;
  usr;
  avatarPic;
  userlist:any;
  name:string;
  status:string='';
  followers:Array<any>=[];
  followingNameList=[];
  follower:string='';
  headline='This is my headline';
  search;
  article:Array<any> = [];
  find:boolean = false;
  remind:string="";
  btn="Display comments";
  display = false;
  newPost;
  newComment;
  comment;
  imgSrc;
  public articles:Array<any>=[];
  constructor(private http1:Http,private http:HttpClient,private share:ShareService
    ,private newarticle:NewArticleService,private articleSer: ArticlesService,private commentSer:CommentService) { 
      getAvatar('')
      .then(res=>{
        this.avatarPic =  res.avatars["0"].avatar
      })  
      getFollowing('')
      .then(res=>{
        this.followingNameList = res.following
        getHeadlines(res.following)
        .then(r=>{
          this.followers = r.headlines
          // console.log(this.followers)
        })
      })
  }
  ngOnInit() {
    getArticles(-1)
    .then(res=>{
      console.log(res.articles)
      this.article = res.articles
     
    })
    getUserHeadline()
    .then(res =>{
      console.log(res)
      this.headline = res.headline
    })
     getDisplayname()
     .then(res=>{
       this.name = res.displayname
     })
    getUsername()
    .then(res=>{
      this.username  = res.username
    })
  }
  //fetch data from json file
  
  //add new article
  addPost(){
    if(this.newPost){//create new article
      addArticle(this.newPost,this.url)
      .then(res=>{
        console.log(res)
        getArticles(-1)
        .then(res=>{
          this.article = res.articles
        })
      })
      this.pp.nativeElement.value = "";
    }  
  }
  
  editArticle(id,author){
    if(author == this.username){
      let edit = document.getElementById(id+"article");
      if(edit.contentEditable == "false")
        edit.contentEditable = "true";
      else{
        var newText = this.articleSer.editArticle(id)
        var info={articleId:id,text:newText,commentId:null}
        changeArticle(info)
        .then(res=>{
          getArticles(-1)
          .then(res=>{
            this.article = res.articles
          })
        })
      }
    }
  }

  editComment(id1,id2,author){
    if(this.username  == author){
      let editcomment = document.getElementById("art"+id1+"comment"+id2)
      if(editcomment.contentEditable == "false"){
        editcomment.contentEditable = "true"
      }else{
        let newText = this.commentSer.editComment(id1,id2)
        let info = {articleId:id1,text:newText,commentId:id2}
        changeArticle(info)
        .then(res=>{
          getArticles(-1)
          .then(res=>{
            this.article = res.articles
          })
        })
        
      }
    }
  }

  addComment(id,text){
    //create new article
    var newText= text
    if(text){
      console.log(newText)
      var info={articleId:id,text:newText,commentId:-1}
      changeArticle(info)
      .then(res=>{
        console.log(res)
        getArticles(-1)
        .then(res=>{
          this.article = res.articles
        })
      })
    }
    
  
  }
  displayPhoto(fileInput) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.url = fileInput.target.files[0]
    const reader = new FileReader();
    reader.onload = ((e) => {
      this.imgSrc = e.target['result'];
    });
    reader.readAsDataURL(fileInput.target.files[0]);
    
  }
}
  // follow somebody
  add(){
    addFollowing(this.follower)
    .then(res=>{
      getHeadlines(res.following)
      .then(r=>{
        this.followers = r.headlines
        // console.log(this.followers)
      })
      getArticles(-1)
      .then(res=>{
        this.article = res.articles
        
      })
      this.follower=''
    })
    
    // getHeadlines(this.followingNameList)
    // .then(res=>{
    //   console.log(res)
    // })
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
    this.commentSer.toggle(id)
  }
  // remove_comment(id1,id2){
  //   this.article = this.commentSer.remove(this.article,id1,id2);
  //   this.share.set_articles(this.article);
  // }
  delete(f:any){//unfollow someone
    deleteFollowing(f)
    .then(res=>{
      getHeadlines(res.following)
      .then(r=>{
        this.followers = r.headlines
        // console.log(this.followers)
      })
      getArticles(-1)
      .then(res=>{
        this.article = res.articles
      })
    })
  }
  // change current headline
  changeStatus(){
    changeHeadline(this.status)
    .then(res=>{
      this.headline = res.headline
    })
    this.status = '';
  }
}
