import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XlComponent } from './xl.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, sample } from 'rxjs';
import { XlService } from '../services/xl.service';

describe('XlComponent', () => {
  let component: XlComponent;
  let fixture: ComponentFixture<XlComponent>;
  let xlservie = jasmine.createSpyObj('XlService',['getData']);
  const sampleData = [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XlComponent ],
      imports:[HttpClientTestingModule],
      providers:[
        {provide:XlService, useValue:xlservie}
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(XlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('excel sheet',() => {
    let sampleSpy = xlservie.getData.and.returnValue(of(sampleData));
    component.excelData();
    expect(sampleSpy).toHaveBeenCalled();
  })
  it('excel sheet checking id value',() => {
    let sampleSpy = xlservie.getData.and.returnValue(of(sampleData));
    component.excelData();
    let id = component.worksheet.getRow(1).getCell(1).value;
    expect(id).toEqual('user id');
  })
  it('excel sheet checking body value',() => {
    let sampleSpy = xlservie.getData.and.returnValue(of(sampleData));
    component.excelData();
    let id = component.worksheet.getRow(3).getCell(4).value;
    expect(id).toEqual('est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla');
  })
});
