import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coursesInterface } from './model-intrfc';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: coursesInterface[] = [];

  courseData_URL = 'http://localhost:3000/courses';

  constructor(private http:HttpClient) { }

  getCourseDetails(){
    this.http.get(`${this.courseData_URL}`).subscribe((coursedata:any) => 
    this.courses = coursedata)
  }

  getCourseData(){
    return this.http.get(`${this.courseData_URL}`)
  }

  editCourseData(data:any): Observable<any>{
    return this.http.put(`${this.courseData_URL}/${data.id}`,data)
  }
}
