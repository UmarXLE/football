import React, { useState } from 'react';
import styles from './gameitem.module.scss'
import axios from 'axios'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const GameItem = (props) => {

   
   

   return (

// <div className={styles.item}> 
// <img src={props.img} alt="" />
// <h2>{props.name}</h2>
// <p>Время : {new Date(props.create_time).toString()}</p>
// <p>Статус : {props.status ? 'Запланированно':'Сыгранно'}</p>
// <p>Лучшие игроки : {props.best}</p>

// <Link to={`/post/${props.id}`}>Подробнее  ...</Link>
// <div className={styles.buttons}>
// <Button 
//     variant="contained"
//     style = {{marginRight:'10px'}}
//     onClick = {props.changedPost}
//     >Сделать {props.status ? 'Сыгранным':'Запланированным'}</Button>
//  <Button 
//    variant="contained"
//   color="error"
//   onClick = {props.deletePost}
//     >удалить</Button>


// </div>
// </div>


<Card className={styles.cardItem} sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  height="140"
  image={props.img}
  alt="green iguana"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  {props.name}
  </Typography>
  <p className={styles.text}>Время : {new Date(props.create_time).toString()}</p>
 <p className={styles.text}>Статус : {props.status ? 'Запланированно':'Сыгранно'}</p>
<p className={styles.text}>Лучшие игроки : {props.best}</p>

 <Link className={styles.link} to={`/post/${props.id}`}>Подробнее  ...</Link>
  
  
</CardContent>
<CardActions>
  <Button 
  onClick={props.changedPost}
  size="small">Сделать {props.status ? 'Сыгранным':'Запланированным'}</Button>
  <Button 
  onClick = {props.deletePost}
  color = 'error'
  size="small">Удалить</Button>
</CardActions>
</Card>
   );
};

export default GameItem;