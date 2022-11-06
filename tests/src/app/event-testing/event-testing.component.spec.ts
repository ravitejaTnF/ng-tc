import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTestingComponent } from './event-testing.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('EventTestingComponent', () => {
  let component: EventTestingComponent;
  let fixture: ComponentFixture<EventTestingComponent>;
  let de:DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTestingComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EventTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check the value of counter',() => {
    let h1 = de.query(By.css('h1'));
    let button = de.query(By.css('#btn'));
    de.triggerEventHandler('click',{});
    fixture.detectChanges();
    expect(component.count).toEqual(parseInt(h1.nativeElement.innerHTML));
  })
});
