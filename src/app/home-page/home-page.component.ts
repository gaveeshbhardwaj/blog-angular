import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

interface IItem {
  id: number ;
  ratings: any ;
}


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  heading = '';
  data: Object[];
  categories: Object[];

  constructor(private service: DataService) {

  }

  ngOnInit() {
    this.service.getData().subscribe(x => {
      this.data = x;
    });
    this.service.getCategories().subscribe(x => {
      this.categories = x;
    });
  }

  newBlog(item: Object) {
    this.data.push(item);
  }

  getCategory(cat: string) {
    if (cat === 'All') {
      this.heading = 'Showing  All Related Blogs';
      this.service.getData().subscribe(x => {
        this.data = x;
      });
    }
    else if (cat === 'Favourites') {
      this.heading = 'Showing  Favourite Blogs';
      this.service.getData().subscribe(x => {
        this.data = x.sort(function (a, b) {
          return (a.ratings - b.ratings);
        });
      });
    }
    else {
      this.heading = 'Showing ' + cat + ' Related Blogs';
      this.service.getData().subscribe(x => {
        this.data = x.filter(function (item) {
          return item.category === cat;
        });
      });
    }
  }

  search(val: string) {
    if (val.trim() !== '') {
      this.heading = '';
      this.service.getData().subscribe(x => {
        this.data = x.filter(function (item) {
          return (item.title.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) !== -1);
        });
      });
    }

    if (val.trim() === '') {
      this.service.getData().subscribe(x => {
        this.data = x;
      });
    }
  }

  rateStar(obj: IItem) {
    this.data.forEach(function (item: IItem) {
      if (item.id === obj.id) {
        item.ratings = obj.ratings;
      }
    });
  }


}
