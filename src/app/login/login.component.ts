import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
DataService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public dataService:DataService){}
  async onSubmit(email:string,password:string){
    const res = await this.dataService.getUser(email);
    if(res && res['password']===password){
      alert("User Logged in");
    }else{
      alert("Invalid Credentials");
    }
     
  }
}
