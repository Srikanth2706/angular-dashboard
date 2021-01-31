import { Injectable } from '@angular/core';
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { Config } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData(){
    // let url = "https://ibmcep.cognitiveclass.ai/api/v1/query/load";
    // let url="https://bked.aieducator.com/StudentMentors/";
    let url="http://localhost:8000/fetchPIAPI"
    // const httpOptions = {
      // headers: { 'Authorization':'Token eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODI4MzE5Nzl9.hoX7CBeAKGbLk9_OOtgtiP3U8RgN8CmDCupcakd9CqE',  'Content-Type': 'application/json' },
      // params: {'query': '%7B%22dimensions%22%3A%5B%22UserProfile.name%22%2C%22User.email%22%2C%22User.dateJoined%22%2C%22User.lastLogin%22%5D%2C%22timezone%22%3A%22UTC%22%2C%22order%22%3A%5B%5D%2C%22filters%22%3A%5B%5D%2C%22timeDimensions%22%3A%5B%5D%7D'}
      // headers: { 'Authorization':'Token 7b0ac6585e0a0b75e0527c4d84ad80f61fdcb041',  'Content-Type': 'application/json' },
      
    // };
   const  body = {'id': [14,15]};
    
    return  this.http.post<any>(url,body );

  }



}


