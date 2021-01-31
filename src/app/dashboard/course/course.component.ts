import { Component,ViewChild, OnInit, } from '@angular/core';
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { MatTableDataSource,  } from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  course_data: any;
  PIList: any;
  form = new FormGroup({
    pi_name: new FormControl()
    });
    
  displayedColumns: string[] = ["Name","Number","Org","Start","End","Effort"];
  
  
  @ViewChild(MatPaginator, {static: false}) paginator !: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort !: MatSort;

  submit(){
    const body =  this.form.value ;
   
    this.http.post<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/coursePIDropDown', body).subscribe(resp => {
      console.log(resp.data)
      this.course_data = resp.data;
      const res: any = resp.data
      this.course_data = new MatTableDataSource(res);
      this.course_data.paginator = this.paginator;
      this.course_data.sort = this.sort; 
    });
  
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/coursePIDropDown').subscribe(data => {
      this.PIList =data.resp_data
      
    });
  }

}
