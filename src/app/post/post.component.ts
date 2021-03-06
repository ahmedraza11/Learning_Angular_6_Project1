import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    )
  }

}
