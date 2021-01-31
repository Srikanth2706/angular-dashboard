import { Component, OnInit } from '@angular/core';
//dialog-box.component.ts
import { Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {FormGroup, FormControl,FormBuilder} from '@angular/forms' ;
import  {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { MatTableDataSource,  } from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';

import { MatDialog } from '@angular/material/dialog';

export interface UsersData {
  id:any; pi_name:any; instance_url:any;short_name:any;developer_key:any;Actions:any;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  piform : FormGroup;
  action:string;
  local_data:any;

  constructor(private formBuilder: FormBuilder,private http: HttpClient, public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
      
    
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.piform = formBuilder.group({
    
      pi_name: new FormControl(),
      short_name:new FormControl(),
      instance_url: new FormControl(),
      
      developer_key: new FormControl(),
     
    });
  }


  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  
  

}
