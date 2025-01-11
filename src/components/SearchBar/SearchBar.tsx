import { TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { validationSchemaFromSearch } from "../../utils/validate.ts";
import { SearchBarProps, SearchFilters } from "../../types/types.ts";
import {
    StyledContainer,
    StyledTitle,
    StyledGridContainer,
    StyledButtonContainer,
    SearchButton,
    ShowAllButton,
} from "./SearchBar.styles";

export const SearchBar = ({ onSearch }: SearchBarProps) => {
    return (
        <StyledContainer>
            <StyledTitle variant="h6">Найти студента</StyledTitle>

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
                {({ handleChange, values, errors, touched, handleBlur, resetForm }) => (
                    <Form>
                        <StyledGridContainer>
                            <Field
                                name="name"
                                as={TextField}
                                label="Имя"
                                variant="outlined"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                            />
                            <Field
                                name="lastname"
                                as={TextField}
                                label="Фамилия"
                                variant="outlined"
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.lastname && !!errors.lastname}
                                helperText={touched.lastname && errors.lastname}
                            />
                            <Field
                                name="patronymic"
                                as={TextField}
                                label="Отчество"
                                variant="outlined"
                                value={values.patronymic}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.patronymic && !!errors.patronymic}
                                helperText={touched.patronymic && errors.patronymic}
                            />
                            <Field
                                name="faculty"
                                as={TextField}
                                label="Факультет"
                                variant="outlined"
                                value={values.faculty}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.faculty && !!errors.faculty}
                                helperText={touched.faculty && errors.faculty}
                            />
                            <Field
                                name="birthdate"
                                as={TextField}
                                label="Год"
                                variant="outlined"
                                value={values.birthdate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.birthdate && !!errors.birthdate}
                                helperText={touched.birthdate && errors.birthdate}
                            />
                        </StyledGridContainer>

                        <StyledButtonContainer>
                            <SearchButton type="submit">Поиск</SearchButton>
                            <ShowAllButton
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
                            </ShowAllButton>
                        </StyledButtonContainer>
                    </Form>
                )}
            </Formik>
        </StyledContainer>
    );
};