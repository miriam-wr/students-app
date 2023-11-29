import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentBase } from 'src/app/models/student-base.model';
import { Student } from 'src/app/models/student.model';
import { MeetingsService } from 'src/app/services/meetings.service';
import { SearchByEnum } from 'src/app/enums/search-by.enum';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {

  constructor(
    private meetingsService: MeetingsService,
    private router: Router,
  ) {
    this.studentsList = [];
    this.student = null;
    this.searchByStudentId = new FormControl(null, [Validators.pattern(/^\d{9}$/)]);
    this.searchBy = new FormControl();
    this.SearchByEnum = SearchByEnum
  }

  SearchByEnum: typeof SearchByEnum;
  studentsList: StudentBase[];
  student: Student | null;
  searchByStudentId: FormControl;
  searchBy: FormControl;


  getStudentsList(): void {
    this.meetingsService.studentList.subscribe(data =>
      this.studentsList = data
    );
  }

  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudent(studentId: string): void {
    this.meetingsService.getStudentById(studentId).subscribe(data =>
      this.student = data.data
    );
  }

  handleSearchById(): void {
    if (this.searchByStudentId.value) {
      this.getStudent(this.searchByStudentId.value)
    }
  }

  handleShowMeetings(): void {
    this.router.navigate([`./student-meetings/${this.student?.studentId}`])
  }

  clear(): void {
    this.student = null;
    this.searchByStudentId.setValue(null);
  }

}
