import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myStudent:any[]=[];

  constructor(private service:DataService){

  }

  ngOnInit(): void {
    this.service.GetStudentData().subscribe(
      (data)=>{
      this.myStudent = data.students;
      }
    );
  }
}
