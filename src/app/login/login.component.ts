import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

DataService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public dataService:DataService,private router:Router){}
  async onSubmit(email:string,password:string){
    const res = await this.dataService.getUser(email);
    if(res && res['password']===password){
      localStorage.setItem('user',email);
      this.router.navigate(['']);
    }else{
      alert("Invalid Credentials");
    }
     
  }
}
