import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource,  } from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
// import {UsersService} from 'src/app/users.service';
// import { FormGroup, FormControl, Validators} from '@angular/forms';
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-instance-course-user',
  templateUrl: './instance-course-user.component.html',
  styleUrls: ['./instance-course-user.component.css']
})
export class InstanceCourseUserComponent implements OnInit {

  PIData:any;

  displayedColumns: string[] = ['private_instance', 'courses_count','users_count',];
  

  @ViewChild(MatPaginator, {static: false}) paginator !: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort !: MatSort;

 

 
  
  constructor( private http: HttpClient){}
  
  public ngOnInit() {  
    
    this.http.get<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/courseAndUsersCount').subscribe(resp => {
      this.PIData =resp.data
      // console.log(data.resp_data)
      this.PIData = new MatTableDataSource(resp.data);
      this.PIData.paginator = this.paginator;
      this.PIData.sort = this.sort; 
    });
  
  }


  
}
