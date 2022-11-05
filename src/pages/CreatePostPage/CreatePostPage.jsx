import React , {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './create.module.css'
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';
import IconButton from "@mui/material/IconButton";


const CreatePostPage = () => {
    
    const [ name , setName ] = useState('')
    const [ date , setDate ] = useState(0)
    const [img , setImg ] = useState('')
    const [status , setStatus ] = useState('')
    const [open , setOpen ] = useState(false)
    const addPost = (e) => {
        e.preventDefault(e)
        axios.post(`http://localhost:3001/posts`,{
            name,
            date,
            img,
            status
        }).then(res => {
            setName('')
            setDate(0)
            setImg('')
            setOpen(true);
            setStatus('')
        })
    }

    

      const handleClose = () => {
        setOpen(false);
      };
    
      const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            X
          </IconButton>
        </React.Fragment>
      );

    return (
        <div className={styles.createWrapper}>
                <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Пост успешно создан"
          action={action}
        />
                <form 
                className={styles.form} 
                onSubmit={addPost} >
                <h2 className={styles.title}>Создание Поста </h2>
                <TextField 
                id="outlined-basic"
                value={name}
                label="Название матча "
                variant="outlined"
                type="text"
                margin="dense"
                color="success"

                onChange={(e) => setName(e.target.value)
                }
                
                />

                <TextField 
                id="outlined-basic"
                label=" "
                type="date"
                margin="dense"
                // color="succes"
                color="success"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                variant="outlined" />

                
                 <TextField 
                id="outlined-basic"
                label="Статус матча"
                type="text"
                margin="dense"
                // color="succes"
                color="success"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                variant="outlined" />

<TextField 
                id="outlined-basic"
                label="URL изображения матча "
                type="text"
                margin="dense"
                // color="succes"
                color="success"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                variant="outlined" />


           
                
                
                <Button 
                // onSubmit={addPost}
                type="submit"
                color="success"
                style={{padding:'10px 0',marginTop:'10px'}}
                variant="contained">
                    создать
                </Button>

                </form>

            
        </div>
    );
};

export default CreatePostPage;