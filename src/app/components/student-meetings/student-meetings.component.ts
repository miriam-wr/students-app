import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from 'src/app/models/meeting.model';
import { StudentBase } from 'src/app/models/student-base.model';
import { Subject } from 'src/app/models/subject.model';
import { MeetingsService } from 'src/app/services/meetings.service';

@Component({
  selector: 'app-student-meetings',
  templateUrl: './student-meetings.component.html',
  styleUrls: ['./student-meetings.component.scss']
})
export class StudentMeetingsComponent implements OnInit {

  constructor(
    private meetingsService: MeetingsService,
    private route: ActivatedRoute
  ) {
    this.meetings = [];
    this.subjectsList = [];
    this.studentsList = [];
    this.studentId = route.snapshot.paramMap.get('studentId') || ''
  }

  studentId: string;
  meetings: Meeting[];
  subjectsList: Subject[];
  studentsList: StudentBase[];
  displayedColumns: string[] = ['meetingId', 'meetingDate', 'subject', 'meetingDetails', 'nextMeetingDate'];

  getMeetingsByStudentId(): void {
    this.meetingsService.getMeetingsByStudentId(this.studentId).subscribe(data =>
      this.meetings = data.data
    );
  }

  getSubjectsList(): void {
    this.meetingsService.getSubjectsList().subscribe(data =>
      this.subjectsList = data.data
    );
  }

  getStudentsList(): void {
    this.meetingsService.studentList.subscribe(data =>
      this.studentsList = data
    );
  }

  ngOnInit(): void {
    this.getMeetingsByStudentId();
    this.getSubjectsList();
    this.getStudentsList();
  }

}
