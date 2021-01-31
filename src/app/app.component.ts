import { Component, ViewChild, OnInit,AfterViewInit } from '@angular/core';
import { MatTableDataSource,  } from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import {UsersService} from './users.service'
// import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  // displayedColumns: string[] = ['Name', 'Email', 'Date Joined', 'Last Login'];
  
  // tbdata:any;
  // @ViewChild(MatPaginator) paginator !: MatPaginator;
  // @ViewChild(MatSort) sort !: MatSort;

  
  constructor(private user:UsersService){}
  
  ngOnInit() {  
    
  
    // this.user.getData().subscribe(resp => {
    // // console.log(resp)
    // const res: any = resp.data;
    // this.tbdata = new MatTableDataSource(res);
    // this.tbdata.paginator = this.paginator;
    // this.tbdata.sort = this.sort;

  // });

  
  }

  
  
  
}
    
// export interface Element {
//   name: String;
//   email: String;
//   dateJoined: String;
//   lastLogin: String;

// }





// displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
//   @ViewChild(MatPaginator, {static: true}) paginator !: MatPaginator;
//   @ViewChild(MatSort,{static: true}) sort !: MatSort;

//   ngOnInit() {
    
    
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }
// /* Static data */ 
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 15, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];