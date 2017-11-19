import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ShowBlogsComponent } from './show-blogs/show-blogs.component';
import { CategoryComponent } from './category/category.component';
import {HttpModule} from '@angular/http';
import {DataService} from './data.service';
import { Routes, RouterModule } from '@angular/router';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog/:id', component: BlogContentComponent },
  { path: 'update/:id', component: UpdateBlogComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CreateFormComponent,
    ShowBlogsComponent,
    CategoryComponent,
    BlogContentComponent,
    HomePageComponent,
    UpdateBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes,
      { enableTracing: false } ),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
