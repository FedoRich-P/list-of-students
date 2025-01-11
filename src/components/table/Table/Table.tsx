import {useState} from 'react';
import {Box, Table as TableFromUi, TableBody as TableBodyFromUi, TableContainer, TableHead} from '@mui/material';
import {sortArray} from "../../../utils/sortUtils.ts";
import {SearchBar} from "../../SearchBar/SearchBar.tsx";
import {TableBody} from "../TableBody/TableBody.tsx";
import {TableFooter} from "../TableFooter/TableFooter.tsx";
import {TableHeader} from "../TableHeader/TableHeader.tsx";
import {StudentTableProps} from "../../../types/types.ts";
import {ShowAllButton, ShowSomeButton, StyledButtonContainer} from "./Table.styles.ts";

export const Table = ({ students, sortBy, sortDirection, onSort }: StudentTableProps) => {
    const [filters, setFilters] = useState({
        name: "",
        lastname: "",
        patronymic: "",
        faculty: "",
        birthdate: "",
    });

    const [visibleStudentsCount, setVisibleStudentsCount] = useState(15);
    const [containerHeight, setContainerHeight] = useState('500px');

    const filteredStudents = students.filter((student) => {
        const { name, lastname, patronymic, faculty, birthdate } = filters;
        return (
            student.name.toLowerCase().includes(name.toLowerCase()) &&
            student.lastname.toLowerCase().includes(lastname.toLowerCase()) &&
            student.patronymic.toLowerCase().includes(patronymic.toLowerCase()) &&
            student.faculty.toLowerCase().includes(faculty.toLowerCase()) &&
            student.birthdate.toString().toLowerCase().includes(birthdate.toLowerCase())
        );
    });

    const sortedStudents = sortArray(filteredStudents, sortBy, sortDirection);

    const studentsToShow = sortedStudents.slice(0, visibleStudentsCount);
    const currentYear = new Date().getFullYear();
    const getStudentStatus = (yearOfEnter: number): 'Studying' | 'Graduated' => {
        const yearsOfStudy = 5;

        if (yearOfEnter + yearsOfStudy > currentYear) {
            return 'Studying';
        } else {
            return 'Graduated';
        }
    };

    const totalCounts: { [key: string]: number } = {};
    const studyingCounts: { [key: string]: number } = {};
    const graduatedCounts: { [key: string]: number } = {};

    const facultyCounts = Array.from(new Set(students.map(student => student.faculty)))
        .map(faculty => ({
            name: faculty,
            total: 0,
            studying: 0,
            graduated: 0
        }));

    filteredStudents.forEach(student => {
        const faculty = student.faculty;

        totalCounts[faculty] = (totalCounts[faculty] || 0) + 1;

        const status = getStudentStatus(student.yearOfEnter);
        if (status === 'Studying') {
            studyingCounts[faculty] = (studyingCounts[faculty] || 0) + 1;
        } else if (status === 'Graduated') {
            graduatedCounts[faculty] = (graduatedCounts[faculty] || 0) + 1;
        }
    });

    const handleSearch = (values: any) => {
        setFilters(values);
    };

    // Функция для показа ещё 10 студентов
    const showMoreStudents = () => {
        setVisibleStudentsCount((prev) => prev + 10);
        setContainerHeight((prevHeight) => `${parseInt(prevHeight) + 200}px`);
    };

    // Функция для показа всех студентов
    const showAllStudents = () => {
        setVisibleStudentsCount(sortedStudents.length);
        setContainerHeight('auto');
    };

    return (
        <Box>
            <SearchBar onSearch={handleSearch} />

            <TableContainer
                sx={{
                    marginBottom: '20px',
                    boxShadow: 3,
                    width: '100%',
                    height: containerHeight,
                    overflowY: 'auto',
                }}
            >
                <TableFromUi sx={{ minWidth: 650 }}>
                    <TableHead sx={{ position: 'sticky', top: 0, backgroundColor: 'background.paper', zIndex: 1 }}>
                        <TableHeader sortBy={sortBy} sortDirection={sortDirection} onSort={onSort} />
                    </TableHead>
                    <TableBodyFromUi>
                        <TableBody students={studentsToShow} />
                    </TableBodyFromUi>
                </TableFromUi>
            </TableContainer>

            <StyledButtonContainer >
                {visibleStudentsCount < sortedStudents.length && (
                    <>
                        <ShowSomeButton variant="contained" onClick={showMoreStudents}>
                            Показать ещё 10
                        </ShowSomeButton>
                        <ShowAllButton variant="outlined" onClick={showAllStudents}>
                            Показать всех
                        </ShowAllButton>
                    </>
                )}
            </StyledButtonContainer>

            <TableFooter
                facultyCounts={facultyCounts}
                studyingCounts={studyingCounts}
                graduatedCounts={graduatedCounts}
                totalCounts={totalCounts}
            />
        </Box>
    );
};

