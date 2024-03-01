"use client"

import React from 'react';
import { INTER_FACE_KEY } from '@/hooks/useUserInterfaceDisplay'
import { useShopContext } from '@/services/providers/ShopContext';

import { Box, Modal } from '@mui/material/';
import LoginForm from './LoginForm';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #ffff',
    boxShadow: 24,
    p: 4,
};

export default function LoginModal() {

    const { userInterfaceDisplay, setUserInterface } = useShopContext();

    const handleClose = () => setUserInterface(INTER_FACE_KEY.LOGIN_MODAL, false);

    return (
        <Modal
            open={userInterfaceDisplay.LOGIN_MODAL}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <LoginForm />
            </Box>
        </Modal>

    );
}
