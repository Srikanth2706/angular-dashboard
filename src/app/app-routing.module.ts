import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PiapiComponent } from './dashboard/piapi/piapi.component'
import {AddapiformComponent } from './dashboard/addapiform/addapiform.component'
import {PiformComponent} from './dashboard/piform/piform.component'
import {CourseComponent} from './dashboard/course/course.component'
import {PicourseapiComponent} from './dashboard/picourseapi/picourseapi.component'
import {QueryParamsComponent} from './dashboard/query-params/query-params.component'
import {CourseEnrollmentCountComponent} from './dashboard/course-enrollment-count/course-enrollment-count.component'
import {CourseStatisticsComponent} from './dashboard/course-statistics/course-statistics.component'
import {InstanceCourseUserComponent} from './dashboard/instance-course-user/instance-course-user.component'
import {CourseGradeFormComponent} from './dashboard/course-grade-form/course-grade-form.component'
import {LearnersWithCourseGradeComponent} from './dashboard/learners-with-course-grade/learners-with-course-grade.component'

const routes: Routes = [
  { path: 'user', component: PiapiComponent },
  { path: 'piapi', component: AddapiformComponent },
  { path: 'pi', component: PiformComponent },
  { path: 'courseapi',component: PicourseapiComponent },
  { path: 'course', component: CourseComponent},
  { path: 'queryparams', component: QueryParamsComponent},
  { path: 'cec', component: CourseEnrollmentCountComponent},
  { path: 'coursestatistics',component: CourseStatisticsComponent},
  { path: 'icu',component:InstanceCourseUserComponent },
  { path: '',component:InstanceCourseUserComponent },


  { path: 'coursegradeform',component: CourseGradeFormComponent},
  { path: 'userscoursegrade',component:LearnersWithCourseGradeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
