import { TypicodeService } from './../services/typicode.service';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-typicode',
  templateUrl: './typicode.component.html',
  styleUrls: ['./typicode.component.css'],
})
export class TypicodeComponent implements OnInit {

  constructor(private typicodeService:TypicodeService) { }

  ngOnInit(): void {
    this.getposts();
  }

  getposts(){
    this.typicodeService.getPosts().subscribe(result => {
      console.log(result);
    })
  }

  addPost(){
    let post = {userId:552,id:52,title:'ravi',body:'teja'};
    this.typicodeService.sendPost(post).subscribe(result => {
      console.log(result);
    })
  }

}
