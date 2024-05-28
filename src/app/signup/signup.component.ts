import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
DataService
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public dataService:DataService){}
  onSubmit(name:string,email:string,password:string,confirmPassword:string){
    if(name==='' || email==='' || password==='' || confirmPassword===''){
      alert("Please Enter all the details");
    }else if(password!==confirmPassword){
      alert("Confirm Password does not match with the Password");
    }else{
      this.dataService.createUser(name,email,password);
    }
    
  }
}
