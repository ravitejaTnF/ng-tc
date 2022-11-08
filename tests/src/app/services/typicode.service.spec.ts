import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TypicodeService } from './typicode.service';

describe('TypicodeService', () => {
  let service: TypicodeService;
  let httpTestController:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(TypicodeService);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should check data returned from API',() => {
    let data = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"}];
    service.getPosts().subscribe();
    let reqUrl = "https://jsonplaceholder.typicode.com/posts";
    const req = httpTestController.expectOne(reqUrl);
    expect(req.request.responseType).toBe('json');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('GET');
    req.flush(data);
  })
  it('should check data is being posted successfully to the API',() => {
    let resbody = {"userId": 552,"id": 101,"title": "ravi","body": "teja"};
    service.sendPost(resbody).subscribe();
    let reqUrl = "https://jsonplaceholder.typicode.com/post";
    const req = httpTestController.expectOne(reqUrl);
    expect(req.request.responseType).toBe('json');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('POST');
    req.flush(resbody);
  })
});
