import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const url = 'http://127.0.0.1:3000/blogs';
const category_url = 'http://127.0.0.1:3000/categories';
const header = {headers: new  Headers({'Content-Type': 'application/json'})};

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  getData() {
    return this.http.get(url).map(res => res.json());
  }
  postData(widget) {
    return this.http.post(url, widget, header).map(res => res.json());
  }
  getCategories() {
    return this.http.get(category_url).map(res => res.json());
  }
  rateBlog(value: any, id: any) {
    const obj = {ratings: value };
    return this.http.patch(url + '/' + id  , JSON.stringify(obj) , header).map(res => res.json());
  }
  getBlog(id: any) {
    return this.http.get(url + '/' + id ).map(res => res.json());
  }
  deleteBlog(id: any) {
    return this.http.delete(url + '/' + id ).map(res => res.json());
  }
  updateBlog(data: any) {
    return this.http.patch(url + '/' + data.id  , JSON.stringify(data) , header).map(res => res.json());
  }
}
