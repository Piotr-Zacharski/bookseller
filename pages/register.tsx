import Head from 'next/head';
import Box from '@mui/material/Box';
import PasswordIcon from '@mui/icons-material/Password';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';
import CustomButton from '../components/CustomButton';

const Register = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleChangeRepeatPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(event.target.value);
    };

    return (
        <>
            <Head>
                <title>BookSeller | Register</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Typography
                variant="h4"
                style={{
                    textAlign: 'center',
                    width: 300,
                    padding: 10,
                    margin: '0 auto',
                }}
            >
                Register
            </Typography>
            <Box style={{ width: 600, margin: '0 auto', textAlign: 'center' }}>
                <FormControl>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={handleChangeEmail}
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '500px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <AlternateEmailIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        sx={{ m: 1, width: '500px' }}
                        onChange={handleChangePassword}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <PasswordIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        type="password"
                        value={repeatPassword}
                        sx={{ m: 1, width: '500px' }}
                        onChange={handleChangeRepeatPassword}
                        label="Repeat password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <PasswordIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormControl>
                <CustomButton>Register</CustomButton>
            </Box>
        </>
    );
};
export default Register;
