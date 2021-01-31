import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms' ;
// import {UsersService} from 'src/app/users.service';
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-course-enrollment-count',
  templateUrl: './course-enrollment-count.component.html',
  styleUrls: ['./course-enrollment-count.component.css']
})
export class CourseEnrollmentCountComponent implements OnInit {

  pd: any;
  PIList: any;
  
  CEC :FormGroup;
  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
    this.CEC = formBuilder.group({
    
    name: new FormControl(),
    url: new FormControl({value: "/api/v1/query/load", disabled: true}),
    query_param: new FormControl(),
    private_instance: new FormControl(),
    
    
  });
   }

  ngOnInit(): void {
    this.http.get<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/fetchPIAPI').subscribe(data => {
      this.PIList =data.resp_data
      // console.log(data.resp_data)
    });

    this.http.get<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/queryparams').subscribe(data => {
      this.pd =data.resp_data
      // console.log(data.resp_data)
    });
  }
postData(){
  const body =  this.CEC.getRawValue() ;
  // console.log(this.CEC.value)
  this.http.post<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/forPICoursesUsersCount', body).subscribe(data => {
  // console.log(data.data)  
  alert(data.data)
  });
     
  
  // console.log(this.addpi.value.key);
}

}
