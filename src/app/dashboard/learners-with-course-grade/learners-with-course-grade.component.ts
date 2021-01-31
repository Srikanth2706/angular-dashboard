import { Component, ViewChild, OnInit,AfterViewInit } from '@angular/core';
import { MatTableDataSource,  } from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import {UsersService} from 'src/app/users.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-learners-with-course-grade',
  templateUrl: './learners-with-course-grade.component.html',
  styleUrls: ['./learners-with-course-grade.component.css']
})
export class LearnersWithCourseGradeComponent implements OnInit {

  PIData: any ;
  PIList:any;

  form = new FormGroup({
    pi_name: new FormControl()
    });
  displayedColumns: string[] = [ 'User.email', 'Course.displayName', 'CourseGrade.percentGrade'];
 
 
  @ViewChild(MatPaginator, {static: false}) paginator !: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort !: MatSort;




  submit(){
    const body =  this.form.value ;
    console.log(this.form.value)
    this.http.post<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/courseGrade', body).subscribe(resp => {
      
      this.PIData = resp.data;
      // console.log(resp.data);
      const res: any = resp.data;
      this.PIData = new MatTableDataSource(res);
      this.PIData.paginator = this.paginator;
      this.PIData.sort = this.sort; 
    });

  
  }
  constructor( private http: HttpClient) { }

  public doFilter = (value: string) => {
    this.PIData.filter = value.trim().toLocaleLowerCase();
  }
  ngOnInit(): void {
    this.http.get<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/courseGrade').subscribe(data => {
      this.PIList =data.data
      console.log(data.data)
    });
  }

}
