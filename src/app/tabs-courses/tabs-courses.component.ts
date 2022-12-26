import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event, NavigationStart, Router } from '@angular/router';
import { Observable, of, map, filter, takeUntil, Subject, shareReplay } from 'rxjs';
import { CourseService } from '../course.service';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { coursesInterface } from '../model-intrfc';

@Component({
  selector: 'app-tabs-courses',
  templateUrl: './tabs-courses.component.html',
  styleUrls: ['./tabs-courses.component.css']
})
export class TabsCoursesComponent implements OnInit{

  courseDataforFresher : Observable<coursesInterface[]>=of([])
  // courseDataforFresher : any;

  courseDataforAdvanced : Observable<coursesInterface[]>=of([]);

  courses : any;

  constructor(private service:CourseService, private dialog:MatDialog, private route: Router,
              // @Inject(MAT_DIALOG_DATA) public data:any
              ){ }

  ngOnInit(): void {
    
    this.courses = this.service.getCourseData().pipe(shareReplay())

    this.courseDataforFresher = this.courses.pipe(map((coursedata:any) => {
      return coursedata.filter((courseforFresher:any) => courseforFresher.category === 'Freshers')
    }))
    
    this.courseDataforAdvanced = this.courses.pipe(map((coursedata1:any)=> {
      return coursedata1.filter((courseforAdvanced:any) => courseforAdvanced.category === 'Advanced')
    }))

    // this.courseDataforFresher = this.service.getCourseData().pipe(map((courseDetails:any) => {
    //   return courseDetails.filter((courseforFresher:any) => courseforFresher.category === 'Freshers')
    // }))

    // this.courseDataforAdvanced = this.service.getCourseData().pipe(map((courseDetails:any) => {
    //   return courseDetails.filter((courseforAdvanced:any) => courseforAdvanced.category === 'Advanced')
    // }))

  }

  
//   edit(courseData:any){
//    this.dialog.open(EditdialogComponent,{
//     data : {
//       ...courseData,
//     }
//    });
//   }
}
