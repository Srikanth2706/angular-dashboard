import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiapiComponent } from './piapi/piapi.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AddapiformComponent } from './addapiform/addapiform.component';
import { PiformComponent } from './piform/piform.component';
import { CourseComponent } from './course/course.component';
import { PicourseapiComponent } from './picourseapi/picourseapi.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { CourseEnrollmentCountComponent } from './course-enrollment-count/course-enrollment-count.component';
import { CourseStatisticsComponent } from './course-statistics/course-statistics.component';
import { HeaderComponent } from 'src/app/common/header/header.component';


import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatIconModule } from '@angular/material/icon';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import { InstanceCourseUserComponent } from './instance-course-user/instance-course-user.component';
import { LearnersWithCourseGradeComponent } from './learners-with-course-grade/learners-with-course-grade.component';
import { CourseGradeFormComponent } from './course-grade-form/course-grade-form.component';
import { CourseGradeDialogBoxComponent } from './course-grade-dialog-box/course-grade-dialog-box.component';


@NgModule({
  declarations: [PiapiComponent, AddapiformComponent, PiformComponent, CourseComponent, 
    PicourseapiComponent, QueryParamsComponent, 
    CourseEnrollmentCountComponent, CourseStatisticsComponent, 
    HeaderComponent, DialogBoxComponent, 
    InstanceCourseUserComponent, LearnersWithCourseGradeComponent, 
    CourseGradeFormComponent, CourseGradeDialogBoxComponent,],
    
  imports: [
    CommonModule,
    AngularMaterialModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    // MatDatepickerModule,  
    // MatNativeDateModule,


   
  ]
})
export class DashboardModule { }
