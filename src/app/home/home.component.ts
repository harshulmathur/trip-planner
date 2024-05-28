import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router : Router){}
  user:any;
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
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
}
