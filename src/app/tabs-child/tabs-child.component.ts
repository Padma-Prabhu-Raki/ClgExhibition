import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { CourseService } from '../course.service';
import { coursesInterface } from '../model-intrfc';

@Component({
  selector: 'app-tabs-child',
  templateUrl: './tabs-child.component.html',
  styleUrls: ['./tabs-child.component.css']
})
export class TabsChildComponent {

  constructor(private service:CourseService, private dialog:MatDialog){}

  @Input() courseDetails:any;

  editCourse(courseData:any){
    const updatedData = this.dialog.open(EditdialogComponent,{
      data : {
        ...courseData, 
      }
     });
    }
  }


