import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getMeetingsByStudentIdURL, getStudentByIdURL, getStudentsListURL, getSubjectsListURL } from '../api'
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseBase } from '../models/response-base.model';
import { Meeting } from '../models/meeting.model';
import { Subject } from '../models/subject.model';
import { StudentBase } from '../models/student-base.model';
import { Student } from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  constructor(
    private http: HttpClient
  ) {
    this.getStudentsList();
  }

  studentsListSubject = new BehaviorSubject<StudentBase[]>([]);
  studentList = this.studentsListSubject.asObservable();

  getStudentsList(): void {
    this.http.get<ResponseBase<StudentBase[]>>(getStudentsListURL()).subscribe(res => {
      this.studentsListSubject.next(res.data)
    })
  }

  getMeetingsByStudentId(studentId: string): Observable<ResponseBase<Meeting[]>> {
    return this.http.get<ResponseBase<Meeting[]>>(getMeetingsByStudentIdURL(studentId));
  }

  getSubjectsList(): Observable<ResponseBase<Subject[]>> {
    return this.http.get<ResponseBase<Subject[]>>(getSubjectsListURL());
  }

  getStudentById(studentId: string): Observable<ResponseBase<Student>> {
    return this.http.get<ResponseBase<Student>>(getStudentByIdURL(studentId));
  }
}
