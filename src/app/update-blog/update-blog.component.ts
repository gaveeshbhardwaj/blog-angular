import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";
import {Location} from "@angular/common";

interface IItem {
  title: string;
  category: string;
  author: string;
  logo: string;
  ratings: string;
  content: string;
  date: string;
  id: any ;
}

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  constructor(private route: ActivatedRoute , private service: DataService , private location: Location) { }
  data: IItem ;
  id: any;
  categories: any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getBlog(this.id).subscribe( x => this.data = x );
    this.service.getCategories().subscribe(x => {
      this.categories = x;
    });


  }
  getformdata( logo: File[]) {
    const fileReader = new FileReader();
    fileReader.onload = (file) => {
    this.data.logo = fileReader.result;
    this.service.updateBlog(this.data).subscribe(x => {
      this.location.back();
      });
    }
    if (logo[0]) {
      fileReader.readAsDataURL(logo[0]);
    }
    else {
      this.service.updateBlog(this.data).subscribe(x => {
        this.location.back();
      });
    }
  }

}
