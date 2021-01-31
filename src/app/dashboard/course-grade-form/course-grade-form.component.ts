import { Component, OnInit,ViewChild,Inject, Optional } from '@angular/core';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms' ;
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { MatTableDataSource,  } from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
// import {DialogBoxComponent} from 'src/app/dashboard/dialog-box/dialog-box.component';
import {CourseGradeDialogBoxComponent} from 'src/app/dashboard/course-grade-dialog-box/course-grade-dialog-box.component';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-course-grade-form',
  templateUrl: './course-grade-form.component.html',
  styleUrls: ['./course-grade-form.component.css']
})


export class CourseGradeFormComponent implements OnInit {

  
  // piform : FormGroup;
  PIData : any;
 
  displayedColumns: string[] = ['id','name','url','private_instance__id','query_param__id','query_param__params_value','Actions'];
  
  @ViewChild(MatTable,{static:false}) table !: MatTable<any>;
  @ViewChild(MatPaginator, {static: false}) paginator !: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort !: MatSort;

  constructor(private http: HttpClient, public dialog: MatDialog) {

  }

  openDialog(action:any,obj:any) {
    obj.action = action;
   let dialogRef = this.dialog.open(CourseGradeDialogBoxComponent, {
      height: '500px',
      width: '800px',
      data:obj
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result.event);
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }
      else if(result.event == 'Update'){
        // console.log(result)
        this.updateRowData(result.data);
      }
      else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj:any){
    
    console.log(row_obj)
    this.http.post<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/courseGradeCRUD', row_obj).subscribe(data => {
      alert(data['data'])
      console.log(data)
    });
    
  }
  updateRowData(row_obj:any){
    
    // console.log(row_obj,"UPDATE")
    this.http.patch<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/courseGradeCRUD', row_obj).subscribe(data => {
      alert(data['resp_data'])
      
    });
    
  }
  deleteRowData(row_obj:any){
    console.log(row_obj.id)
    this.http.request('delete', 'https://dashboard-cep.eu-gb.mybluemix.net/dashboard/courseGradeCRUD', { body: { 'id':row_obj.id}}).subscribe((resp:any) => {
     
      alert(resp['data']);
      
    });
  }

  

  ngOnInit(): void {
    this.http.get<any>('https://dashboard-cep.eu-gb.mybluemix.net/dashboard/courseGradeCRUD').subscribe(data => {
      
      console.log(data.resp_data)
      this.PIData = data.resp_data;
      this.PIData = new MatTableDataSource(data.resp_data);
      this.PIData.paginator = this.paginator;
      this.PIData.sort = this.sort; 
    });

  }





}