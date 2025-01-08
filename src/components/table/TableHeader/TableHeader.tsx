import { TableRow, TableCell, TableSortLabel, IconButton } from '@mui/material';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import {TableHeaderProps} from "../../../types/types.ts";

export const TableHeader = ({ sortBy, sortDirection, onSort }: TableHeaderProps) => {
    return (
        <TableRow>
            <TableCell align="left">
                <TableSortLabel
                    active={sortBy === 'lastname'}
                    direction={sortDirection ? 'asc' : 'desc'}
                    onClick={() => onSort('lastname')}
                >
                    Фамилия
                </TableSortLabel>
                <IconButton onClick={() => onSort('lastname')}>
                    {sortDirection ? <ArrowDownward /> : <ArrowUpward />}
                </IconButton>
            </TableCell>
            <TableCell align="left">
                <TableSortLabel
                    active={sortBy === 'name'}
                    direction={sortDirection ? 'asc' : 'desc'}
                    onClick={() => onSort('name')}
                >
                    Имя
                </TableSortLabel>
                <IconButton onClick={() => onSort('name')}>
                    {sortDirection ? <ArrowDownward /> : <ArrowUpward />}
                </IconButton>
            </TableCell>
            <TableCell align="left">
                <TableSortLabel
                    active={sortBy === 'patronymic'}
                    direction={sortDirection ? 'asc' : 'desc'}
                    onClick={() => onSort('patronymic')}
                >
                    Отчество
                </TableSortLabel>
                <IconButton onClick={() => onSort('patronymic')}>
                    {sortDirection ? <ArrowDownward /> : <ArrowUpward />}
                </IconButton>
            </TableCell>
            <TableCell align="left">
                <TableSortLabel
                    active={sortBy === 'faculty'}
                    direction={sortDirection ? 'asc' : 'desc'}
                    onClick={() => onSort('faculty')}
                >
                    Факультет
                </TableSortLabel>
                <IconButton onClick={() => onSort('faculty')}>
                    {sortDirection ? <ArrowDownward /> : <ArrowUpward />}
                </IconButton>
            </TableCell>
            <TableCell align="center">
                <TableSortLabel
                    active={sortBy === 'birthdate'}
                    direction={sortDirection ? 'asc' : 'desc'}
                    onClick={() => onSort('birthdate')}
                >
                    Дата рождения
                </TableSortLabel>
                <IconButton onClick={() => onSort('birthdate')}>
                    {sortDirection ? <ArrowDownward /> : <ArrowUpward />}
                </IconButton>
            </TableCell>
            <TableCell align="center">
                <TableSortLabel
                    active={sortBy === 'yearOfEnter'}
                    direction={sortDirection ? 'asc' : 'desc'}
                    onClick={() => onSort('yearOfEnter')}
                >
                    Годы обучения
                </TableSortLabel>
                <IconButton onClick={() => onSort('yearOfEnter')}>
                    {sortDirection ? <ArrowDownward /> : <ArrowUpward />}
                </IconButton>
            </TableCell>
        </TableRow>
    );
};
