import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TypicodeComponent } from './typicode.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { TypicodeService } from '../services/typicode.service';
describe('TypicodeComponent', () => {
  let component: TypicodeComponent;
  let fixture: ComponentFixture<TypicodeComponent>;
  let spyService = jasmine.createSpyObj('TypicodeService',['getPosts']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypicodeComponent ],
      imports:[HttpClientTestingModule],
      providers:[
        {provide:TypicodeService,useValue:spyService}
      ],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TypicodeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking the data returned from API',() =>{
    let sampleData = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"}];
    let spySampleData = spyService.getPosts.and.returnValue(of(sampleData));
    component.getposts();
    //fixture.detectChanges();
    expect(spySampleData).toHaveBeenCalled();
  })
});
