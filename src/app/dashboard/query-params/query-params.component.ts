import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms' ;
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css']
})
export class QueryParamsComponent implements OnInit {

  query_params_form : FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
    this.query_params_form = formBuilder.group({
    
      name: new FormControl(),
      params_key:new FormControl(),
      params_value: new FormControl(),
      
    });
   }

  ngOnInit(): void {
  }
  postData(){
    const body =  this.query_params_form.getRawValue() ;
    this.http.post<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/queryparams', body).subscribe(data => {
      alert(data['data'])
      // console.log(data)
    });
          
    // console.log(this.addpi.value.key);
  }

}
