import React, { useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import Signin from './Signin';

const SigninModal = () => {

    // const [open, setOpen] = React.useState(false);

    // const handleOpen = () => setOpen(!open);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true); // Open the dialog when the component mounts
    }, []); // Empty dependency array ensures this effect runs only once

    const handleClose = () => setOpen(false);

    return (
        <>

            <Dialog open={open} handler={handleClose} size='lg'>
                <Signin />
            </Dialog>
        </>
    );
};

export default SigninModal;