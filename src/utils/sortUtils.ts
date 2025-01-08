import { StudentType } from "../types/types.ts";

export function sortArray(students: StudentType[], property: keyof StudentType, ascending: boolean) {
    return [...students].sort((a, b) => {
        const valueA = a[property];
        const valueB = b[property];
        if (valueA === undefined || valueB === undefined) {
            return 0;
        }
        if (ascending) {
            return valueA < valueB ? -1 : 1;
        } else {
            return valueA > valueB ? -1 : 1;
        }
    });
}