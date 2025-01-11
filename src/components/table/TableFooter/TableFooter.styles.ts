import {Box, TableCell} from "@mui/material";
import {styled} from "@mui/material/styles";

export const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: '20px',
    padding: theme.spacing(2),
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(1),
    },
}));

export const HiddenTableCell = styled(TableCell)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));