import {styled} from "@mui/material/styles";
import {Box, Button} from "@mui/material";

export const StyledButtonContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        gap: "5px",
    },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    maxWidth: "30%",
    width: "100%",
    padding: "5px 10px",
    fontSize: "16px",
    fontWeight: 700,
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
    },
}));

export const ShowSomeButton = styled(StyledButton)(({ theme }) => ({
    marginTop: theme.spacing(0),
    backgroundColor: "#3f51b5",
    color: "white",
    "&:hover": {
        backgroundColor: "#303f9f",
    },
}));

export const ShowAllButton = styled(StyledButton)(({ theme }) => ({
    marginTop: theme.spacing(0),
    backgroundColor: "#fff",
    "&:hover": {
        backgroundColor: "#ddd",
    },
}));