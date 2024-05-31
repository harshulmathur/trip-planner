import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import axios from 'axios';
import { hotel } from 'src/app/hotel';
import { newDest } from 'src/app/new-itinerary/newDest';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor() { }
  
  

  //function t fetch the ID of the city
  //start
  async getCityId(cityName:string){
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/static/cities',
      params: {
        page: '0',
        name: cityName
      },
      headers: {
        'x-rapidapi-key': '6ada49ce4amsh5b64d734c776ebep1ac5d4jsn2fcac2633855',
        'x-rapidapi-host': 'booking-com.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      const cities = response.data['result'];
      let id=0;
      let mxHtl = 0;
      for(let i=0;i<cities.length;i++){
        if(cities[i]['nr_hotels'] > mxHtl){
          mxHtl = cities[i]['nr_hotels'];
          id = cities[i]['city_id'];
        }
      }
      return id;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  //end

  //functions to fetch hotels in the region
  //start
  async getHotels(cityName:string){
    let id = await this.getCityId(cityName);
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/static/hotels',
      params: {
        page: '0',
        city_id: id
      },
      headers: {
        'x-rapidapi-key': '6ada49ce4amsh5b64d734c776ebep1ac5d4jsn2fcac2633855',
        'x-rapidapi-host': 'booking-com.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      const hotelsArray = response.data['result'];
      let hotels = [];
      for(let i=0;i<hotelsArray.length && i<5;i++){
        hotels.push(new hotel(hotelsArray[i]));
      }      
      return hotels;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  //end
}
