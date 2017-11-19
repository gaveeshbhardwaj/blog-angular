import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import { Location} from "@angular/common";


@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  id: any;
  data: any;
  constructor(private route: ActivatedRoute , private service: DataService, private location : Location) {
  }



  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getBlog(this.id).subscribe( x => this.data = x );

  }
  rate(value: any, id: number) {
    var obj = { ratings: value , id: id};
    this.service.rateBlog(value, id).subscribe(x => this.data = x );
  }
  numberlist(num) {
    let list = [];
    for ( let i = 1; i <= num; i++) {
      list.push(i + 1);
    }
    return list;
  }
  ishalf(num) {
    num = num * 2;
    return ( num % 2 !== 0);
  }
  deleteBlog(id: any) {
    this.service.deleteBlog(id).subscribe(x => this.location.back() );
  }
}
