import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-show-blogs',
  templateUrl: './show-blogs.component.html',
  styleUrls: ['./show-blogs.component.css']
})
export class ShowBlogsComponent implements OnInit {
  @Input() data;
  @Output() rateStar = new EventEmitter <Object>();
  constructor(private service: DataService) { }

  ngOnInit() {
  }
  rate(value: any, id: number) {
    var obj = { ratings: value , id: id};
    this.service.rateBlog(value, id).subscribe(x => this.rateStar.emit(obj));
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
  checkEmpty(x: any) {
    for ( let a in x) {
      return false;
    }
    return true;
  }
  reverse(x: any) {
    if (! this.checkEmpty(x)){
      console.log('not empty')
      return x.reverse();
    }
    else {
      console.log('empty');
      return x;
    }
  }
}
