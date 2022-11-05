import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './login.module.css'
const LoginPage = () => {
    return (
        <div className={styles.bg}>

        <form className={styles.form}>

            <h2 className={styles.title}>Авторизация </h2>

            <TextField 
            id="filled-basic" 
            label="Email" 
            margin="dense"
            // color="success"
            variant="outlined" />


            <TextField 
            id="filled-basic" 
            label="Password" 
            type="Password"
            margin="dense"
            // color="success"
            variant="outlined" />

            <Button 
            variant="contained"
            style={{padding:'10px 0',marginTop:'10px'}}

            >Войти</Button>


        </form>
        </div>


    );
};

export default LoginPage;