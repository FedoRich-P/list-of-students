import {SearchFilters, StudentType} from "../types/types.ts";

export const filterStudents = (students: StudentType[], filters: SearchFilters) => {
    const { name, lastname, patronymic, faculty, birthdate } = filters;
    return students.filter((student) => (
        (!name || student.name.toLowerCase().includes(name.toLowerCase())) &&
        (!lastname || student.lastname.toLowerCase().includes(lastname.toLowerCase())) &&
        (!patronymic || student.patronymic.toLowerCase().includes(patronymic.toLowerCase())) &&
        (!faculty || student.faculty.toLowerCase().includes(faculty.toLowerCase())) &&
        (!birthdate || student.birthdate.toString().toLowerCase().includes(birthdate.toString().toLowerCase()))
    ));
};

export const getStudentStatus = (yearOfEnter: number): 'Studying' | 'Graduated' => {
    const currentYear = new Date().getFullYear();
    const yearsOfStudy = 5;

    if (yearOfEnter + yearsOfStudy > currentYear) {
        return 'Studying';
    } else {
        return 'Graduated';
    }
};

export const calculateFacultyCounts = (students: StudentType[]) => {
    const totalCounts: { [key: string]: number } = {};
    const studyingCounts: { [key: string]: number } = {};
    const graduatedCounts: { [key: string]: number } = {};

    students.forEach(student => {
        const faculty = student.faculty;

        totalCounts[faculty] = (totalCounts[faculty] || 0) + 1;

        const status = getStudentStatus(student.yearOfEnter);
        if (status === 'Studying') {
            studyingCounts[faculty] = (studyingCounts[faculty] || 0) + 1;
        } else if (status === 'Graduated') {
            graduatedCounts[faculty] = (graduatedCounts[faculty] || 0) + 1;
        }
    });

    return { totalCounts, studyingCounts, graduatedCounts };
};