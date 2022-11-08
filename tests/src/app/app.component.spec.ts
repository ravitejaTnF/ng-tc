import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

describe('AppComponent', () => {
  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  //let spyAuthService = jasmine.createSpyObj('AuthService',['authenticate','checkAuthentication']);
  let authService:AuthService;
  let demoSpyon = jasmine.createSpy('getData');
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[],
      providers:[
        //{provide:AuthService,useValue:spyAuthService}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'tests'`, () => {
    expect(component.title).toEqual('tests');
  });
  it('testing getSalarySlip()', () => {
    spyOn(authService,'checkAuthentication');
    let salary = component.getSalarySlip();
    //let salaryy = component.getSalarySlip();
    expect(salary).toEqual('Not authenticated');
    expect(authService.checkAuthentication).toHaveBeenCalledTimes(1);
  });
  it('auth2',() => {
    spyOn(authService,'auth2');
    component.callAuth2();
    expect(authService.auth2).toHaveBeenCalled();
  })
  it('check value',() => {
    let h1:HTMLElement = fixture.nativeElement.querySelector('h1');
    component.some(false);
    fixture.detectChanges();
    expect(h1.innerHTML).toEqual('not assigned');
  })
  it('checking instance of auth',() => {
    expect(authService instanceof AuthService).toBeTruthy();
  })
  it('jasmine.createSpy()',() => {
    demoSpyon();
    expect(demoSpyon).toBeTruthy();
    expect(demoSpyon).toHaveBeenCalled();
    expect(demoSpyon).toHaveBeenCalledTimes(1);
  })
});
