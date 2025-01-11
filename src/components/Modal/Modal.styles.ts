import {
    DialogProps,
    DialogTitleProps,
    DialogContentProps,
    DialogActionsProps,
    Dialog,
    DialogTitle, DialogContent, DialogActions
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
    "& .MuiDialog-paper": {
        width: "100%",
        margin: 0,
        padding: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            width: "80%",
            padding: theme.spacing(3),
        },
        [theme.breakpoints.up("md")]: {
            width: "60%",
            padding: theme.spacing(4),
        },
        [theme.breakpoints.up("lg")]: {
            width: "50%",
            padding: theme.spacing(5),
        },
    },
}));

export const StyledDialogTitle = styled(DialogTitle)<DialogTitleProps>(({ theme }) => ({
    padding: theme.spacing(1),
}));

export const StyledDialogContent = styled(DialogContent)<DialogContentProps>(({ theme }) => ({
    padding: theme.spacing(1),
}));

export const StyledDialogActions = styled(DialogActions)<DialogActionsProps>(({ theme }) => ({
    padding: theme.spacing(1),
}));