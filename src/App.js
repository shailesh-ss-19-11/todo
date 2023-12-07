import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { authRoutes } from './Routes';
import { Routes, Route } from 'react-router-dom'
import Home from './siteComponents/Home';
import Protected from './auth/Protected';
import SignIn from './auth/SignIn';
import Signup from './auth/Signup';
import Contact from './siteComponents/Contact';
import About from './siteComponents/About';
import { createContext, useEffect, useState } from 'react';
import Child from './components/Child';
import Header from './components/header/Header';
export const gloablContext = createContext();

function App() {
  const [bgColor, setbgColor] = useState("red");
  const [headerclass, setheaderclass] = useState("bg-dark text-white");

  const changeColor = (color) => {
    setbgColor(color)
  }

  useEffect(() => {
    // alert("color is changed")
  },[]);
  return (
    <>
      <gloablContext.Provider value={{ bgColor, changeColor,name:"shailesh",headerclass }}>
        <Header />
        <Routes >
          <Route path='/' Component={SignIn} />
          <Route path='/signup' Component={Signup} />
          {/* <Route path='/todolist' element={<Protected >{TodoList}</Protected>} />
        <Route path='/home' element={<Protected >{Home}</Protected>}  />
        <Route path='/contact' element={<Protected >{Contact}</Protected>}  />
        <Route path='/about' element={<Protected >{About}</Protected>} /> */}

          {authRoutes && authRoutes.map((item, index) => {
            return <>
              <Route key={index} path={item.url} element={<Protected >{item.component}</Protected>} />
            </>
          })}
        </Routes >
      </gloablContext.Provider>
    </>
    // <TodoList />
  );
}

export default App;
