import {styled} from "@mui/material/styles";
import {Box, Button, Table, TableContainer, TableHead} from "@mui/material";

export const StyledTableContainer = styled(TableContainer)<{ height: string }>`
    margin-bottom: 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: ${({ height }) => height};
    overflow-y: ${({ height }) => (height === 'auto' ? 'hidden' : 'auto')}; 
    transition: height 0.3s ease; 
`;
// export const StyledTableContainer = styled(TableContainer)`
//     margin-bottom: 20px;
//     box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
//     width: 100%;
//     max-height: 500px;
//     transition: max-height 0.3s ease;
//     overflow-y: auto;
// `;

export const StyledTable = styled(Table)`
    min-width: 650px;
`;

export const StyledTableHead = styled(TableHead)`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.palette.background.paper};
    z-index: 1;
`;

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
