import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TypicodeComponent } from './typicode/typicode.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tests';
  value = '';
  constructor(private service:AuthService){
    
  }
  ngOnInit(){
    this.service.authenticate();
  }

  getSalarySlip(){
    if(this.service.checkAuthentication()){
      return "Salary Slip";
    }
    return "Not authenticated";
  }
  callAuth2(){
    this.service.auth2();
  }

  some(val:boolean){
    if(val){
      this.value = 'assigned';
    }else{
      this.value = 'not assigned';
    }
  }
}
