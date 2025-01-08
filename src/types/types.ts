import {ReactNode} from "react";
// ====================================================
//  Student Types
export type StudentBase = {
    id: string;
    name: string;
    patronymic: string;
    lastname: string;
    birthdate: Date | string;
    yearOfEnter: number;
    faculty: string;
    gender: 'male' | 'female';
};

export type StudentType = StudentBase & {
    fullName?: string;
    formattedBirthDate?: string;
    age?: number;
    yearsOfStudy?: string[];
};

export type StudentForTable = Omit<StudentBase, 'id' | 'gender'> & {
    yearsOfStudy: string[];
};

// ====================================================
//  Add Form Types
export type AddFormProps = {
    onAddStudent: (student: StudentBase) => void;
};

export type TextFieldWithFormikProps = {
    label: string;
    name: string;
    type?: string;
    formik: any;
};

// ====================================================
//  Modal Types
export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

// ====================================================
//  SearchBar Types
export type SearchFilters = Omit<StudentBase, 'id' | 'gender' | 'yearOfEnter'>;

export type SearchBarProps = {
    onSearch: (filters: SearchFilters) => void;
};

// ====================================================
//  Table Types
export type StudentTableProps = {
    students: StudentType[];
    sortBy: keyof StudentType;
    // sortDirection: 'asc' | 'desc';
    sortDirection: boolean;
    onSort: (column: keyof StudentType) => void;
};

// ====================================================
//  Table Footer Types
export type FacultyCount = {
    name: string;
    total: number;
    studying: number;
    graduated: number;
};

export type FacultyCounts = {
    [facultyName: string]: number;
};

export type TableFooterProps = {
    facultyCounts: FacultyCount[];
    studyingCounts: FacultyCounts;
    graduatedCounts: FacultyCounts;
    totalCounts: FacultyCounts;
};

// ====================================================
//  Table Header Types
export type TableHeaderProps = {
    sortBy: keyof StudentType;
    sortDirection: boolean;
    // sortDirection: 'asc' | 'desc';
    onSort: (column: keyof StudentType) => void;
};

// ====================================================
//  Table Body Types
export type TableBodyComponentProps = {
    students: StudentType[];
};

// ====================================================
//  Sort Utility Types
export type SortArrayProps = {
    students: StudentType[];
    property: keyof StudentType;
    ascending: boolean;
};


