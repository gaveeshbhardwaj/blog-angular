import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  @Input() categories;
  @Output() newBlog = new EventEmitter<Object>();
  errorMsg = '';
  constructor(private service: DataService) {
  }

  ngOnInit() {
  }
  getformdata(title: string, author: string, category: string, content: string, logo: File[]) {
    this.errorMsg = '';
    let data;
    const fileReader = new FileReader();
    fileReader.onload = (file) => {
      data = {
        title: title,
        category: category,
        author: author,
        logo: fileReader.result,
        ratings: 0,
        content: content,
        date: (new Date()).toDateString()
      };
      this.service.postData(data).subscribe(x => {
        console.log(x);
        this.newBlog.emit(x);
      });
    }
    if (logo[0]) {
      fileReader.readAsDataURL(logo[0]);
    }
    else if(title.trim() !== '' && category.trim() !== '' && author.trim() !== '' && content.trim() !== '') {
      this.errorMsg = '';
      data = {
        title: title,
        category: category,
        author: author,
        ratings: 0,
        content: content,
        date: (new Date()).toDateString()
      };
      this.service.postData(data).subscribe(x => {
        console.log(x);
        this.newBlog.emit(x);
      });
    }
  else {
      this.errorMsg = '*Please Fill All Values!!';
    }
  }
}
