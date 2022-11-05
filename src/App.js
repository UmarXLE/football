import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SingleGamePage from './pages/SingleGamePage/SingleGamePage';


const App = () => {

  return(
    <div className="App">

      <div className='menu-wrapper'>   
       <Menu />
    </div>
      <div className='content-wrapper'>

      {/* <Content > */}
      <Routes>
        
           <Route path="/" element={<HomePage />} />
           <Route path="/createpost" element = {<CreatePostPage />}></Route>
           <Route path="/login" element ={<LoginPage />} />
           <Route path="/register" element ={ <RegisterPage/> } />
           <Route path="/post/:id" element = {<SingleGamePage />} />
      </Routes>
      {/* </Content> */}
      </div>
    
   


  
  </div>
  );
}

export default App;
