import { Component, ViewChild, OnInit,AfterViewInit } from '@angular/core';
import { MatTableDataSource,  } from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import {UsersService} from 'src/app/users.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-piapi',
  templateUrl: './piapi.component.html',
  styleUrls: ['./piapi.component.css']
})
export class PiapiComponent implements OnInit {

  
  PIList: any ;
  PIData:any;
  res: any;
  form = new FormGroup({
  pi_name: new FormControl()
  });
 
 
  displayedColumns: string[] = ['UserProfile.name', 'User.email', 'User.dateJoined', 'User.lastLogin'];
 
 
  @ViewChild(MatPaginator, {static: false}) paginator !: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort !: MatSort;




  submit(){
    const body =  this.form.value ;
    console.log(this.form.value)
    this.http.post<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/headerDropDown', body).subscribe(resp => {
      
      this.PIData = resp.data;
      // console.log(resp.data);
      const res: any = resp.data;
      this.PIData = new MatTableDataSource(res);
      this.PIData.paginator = this.paginator;
      this.PIData.sort = this.sort; 
    });

  
  }



  constructor( private http: HttpClient){}
  public doFilter = (value: string) => {
    this.PIData.filter = value.trim().toLocaleLowerCase();
  }
  
  public ngOnInit() {  
    
    
    this.http.get<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/headerDropDown').subscribe(data => {
      this.PIList =data.resp_data
      // console.log(data.resp_data)
    });

}
}