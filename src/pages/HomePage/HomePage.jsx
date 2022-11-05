import React, { useEffect, useState ,CSSProperties ,Suspense }  from 'react';
import axios from 'axios'
import GameItem from '../../components/GameItem/GameItem';
import styles from './homepage.module.css'
import Button from '@mui/material/Button';
import FadeLoader from 'react-spinners/FadeLoader'
// 

const HomePage = () => {

    const [posts , setPosts ] = useState([])
    const [showAll , setShowAll ] = useState(true) // дляначало создаем состояние 

    useEffect(()=>{
        axios.get(`http://localhost:3001/posts`)
            .then(res => {

                setPosts(res.data)
                console.log(res.data)
            })
    },[])

    const deletePost = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3001/posts/${id}`)           
    }


    const filteredPosts = showAll ? posts : posts.filter(post => post.status === true) 
    console.log(filteredPosts)

    

      const changedPost = (id) => {

        const post = posts.find(post => post.id === id)
        const changedPost = {
            ...post,
            status: !post.status
        }
        axios.put(`http://localhost:3001/posts/${id}`,changedPost)
            .then(res => setPosts(posts.map(post => post.id === id ? res.data : post)))
      }


    //   

    const [loading , setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        },1000)

    },[])

    return (

        <div className={styles.bg}>
            {
                loading ? 
                <div className='loader'>
                    <FadeLoader
                        color={"#000"}
                        loading={loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
                :
                <>
                <h2 className={styles.title}>Ближайшие матчи </h2>
            <Button 
            className={styles.buttonChange}
            onClick={() => setShowAll(!showAll)}
            variant="contained">Показать {showAll ? 'запланированные':'все'}</Button>
           <div className={styles.wrapper}>
           {
                filteredPosts.map((post) => {
                    return(
                        <GameItem 
                            key = {post.id}
                            id = {post.id}
                            name = {post.name}
                            img = {post.img}
                            // date = {post.date}
                            status = {post.status}
                            best = {post.best}
                            create_time = {post.create_time}
                            changedPost = {() => changedPost(post.id)}
                            deletePost = {() => deletePost(post.id)}
                        />
                    ) 
                })
            }
           </div>
                </>

            }
           
          
            
           
            
            
        </div>
    );
};

export default HomePage;