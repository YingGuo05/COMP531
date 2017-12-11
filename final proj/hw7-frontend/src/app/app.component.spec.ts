import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ShareService } from './share.service'
import {FormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpBackend } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http'
describe('AppComponent', () => {
  let app : AppComponent
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[ShareService],
      imports: [ HttpModule,HttpClientTestingModule,FormsModule,RouterTestingModule],
      declarations: [
        AppComponent
      ]
    }).compileComponents().then(() => {
      const fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    })
  }));
  it ('should create the app', async(() => {
    expect(app).toBeTruthy();
  }))
});
