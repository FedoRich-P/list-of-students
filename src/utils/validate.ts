import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    patronymic: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    birthdate: Yup.date().required('Required'),
    yearOfEnter: Yup.number().min(2000).max(new Date().getFullYear()).required('Required'),
    faculty: Yup.string().required('Required'),
})

export const validationSchemaFromSearch = Yup.object({
    firstName: Yup.string().matches(/^[a-zA-Zа-яА-ЯёЁ\s]*$/, "Только буквы и пробелы"),
    lastName: Yup.string().matches(/^[a-zA-Zа-яА-ЯёЁ\s]*$/, "Только буквы и пробелы"),
    middleName: Yup.string().matches(/^[a-zA-Zа-яА-ЯёЁ\s]*$/, "Только буквы и пробелы"),
    faculty: Yup.string(),
    year: Yup.string()
        .matches(/^\d{4}$/, "Введите корректный год (например 2023)")
        .nullable(),
});