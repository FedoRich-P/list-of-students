import {useState} from 'react';
import {Container, Typography, Box} from '@mui/material';
import {Modal} from "./components/Modal/Modal.tsx";
import {AddForm} from "./components/AddForm/AddForm.tsx";
import {StudentBase, StudentType} from "./types/types.ts";
import {Student} from "./models/Student.ts";
import {initialStudents} from "./data/data.ts";
import {Table} from "./components/table/Table/Table.tsx";
import {AddButton} from "./components/AddForm/AddForm.styles.ts";

const App = () => {
    const initialStudentsList = initialStudents.map((student: StudentType) => {
        const { name, patronymic, lastname, birthdate, yearOfEnter, faculty, gender } = student;
        return new Student(name, patronymic, lastname, new Date(birthdate), yearOfEnter, faculty, gender);
    });

    const [students, setStudents] = useState<StudentBase[]>(initialStudentsList);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState<keyof StudentType>('lastname');
    const [sortDirection, setSortDirection] = useState<boolean>(true);

    const addStudent = (student: StudentBase) => {
        setStudents((prevStudents) => [...prevStudents, student]);
        setIsModalOpen(false);
    };

    const toggleSort = (property: keyof StudentType) => {
        const isAscending = sortBy === property ? !sortDirection : true;
        setSortBy(property);
        setSortDirection(isAscending);
    };

    return (
        <Container maxWidth="xl">
                <Box sx={{margin: '20px 0'}}>
                    <Typography variant="h4" gutterBottom>
                        Студенты
                    </Typography>
                    <AddButton variant="contained" onClick={() => setIsModalOpen(true)}>
                        Добавить студента
                    </AddButton>
                </Box>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <AddForm onAddStudent={addStudent}/>
                </Modal>

                <Table
                    students={students}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                    onSort={toggleSort}
                />
        </Container>
    );
};

export default App;
