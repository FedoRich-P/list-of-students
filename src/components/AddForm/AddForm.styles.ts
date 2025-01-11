import { styled } from "@mui/material/styles";
import {Box, BoxProps, Button} from "@mui/material";

export const StyledFormContainer = styled(Box)<BoxProps>(({ theme }) => ({
    padding: theme.spacing(2.5),
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
        padding: 0,
    },
}));

export const AddButton = styled(Button)(({ theme }) => ({
    width: "40%",
    padding: "5px 10px",
    fontSize: "16px",
    fontWeight: 700,
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    backgroundColor: "#3f51b5",
    color: "white",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
    "&:hover": {
        backgroundColor: "#303f9f",
    },
}));