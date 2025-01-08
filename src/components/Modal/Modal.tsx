import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import {ModalProps} from "../../types/types.ts";

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Добавить студента</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    );
};
