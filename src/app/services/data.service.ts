import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query, where } from '@angular/fire/firestore';
import { newDest } from '../new-itinerary/newDest';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore : Firestore) { }
  userRef = collection(this.firestore,'users');
  async createUser(name:string,email:string,password:string){
    const userSnap = await addDoc(this.userRef,{
      name:name,
      email:email,
      password: password
    });
    
  }
  async getUser(email:string){
    const qry = query(this.userRef,where('email','==',email));
    const userSnap = await getDocs(qry);
    if(userSnap.docs.length==0){
      return null;
    }else{
      return userSnap.docs[0].data();
    }
  }
  //function to save itinerary to the databse
  //start
  itnryRef = collection(this.firestore,'itineraries');
  async saveItinerary(user:string,itnry:newDest[]){
    return await addDoc(this.itnryRef,{
      user : user,
      list : JSON.parse(JSON.stringify(itnry))});
  }
  //end

  //function to fetch the itineries for a user
  //user
  async getItnrys(user:string){
    const qry = query(this.itnryRef,where('user','==',user));
    const itnrySnap = await getDocs(qry);
    return itnrySnap.docs;
  }
  //end
}
