import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms' ;

import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-picourseapi',
  templateUrl: './picourseapi.component.html',
  styleUrls: ['./picourseapi.component.css']
})
export class PicourseapiComponent implements OnInit {

  PIList: any
  
  addPICourseAPI :FormGroup;
  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
    this.addPICourseAPI = formBuilder.group({
    
    pi_name: new FormControl(),
    
    base_url: new FormControl(),
    actual_url: new FormControl(),
    
  });
   }

  ngOnInit(): void {
    this.http.get<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/fetchPIAPI').subscribe(data => {
      this.PIList =data.resp_data
      console.log(data.resp_data)
    });
  }
postData(){
  const body =  this.addPICourseAPI.value ;
  console.log(this.addPICourseAPI.value)
  this.http.post<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/addPICoursesAPI', body).subscribe(data => {
  console.log(data.data)  
  alert(data.data)
  });
     
  
  // console.log(this.addpi.value.key);
}


}
