import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newDest } from './newDest';
import { hotel } from '../hotel';
import { ApiServiceService } from '../services/APIS/api-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-new-itinerary',
  templateUrl: './new-itinerary.component.html',
  styleUrls: ['./new-itinerary.component.css']
})
export class NewItineraryComponent implements OnInit {
  user:any;
  src = '';
  dest: newDest[] = [];
  hotels: hotel[] = [];
  isNewDest = false;

  constructor(private router:Router,private apiSrv:ApiServiceService , private modal : NgbModal,private dataService : DataService){}
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    let lists = localStorage.getItem('list');
    if(lists){
      const arr:Array<newDest> = JSON.parse(lists);
      this.dest = arr;
    }
    if(!this.user){
      this.router.navigate([''])
    }
  }

  addNewDest(name:string,from:string,to:string){
    let destObj = new newDest(
      {
        'destName':name,
        'from':from,
        'to':to
      }
    );
    this.dest.push(destObj);
    localStorage.setItem('list',JSON.stringify(this.dest));
    this.isNewDest = false;
  }
  delDest(idx:number){
    this.dest.splice(idx,1);
    localStorage.setItem('list',JSON.stringify(this.dest));
  }
  async suggestHotels(cityName:any,hotelModal:any){
    const res = await this.apiSrv.getHotels(cityName);
    this.modal.open(hotelModal);
    this.hotels = Array.isArray(res) ? res: [];
    console.log(res);
    
  }
  async saveItinerary(){
    const user = localStorage.getItem('user');
    const res = await this.dataService.saveItinerary(this.user,this.dest);
    localStorage.removeItem('list');
    this.router.navigate(['']);
  }
}
