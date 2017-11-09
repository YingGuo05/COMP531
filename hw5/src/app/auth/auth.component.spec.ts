import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import fetch, { mock } from 'mock-fetch'
import { AuthComponent } from './auth.component';
import {LoginService} from './login.service'
import {ShareService} from '../share.service'
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpBackend } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http'

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule,HttpClientTestingModule,FormsModule,RouterTestingModule],
      providers:[ShareService,LoginService],
      declarations: [ AuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it ('should create', () => {
    expect(component).toBeTruthy();
  })
  
});




