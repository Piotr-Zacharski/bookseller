import { Button } from '@mui/material';

type ButtonProps = {
    children: string;
};

export default function CustomButton({ children }: ButtonProps) {
    return (
        <Button
            variant="contained"
            style={{
                color: 'white',
                backgroundColor: '#0A1929',
                width: '500px',
                padding: '16px',
            }}
            sx={{ m: 1 }}
        >
            {children}
        </Button>
    );
}
