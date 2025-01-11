import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const AddButton = styled(Button)(({ theme }) => ({
    maxWidth: "25vw",
    width: "100%",
    padding: "5px 10px",
    fontSize: "16px",
    fontWeight: 700,
    marginTop: theme.spacing(2),
    backgroundColor: "#3f51b5",
    color: "white",
    [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
    },
    "&:hover": {
        backgroundColor: "#303f9f",
    },
}));