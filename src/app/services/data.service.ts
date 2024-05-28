import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query, where } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore : Firestore) { }
  userRef = collection(this.firestore,'users');
  async createUser(name:string,email:string,password:string){
    const userSnap = await addDoc(collection(this.firestore,'users'),{
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
}
