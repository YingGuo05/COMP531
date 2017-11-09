import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import fetch, { mock } from 'mock-fetch'
import { ProfileComponent } from './profile.component';
import { url, fetchInfo,updateHeadline }  from '../../profileActions';
import {ShareService} from '../share.service'
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'
import {ProfileService} from './profile.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpBackend } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http'
const mockery = require('mockery');

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule,HttpClientTestingModule,FormsModule,RouterTestingModule],
      providers:[ShareService,ProfileService],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('should create', () => {
    expect(component).toBeTruthy();
  })
  
  it('should fetch the user profile information', (done)=> {
    const newinfo = { author:'YG', text:'This is YG'}
    mock(`${url}/info`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    fetchInfo()
    .then(r => {
        return r.body
    })
    .then(body=>{
        return JSON.parse(body)
    })
    .then(body=>{
        expect(body.info.name).toEqual(newinfo.author)
        expect(body.info.headline).toEqual(newinfo.text)
    })
    .then(done)
    .catch(done)
    
});

it('should update the headline',(done)=>{
    const newHeadline ={
        text:'this is my new headline'
    }
    mock(`${url}/update`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    updateHeadline(newHeadline)
    .then(r =>{
        return r.body
    })
    .then(body =>{
        return JSON.parse(body)
    })
    .then(body =>{
        expect(body.headline.text).toEqual(newHeadline.text)
    })
    .then(done)
    .catch(done)
})


});




