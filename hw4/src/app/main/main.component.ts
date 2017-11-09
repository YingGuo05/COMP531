import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';
import { ShareService } from '../share.service';
import { UserInfo } from '../userInfo';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[NavService]
})

export class MainComponent implements OnInit {
    name:string;
    status:string='';
    followers=[
        {name:'Lay',status:'Love Ying',img:'assets/images/pic3.jpg',display:true},
        {name:'Simon',status:'Love Lay',img:'assets/images/pic4.jpg',display:true},
        {name:'Sia',status:'Love Lay too much',img:'assets/images/pic5.jpg',display:true}
    ];
    follower:string='';
    currentStatus='Yixing is my idol!';
    search;
    //use p for posting use article
    p={
        _id:'123',
        text:'123',
        img:'',
        comments:[],
        date:'2017-10-07',
        author:'YING',
        display:true
    }
    newPost;
    article:any;
    
    constructor(private nav : NavService, private share : ShareService,private http:HttpClient) {
        this.name = this.share.get_info().name;
    }
    //search the matched post and display them on main page
    filter(event:any){
        for(var i = 0 ; i < this.article.length; i++){
            if(event.target.value){
                if(this.article[i]['author'].indexOf(event.target.value) == -1 &&this.article[i]['text'].indexOf(event.target.value) == -1){
                this.article[i]['display'] = false;
            }
            }else{//no key word typed in search bar, so display all articles
                this.article[i]['display'] = true;
            }
        }
    }
    
    addPost(){
        if(this.newPost){//create new article
            this.p.author = this.name;
            this.p.text = this.newPost;
            this.p.date = Date().toLocaleString();
            this.article = this.article.reverse();
            this.article.push(this.p);
            this.article = this.article.reverse();
            this.newPost='';
        }  
    }
    clear(){
        this.newPost='';
    }
    delete(f){//unfollow someone
        f.display = false;
    }
    add(){//follow someone
        this.followers.push({name:this.follower,status:'always love you',img:'assets/images/pic3.jpg',display:true});
    }
    changeStatus(){// change current status
        this.currentStatus = this.status;
        this.status = '';
    }
  
    ngOnInit() {// read date from json file
        const articles = this.http.get('assets/data/articles.json').subscribe(response => {this.article = response['articles']; console.log(this.article)});
    }
}
