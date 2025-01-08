import { TableRow, TableCell } from '@mui/material';
import {TableBodyComponentProps} from '../../../types/types.ts';

export const TableBody = ({ students }: TableBodyComponentProps) => {
    return (
        <>
            {students.map((student) => (
                <TableRow key={student.id}>
                    <TableCell align="left">{student.lastname}</TableCell>
                    <TableCell align="left">{student.name}</TableCell>
                    <TableCell align="left">{student.patronymic}</TableCell>
                    <TableCell align="left">{student.faculty}</TableCell>
                    <TableCell align="center">{student.formattedBirthDate} ({student.age})</TableCell>
                    <TableCell align="center">{student.yearsOfStudy}</TableCell>
                </TableRow>
            ))}
        </>
    );
};
