import { useState, useEffect, useRef } from 'react';
import { Box, TableBody as TableBodyFromUi } from '@mui/material';
import { sortArray } from "../../../utils/sortUtils";
import { SearchBar } from "../../SearchBar/SearchBar";
import { TableBody } from "../TableBody/TableBody";
import { TableFooter } from "../TableFooter/TableFooter";
import { TableHeader } from "../TableHeader/TableHeader";
import { SearchFilters, StudentTableProps } from "../../../types/types";
import { calculateFacultyCounts, filterStudents } from "../../../utils/tableUtils";
import {
    ShowAllButton,
    ShowSomeButton,
    StyledButtonContainer,
    StyledTable,
    StyledTableContainer,
    StyledTableHead,
} from "./Table.styles";

export const Table = ({ students, sortBy, sortDirection, onSort }: StudentTableProps) => {
    const [filters, setFilters] = useState<SearchFilters>({
        name: "",
        lastname: "",
        patronymic: "",
        faculty: "",
        birthdate: "",
    });

    const [visibleStudentsCount, setVisibleStudentsCount] = useState(15);
    const [containerHeight, setContainerHeight] = useState('500px');
    const tableContainerRef = useRef<HTMLDivElement>(null);

    const filteredStudents = filterStudents(students, filters);
    const sortedStudents = sortArray(filteredStudents, sortBy, sortDirection);
    const studentsToShow = sortedStudents.slice(0, visibleStudentsCount);

    const { totalCounts, studyingCounts, graduatedCounts } = calculateFacultyCounts(filteredStudents);

    const handleSearch = (values: SearchFilters) => {
        setFilters(values);
    };

    const showMoreStudents = () => {
        setVisibleStudentsCount((prev) => prev + 10);
    };

    const showAllStudents = () => {
        setVisibleStudentsCount(sortedStudents.length);
    };

    useEffect(() => {
        if (tableContainerRef.current) {
            if (visibleStudentsCount >= sortedStudents.length) {
                setContainerHeight('auto');
            } else {
                setContainerHeight('500px');
            }
        }
    }, [visibleStudentsCount, sortedStudents.length]);

    return (
        <Box>
            <SearchBar onSearch={handleSearch} />

            <StyledTableContainer height={containerHeight} ref={tableContainerRef}>
                <StyledTable>
                    <StyledTableHead>
                        <TableHeader sortBy={sortBy} sortDirection={sortDirection} onSort={onSort} />
                    </StyledTableHead>
                    <TableBodyFromUi>
                        <TableBody students={studentsToShow} />
                    </TableBodyFromUi>
                </StyledTable>
            </StyledTableContainer>

            <StyledButtonContainer>
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
                facultyCounts={Object.keys(totalCounts).map(faculty => ({
                    name: faculty,
                    total: totalCounts[faculty],
                    studying: studyingCounts[faculty] || 0,
                    graduated: graduatedCounts[faculty] || 0
                }))}
                studyingCounts={studyingCounts}
                graduatedCounts={graduatedCounts}
                totalCounts={totalCounts}
            />
        </Box>
    );
};
