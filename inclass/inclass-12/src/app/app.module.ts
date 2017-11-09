import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { ListComponent } from './list/list.component';
import {ListingService} from './listing.service';
import { MdToolbarModule } from '@angular/material';
import {MdCardModule} from '@angular/material';

const routes: Routes = [
    {path: 'about', component:AboutComponent},
    {path: 'home',component:HomeComponent},
    {path: 'list',component:ListComponent},
    {path: 'donate',component:DonateComponent},
    {path: 'contact',component:ContactComponent},
    {path: '',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    DonateComponent,
    ListComponent
    
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdCardModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
     RouterModule
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }