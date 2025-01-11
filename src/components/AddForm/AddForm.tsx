import {Box, Grid} from '@mui/material';
import { useFormik } from 'formik';
import { AddFormProps } from '../../types/types';
import { validationSchema } from '../../utils/validate';
import { TextFieldWithFormik } from './TextFieldWithFormik';
import { Student } from "../../models/Student.ts";
import {AddButton} from "./AddForm.styles.ts";

const initialValues = {
    name: '',
    patronymic: '',
    lastname: '',
    birthdate: '',
    yearOfEnter: '',
    faculty: '',
    gender: '' as 'male' | 'female',
};

export const AddForm = ({ onAddStudent }: AddFormProps) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const { name, patronymic, lastname, birthdate, yearOfEnter, faculty, gender } = values;
            const student = new Student(name, patronymic, lastname, new Date(birthdate), Number(yearOfEnter), faculty, gender);
            onAddStudent(student);
        },
    });

    return (
        <Box sx={{ padding: '20px', backgroundColor: "wheat" }}>
            <form onSubmit={formik.handleSubmit} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextFieldWithFormik label="Фамилия" name="lastname" formik={formik} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldWithFormik label="Имя" name="name" formik={formik} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldWithFormik label="Отчество" name="patronymic" formik={formik} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldWithFormik label="Дата рождения" name="birthdate" type="date" formik={formik} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldWithFormik label="Год начала обучения" name="yearOfEnter" formik={formik} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldWithFormik label="Факультет" name="faculty" formik={formik} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextFieldWithFormik label="Пол" name="gender" formik={formik} />
                    </Grid>
                    <Grid item xs={12}>
                        <AddButton type="submit">
                            Добавить студента
                    </AddButton>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};