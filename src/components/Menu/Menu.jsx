import React from 'react';
import styles from './menu.module.css'
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <div className={styles.menuWrapper}>
            
            <nav className={styles.navigation}>
                <Link to="/">Главная</Link>
                <Link to="/createpost">Создать Пост</Link>
                <Link to="/login">Авторизация</Link>
                <Link to="/register" >Регистрация</Link>
            </nav>

        </div>
    );
};

export default Menu;