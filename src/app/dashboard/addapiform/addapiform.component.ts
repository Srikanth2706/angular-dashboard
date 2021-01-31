import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms' ;
// import {UsersService} from 'src/app/users.service';
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-addapiform',
  templateUrl: './addapiform.component.html',
  styleUrls: ['./addapiform.component.css']
})
export class AddapiformComponent implements OnInit {
  PIList: any
  
  addpi :FormGroup;
  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
    this.addpi = formBuilder.group({
    
    pi_name: new FormControl(),
    url: new FormControl({value: "/api/v1/query/load", disabled: true}),
    params_key: new FormControl({value: "query", disabled: true}),
    params_value: new FormControl({value: "%7B%22dimensions%22%3A%5B%22UserProfile.name%22%2C%22User.email%22%2C%22User.dateJoined%22%2C%22User.lastLogin%22%5D%2C%22timezone%22%3A%22UTC%22%2C%22order%22%3A%5B%5D%2C%22filters%22%3A%5B%5D%2C%22timeDimensions%22%3A%5B%5D%7D", disabled: true}),
    
  });
   }

  ngOnInit(): void {
    this.http.get<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/fetchPIAPI').subscribe(data => {
      this.PIList =data.resp_data
      console.log(data.resp_data)
    });
  }
postData(){
  const body =  this.addpi.getRawValue();
  console.log(this.addpi.getRawValue());
  this.http.post<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/addPIAPI', body).subscribe(data => {
  console.log(data.data)  
  alert(data.data)
  });
     
  
  // console.log(this.addpi.value.key);
}



}
