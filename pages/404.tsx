import { Button } from '@mui/material';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div
            style={{
                margin: '0 auto',
                marginTop: '0px',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <h1>Oops! This page doesn't exist!</h1>
            <Button variant="contained">
                <Link href="/">Return to home page</Link>
            </Button>
        </div>
    );
};
export default NotFound;
