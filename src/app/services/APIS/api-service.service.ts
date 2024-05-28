import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor() { }
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
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
