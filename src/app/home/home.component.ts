import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/APIS/api-service.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router : Router,private apiService:ApiServiceService,private dataService: DataService){}
  user:any;
  itnryList:any[] | undefined;
  async ngOnInit(): Promise<void> {
    this.user = localStorage.getItem('user');
    const res = await this.dataService.getItnrys(this.user);
    for(let i=0;i<res.length;i++){
      let itnry = res[i].data()['list'];
      this.itnryList?.push(itnry);  
      console.log(itnry);
          
    }
  }
  loginHandler(){
    this.router.navigate(['login']);
  }
  signupHandler(){
    this.router.navigate(['signup']);
  }
  logout(){
    localStorage.removeItem('user');
    this.ngOnInit();
  }
  onNew(){
    this.router.navigate(['create-new-itinerary'])
  }

  async getHotels(name : string){
    const res = await this.apiService.getHotels(name);
    console.log(res);
    
  }

}
