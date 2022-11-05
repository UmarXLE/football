import React, { useEffect , useState } from 'react';
import Button from '@mui/material/Button';
import styles from './single.module.css'
import axios from 'axios'
import postServices from '../../services/services'
import TextField from '@mui/material/TextField';
import { useLocation, useParams } from 'react-router-dom';


const SingleGamePage = (props) => {
    const { id } = useParams()
    const deletePost = () => {
        console.log("deleted")
        axios.delete(`http://localhost:3001/posts/${id}`)
        .then(res => {
            window.location.href = "/"
        })
    }

    useEffect(()=> {
        // postServices.getPost(id)
        //     .then(res => setPost(res.data))
        axios.get(`http://localhost:3001/posts/${id}`)
            .then(res => setPost(res.data))
    },[])

    const handleEditPost = () => {
        setNewName(post.name)
        setNewDate(post.date)
        setNewStatus(post.status)
        setNewBest(post.best)
        setNewImg(post.img)
        setEditPost(true)
    }

    const saveEditPost = () => {
        setEditPost(false)
    }

    const changePost = (e) => {
        axios.patch(`http://localhost:3001/posts/${id}`,{
            name : newName,
            date : newDate ,
            status : newStatus,
            best : newBest ,
            img : newImg 
        }).then( res => {
            setPost(res.data)
            setEditPost(false)
            console.log(res.data)
        }
        )
    }




    const [newName , setNewName] = useState('')
    const [newDate , setNewDate ] = useState(0)
    const [newStatus , setNewStatus] = useState('')
    const [newBest , setNewBest ] = useState('')
    const [newImg , setNewImg ] = useState('')
    const [post, setPost ] = useState({})
    const [editPost , setEditPost ] = useState(false)
    
    return (
        <div className={styles.bg}>
            {
                editPost ? (
             
                    <>
                    <div className={styles.editForm}>
                   <TextField 
                    className={styles.inputStyle}
                   value={newName}
                   margin="dense"
                   onChange = {(e)=>setNewName(e.target.value)}
                   id="outlined-basic" 
                   margin="dense"
                   label="Название матча" variant="outlined" />
                   <TextField 
                   margin="dense"
                   value={newDate}
                   onChange={(e)=> setNewDate(e.target.value)}
                   id="outlined-basic" label="Дата матча" variant="outlined" />
                   <TextField 
                   margin="dense"
                   value = {newStatus}
                   onChange = {(e)=> setNewStatus(e.target.value)}
                   id="outlined-basic" label="Статус" variant="outlined" />
                   <TextField 
                   margin="dense"
                   value = {newBest}
                   onChange = {(e)=> setNewBest(e.target.value)}
                   id="outlined-basic" label="Лучшее" variant="outlined" />
                   <TextField 
                   margin="dense"
                   value={newImg}
                   onChange = {(e)=>setNewImg(e.target.value)}
                   id="outlined-basic" label="URL картинки" variant="outlined" />


                   <Button 
                    variant="contained"
                    onClick = {changePost}
                    color = "success"
                    style={{padding:'10px 0',marginTop:'10px'}}

                    >Сохранить</Button>
                   </div>
                   </>
                ):(
// поменять местами нужно !!!

<div className={styles.item}> 
<img className={styles.img} src={post.img} alt="" />
<h2>Commands :{post.name}</h2>
 <p>Date : {post.date}</p>
 <p>Status : {post.status ? 'Заплнированно':'Сыгранно'}</p>
 <p>Best : {post.best}</p>
 <div className={styles.buttons}>
 <Button 
    variant="contained"
    style = {{marginRight:'10px'}}
    onClick ={handleEditPost}
    >редактировать</Button>
 <Button 
    variant="contained"
    color="error"
    onClick = {(e,id) => deletePost()}
    >удалить</Button>
 </div>  
 </div>   
 
                )
            } 

            </div>


    );
};

export default SingleGamePage;