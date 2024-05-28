import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newDest } from './newDest';
import { toArray } from 'rxjs';
@Component({
  selector: 'app-new-itinerary',
  templateUrl: './new-itinerary.component.html',
  styleUrls: ['./new-itinerary.component.css']
})
export class NewItineraryComponent implements OnInit {
  user:any;
  src = '';
  dest: newDest[] = [];
  isNewDest = false;
  constructor(private router:Router){}
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
  
}
