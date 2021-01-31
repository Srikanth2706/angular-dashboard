import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource,  } from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import {UsersService} from 'src/app/users.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-course-statistics',
  templateUrl: './course-statistics.component.html',
  styleUrls: ['./course-statistics.component.css']
})
export class CourseStatisticsComponent implements OnInit {

  pd : any;
  
  PIData:any;
 
 
  form =new FormGroup({
    name: new FormControl(),
  });
  
  
  displayedColumns: string[] = ['Course.displayName', 'CourseEnrollment.count',];
  

  @ViewChild(MatPaginator, {static: false}) paginator !: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort !: MatSort;

 

  course_submit(){
    console.log(this.form.value);
    const data_body =  this.form.value ;
    
    this.http.post<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/cecData', data_body).subscribe(resp => {
      
      this.PIData = resp.data;
      // console.log(resp.data);
      const res: any = resp.data;
      this.PIData = new MatTableDataSource(res);
      this.PIData.paginator = this.paginator;
      this.PIData.sort = this.sort; 
    });
  }
  
  constructor(private user:UsersService, private http: HttpClient){}
  
  public ngOnInit() {  
    
    this.http.get<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/forPICoursesUsersCount').subscribe(data => {
      this.pd =data.resp_data
      console.log(data.resp_data)
    });
  
  }


  

}
