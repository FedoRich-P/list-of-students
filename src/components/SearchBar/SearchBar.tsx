import {TextField, Button, Box, Typography} from "@mui/material";
import {Formik, Field, Form} from "formik";
import {validationSchemaFromSearch} from "../../utils/validate.ts";
import {SearchBarProps, SearchFilters} from "../../types/types.ts";

export const SearchBar = ({onSearch}: SearchBarProps) => {
    return (
        <Box sx={{marginBottom: 2, padding: 2, boxShadow: 3, borderRadius: 2}}>
            <Typography variant="h6" sx={{marginBottom: 2, textAlign: "center"}}>
                Найти студента
            </Typography>

            <Formik
                initialValues={{
                    name: "",
                    lastname: "",
                    patronymic: "",
                    faculty: "",
                    birthdate: "",
                }}
                validationSchema={validationSchemaFromSearch}
                onSubmit={(values: SearchFilters) => {
                    onSearch(values);
                }}
            >
                {({handleChange, values, errors, touched, handleBlur, resetForm}) => (
                    <Form>
                        <Box
                            sx={{
                                display: "grid",
                                gap: 2,
                                gridTemplateColumns: "1fr 1fr",
                                justifyItems: "stretch",
                            }}
                        >
                            <Field name="name"
                                   as={TextField}
                                   label="Имя"
                                   variant="outlined"
                                   value={values.name}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   error={touched.name && !!errors.name}
                                   helperText={touched.name && errors.name}
                            />
                            <Field name="lastname"
                                   as={TextField}
                                   label="Фамилия"
                                   variant="outlined"
                                   value={values.lastname}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   error={touched.lastname && !!errors.lastname}
                                   helperText={touched.lastname && errors.lastname}
                            />
                            <Field name="patronymic"
                                   as={TextField}
                                   label="Отчество"
                                   variant="outlined"
                                   value={values.patronymic}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   error={touched.patronymic && !!errors.patronymic}
                                   helperText={touched.patronymic && errors.patronymic}
                            />
                            <Field name="faculty"
                                   as={TextField}
                                   label="Факультет"
                                   variant="outlined"
                                   value={values.faculty}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   error={touched.faculty && !!errors.faculty}
                                   helperText={touched.faculty && errors.faculty}
                            />
                            <Field name="birthdate"
                                   as={TextField}
                                   label="Год"
                                   variant="outlined"
                                   value={values.birthdate}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   error={touched.birthdate && !!errors.birthdate}
                                   helperText={touched.birthdate && errors.birthdate}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    maxWidth: '30%',
                                    width: "100%",
                                    padding: "5px 10px",
                                    fontSize: "16px",
                                    backgroundColor: "#3f51b5",
                                    "&:hover": {
                                        backgroundColor: "#303f9f",
                                    },
                                    marginTop: 2,
                                }}
                                type="submit"
                            >
                                Поиск
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    maxWidth: '30%',
                                    width: "100%",
                                    padding: "5px 10px",
                                    fontSize: "16px",
                                    marginTop: 2,
                                    backgroundColor: "#fff",
                                    "&:hover": {
                                        backgroundColor: "#ddd",
                                    },
                                }}
                                onClick={() => {
                                    resetForm();
                                    onSearch({
                                        name: "",
                                        lastname: "",
                                        patronymic: "",
                                        faculty: "",
                                        birthdate: "",
                                    });
                                }}
                            >
                                Показать всех
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};