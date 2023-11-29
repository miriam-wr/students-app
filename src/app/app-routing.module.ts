import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { StudentMeetingsComponent } from './components/student-meetings/student-meetings.component';

const routes: Routes = [
  { path: '', redirectTo: 'search-student', pathMatch: 'full' },
  { path: 'search-student', component: SearchStudentComponent },
  { path: 'student-meetings/:studentId', component: StudentMeetingsComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
