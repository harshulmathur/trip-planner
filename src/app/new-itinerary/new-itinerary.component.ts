import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-itinerary',
  templateUrl: './new-itinerary.component.html',
  styleUrls: ['./new-itinerary.component.css']
})
export class NewItineraryComponent implements OnInit {
  user:any;
  constructor(private router:Router){}
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    if(!this.user){
      this.router.navigate([''])
    }
  }

}
