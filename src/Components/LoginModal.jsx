import React from 'react';
import { Button, Dialog } from "@material-tailwind/react";
import Login from './Login';

const LoginModal = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>

            <Button onClick={handleOpen} variant="gradient" size="xs">
                Open Dialog
            </Button>

            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Login />
            </Dialog>

        </>
    );
};

export default LoginModal;