// import { useState } from 'react';
// import { Box, Table as TableFromUi, TableContainer, TableHead, TableBody as TableBodyFromUi, Button } from '@mui/material';
// import { sortArray } from "../../../utils/sortUtils.ts";
// import { SearchBar } from "../../SearchBar/SearchBar.tsx";
// import { TableBody } from "../TableBody/TableBody.tsx";
// import { TableFooter } from "../TableFooter/TableFooter.tsx";
// import { TableHeader } from "../TableHeader/TableHeader.tsx";
// import { StudentTableProps } from "../../../types/types.ts";
//
// export const Table = ({ students, sortBy, sortDirection, onSort }: StudentTableProps) => {
//     const [filters, setFilters] = useState({
//         name: "",
//         lastname: "",
//         patronymic: "",
//         faculty: "",
//         birthdate: "",
//     });
//
//     const [visibleStudentsCount, setVisibleStudentsCount] = useState(15); // По умолчанию показываем 15 студентов
//
//     const filteredStudents = students.filter((student) => {
//         const { name, lastname, patronymic, faculty, birthdate } = filters;
//         return (
//             student.name.toLowerCase().includes(name.toLowerCase()) &&
//             student.lastname.toLowerCase().includes(lastname.toLowerCase()) &&
//             student.patronymic.toLowerCase().includes(patronymic.toLowerCase()) &&
//             student.faculty.toLowerCase().includes(faculty.toLowerCase()) &&
//             student.birthdate.toString().toLowerCase().includes(birthdate.toLowerCase())
//         );
//     });
//
//     const sortedStudents = sortArray(filteredStudents, sortBy, sortDirection);
//
//     // Ограничиваем количество отображаемых студентов
//     const studentsToShow = sortedStudents.slice(0, visibleStudentsCount);
//
//     // Динамически вычисляем текущий год
//     const currentYear = new Date().getFullYear();
//
//     const getStudentStatus = (yearOfEnter: number): 'Studying' | 'Graduated' => {
//         const yearsOfStudy = 5;
//
//         if (yearOfEnter + yearsOfStudy > currentYear) {
//             return 'Studying';
//         } else {
//             return 'Graduated';
//         }
//     };
//
//     const totalCounts: { [key: string]: number } = {};
//     const studyingCounts: { [key: string]: number } = {};
//     const graduatedCounts: { [key: string]: number } = {};
//
//     const facultyCounts = Array.from(new Set(students.map(student => student.faculty)))
//         .map(faculty => ({
//             name: faculty,
//             total: 0,
//             studying: 0,
//             graduated: 0
//         }));
//
//     filteredStudents.forEach(student => {
//         const faculty = student.faculty;
//
//         totalCounts[faculty] = (totalCounts[faculty] || 0) + 1;
//
//         const status = getStudentStatus(student.yearOfEnter);
//         if (status === 'Studying') {
//             studyingCounts[faculty] = (studyingCounts[faculty] || 0) + 1;
//         } else if (status === 'Graduated') {
//             graduatedCounts[faculty] = (graduatedCounts[faculty] || 0) + 1;
//         }
//     });
//
//     const handleSearch = (values: any) => {
//         setFilters(values);
//     };
//
//     // Функция для показа ещё 10 студентов
//     const showMoreStudents = () => {
//         setVisibleStudentsCount((prev) => prev + 10);
//     };
//
//     // Функция для показа всех студентов
//     const showAllStudents = () => {
//         setVisibleStudentsCount(sortedStudents.length);
//     };
//
//     return (
//         <Box>
//             <SearchBar onSearch={handleSearch} />
//
//             <TableContainer sx={{ marginBottom: '20px', boxShadow: 3, width: '100%' }}>
//                 <TableFromUi sx={{ minWidth: 650 }}>
//                     <TableHead>
//                         <TableHeader sortBy={sortBy} sortDirection={sortDirection} onSort={onSort} />
//                     </TableHead>
//                     <TableBodyFromUi>
//                         <TableBody students={studentsToShow} />
//                     </TableBodyFromUi>
//                 </TableFromUi>
//             </TableContainer>
//
//             {/* Кнопки для управления отображением студентов */}
//             <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginBottom: '20px' }}>
//                 {visibleStudentsCount < sortedStudents.length && (
//                     <>
//                         <Button variant="contained" onClick={showMoreStudents}>
//                             Показать ещё 10 студентов
//                         </Button>
//                         <Button variant="outlined" onClick={showAllStudents}>
//                             Показать всех студентов
//                         </Button>
//                     </>
//                 )}
//             </Box>
//
//             <TableFooter
//                 facultyCounts={facultyCounts}
//                 studyingCounts={studyingCounts}
//                 graduatedCounts={graduatedCounts}
//                 totalCounts={totalCounts}
//             />
//         </Box>
//     );
// };

