import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    width: "auto",
    [theme.breakpoints.down("md")]: {
        width: "100%",
        paddingLeft: theme.spacing(1),
    },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    textAlign: "center",
}));

export const StyledGridContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(2),
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "stretch",
    [theme.breakpoints.down("md")]: { //  768px
        gridTemplateColumns: "1fr",
    },
}));

export const StyledButtonContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: "15px",
    marginBottom: "10px",
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

export const SearchButton = styled(StyledButton)(({ theme }) => ({
    marginBottom: theme.spacing(0),
    backgroundColor: "#3f51b5",
    color: "white",
    "&:hover": {
        backgroundColor: "#303f9f",
    },
}));

export const ShowAllButton = styled(StyledButton)(({ theme }) => ({
    marginBottom: theme.spacing(0),
    backgroundColor: "#fff",
    "&:hover": {
        backgroundColor: "#ddd",
    },
}));