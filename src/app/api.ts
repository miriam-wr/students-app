// after server side development - the BASE_URL will contain the server url.
const BASE_URL = '/assets/jsons';

export const getMeetingsByStudentIdURL = (studentId: string): string => {
    // after server side development - the url will be:
    // `${BASE_URL}/GetMeetingsByStudentId/${studentId}`
    return `${BASE_URL}/get-meetings-by-student-id.json`;
}

export const getSubjectsListURL = (): string => {
    // after server side development - the url will be:
    // `${BASE_URL}/GetSubjectsList`
    return `${BASE_URL}/get-subjects-list.json`;
}

export const getStudentsListURL = (): string => {
    // after server side development - the url will be:
    // `${BASE_URL}/GetStudentsList`
    return `${BASE_URL}/get-students-list.json`;
}

export const getStudentByIdURL = (studentId: string): string => {
    // after server side development - the url will be:
    // `${BASE_URL}/GetStudentById/${studentId}`
    return `${BASE_URL}/get-student-by-id.json`;
}
