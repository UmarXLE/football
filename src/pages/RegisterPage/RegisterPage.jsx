import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './register.module.css'
const RegisterPage = () => {
    return (
        <div className={styles.registerWrapper}>
          <form className={styles.form}>
            <h2  className={styles.title}>Регистрация </h2>
            <TextField id="standard-basic" label="Standard" 
                            margin="dense"
                            variant="outlined" />
            <TextField id="standard-basic" label="Standard" 
                            margin="dense"
variant="outlined" />
            <Button 
                            style={{padding:'10px 0',marginTop:'10px'}}
                            variant="contained">Зарегистрироваться</Button>

        </form>
        </div>
      

    ); 
};

export default RegisterPage;