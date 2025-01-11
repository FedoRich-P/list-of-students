import { TableRow, TableCell, Table, TableBody, TableHead, Typography } from '@mui/material';
import { TableFooterProps } from "../../../types/types.ts";
import {HiddenTableCell, StyledBox} from "./TableFooter.styles.ts";

export const TableFooter = ({ facultyCounts, studyingCounts, graduatedCounts, totalCounts }: TableFooterProps) => {
    if (!facultyCounts || !studyingCounts || !graduatedCounts || !totalCounts) {
        return (
            <StyledBox>
                <Typography variant="h6" sx={{ marginBottom: '10px' }}>Статистика по факультетам:</Typography>
                <Typography color="error">Данные не загружены.</Typography>
            </StyledBox>
        );
    }

    const totalStudying = facultyCounts.reduce((sum, faculty) => sum + (studyingCounts[faculty.name] || 0), 0);
    const totalGraduated = facultyCounts.reduce((sum, faculty) => sum + (graduatedCounts[faculty.name] || 0), 0);
    const totalTotal = facultyCounts.reduce((sum, faculty) => sum + (totalCounts[faculty.name] || 0), 0);

    return (
        <StyledBox>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>Статистика по факультетам:</Typography>
            <Table sx={{ width: 'auto' }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Название факультета</TableCell>
                        <HiddenTableCell align="center">Училось студентов</HiddenTableCell>
                        <TableCell align="center">Учатся студентов</TableCell>
                        <TableCell align="center">Всего студентов</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {facultyCounts.map((faculty) => (
                        <TableRow key={faculty.name}>
                            <TableCell align="left">{faculty.name}</TableCell>
                            <HiddenTableCell align="center">{graduatedCounts[faculty.name] || 0}</HiddenTableCell>
                            <TableCell align="center">{studyingCounts[faculty.name] || 0}</TableCell>
                            <TableCell align="center">{totalCounts[faculty.name] || 0}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell align="left"><strong>Итого</strong></TableCell>
                        <HiddenTableCell align="center"><strong>{totalGraduated}</strong></HiddenTableCell>
                        <TableCell align="center"><strong>{totalStudying}</strong></TableCell>
                        <TableCell align="center"><strong>{totalTotal}</strong></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </StyledBox>
    );
};


// import {TableRow, TableCell, Table, TableBody, TableHead, Box, Typography} from '@mui/material';
// import {TableFooterProps} from "../../../types/types.ts";
//
// export const TableFooter = ({facultyCounts, studyingCounts, graduatedCounts, totalCounts}: TableFooterProps) => {
//
//     const totalStudying = facultyCounts.reduce((sum, faculty) => sum + (studyingCounts[faculty.name] || 0), 0);
//     const totalGraduated = facultyCounts.reduce((sum, faculty) => sum + (graduatedCounts[faculty.name] || 0), 0);
//     const totalTotal = facultyCounts.reduce((sum, faculty) => sum + (totalCounts[faculty.name] || 0), 0);
//
//     return (
//         <Box sx={{marginTop: '20px', padding: 2, boxShadow: 3}}>
//             <Typography variant="h6" sx={{marginBottom: '10px'}}>Статистика по факультетам:</Typography>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell align="left">Название факультета</TableCell>
//                         <TableCell align="center">Училось студентов</TableCell>
//                         <TableCell align="center">Учатся студентов</TableCell>
//                         <TableCell align="center">Всего студентов</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {facultyCounts.map((faculty) => (
//                         <TableRow key={faculty.name}>
//                             <TableCell align="left">{faculty.name}</TableCell>
//                             <TableCell align="center">{graduatedCounts[faculty.name] || 0}</TableCell>
//                             <TableCell align="center">{studyingCounts[faculty.name] || 0}</TableCell>
//                             <TableCell align="center">{totalCounts[faculty.name] || 0}</TableCell>
//                         </TableRow>
//                     ))}
//                     <TableRow>
//                         <TableCell align="left"><strong>Итого</strong></TableCell>
//                         <TableCell align="center"><strong>{totalGraduated}</strong></TableCell>
//                         <TableCell align="center"><strong>{totalStudying}</strong></TableCell>
//                         <TableCell align="center"><strong>{totalTotal}</strong></TableCell>
//                     </TableRow>
//                 </TableBody>
//             </Table>
//         </Box>
//     );
// };
