import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, } from '@angular/forms';
import { CourseService } from '../course.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent implements OnInit{

  constructor( private _formBuilder:FormBuilder, private service:CourseService,
              private dialog:MatDialog,
              @Inject(MAT_DIALOG_DATA) public data:any) {}

  formdata : any;

  ngOnInit() : void {

    this.formdata = new FormGroup( {
      name : new FormControl(this.data?.name, [Validators.required]),
      description : new FormControl(this.data?.description, [Validators.required]),
      category : new FormControl(this.data?.category, [Validators.required])
    })
  }

  cancel(){
    this.dialog.closeAll();
  }

  savedetails(courseData:any){
    this.service.editCourseData({
      ...this.data,
      ...courseData
    }).subscribe()

    this.dialog.closeAll();
    window.location.reload()
  }
  
}
