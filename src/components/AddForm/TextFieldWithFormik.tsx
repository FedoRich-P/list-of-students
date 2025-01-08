import { TextField } from '@mui/material';
import {TextFieldWithFormikProps} from "../../types/types.ts";

export const TextFieldWithFormik = ({ label, name, type = "text", formik }: TextFieldWithFormikProps) => (
    <TextField
        fullWidth
        label={label}
        name={name}
        type={type}
        {...formik.getFieldProps(name)}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
    />
);
