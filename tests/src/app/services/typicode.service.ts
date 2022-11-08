import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  constructor(private http:HttpClient) { }

  url = "https://jsonplaceholder.typicode.com";

  getPosts(){
    return this.http.get<any>(this.url+'/posts');
  }

  sendPost(arg:any){
    return this.http.post<any>("https://jsonplaceholder.typicode.com/post",arg);
  }
}
