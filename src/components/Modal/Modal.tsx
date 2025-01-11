import { Button } from '@mui/material';
import { ModalProps } from "../../types/types.ts";
import {
    StyledDialog,
    StyledDialogTitle,
    StyledDialogContent,
    StyledDialogActions,
} from "./Modal.styles";

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    return (
        <StyledDialog open={isOpen} onClose={onClose}>
            <StyledDialogTitle>Добавить студента</StyledDialogTitle>
            <StyledDialogContent>{children}</StyledDialogContent>
            <StyledDialogActions>
                <Button onClick={onClose} color="primary">
                    Закрыть
                </Button>
            </StyledDialogActions>
        </StyledDialog>
    );
};