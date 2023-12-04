import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { authRoutes } from './Routes';
import { Routes, Route } from 'react-router-dom'
import Home from './siteComponents/Home';
import Protected from './auth/Protected';
import SignIn from './auth/SignIn';
import Signup from './auth/Signup';
function App() {

  return (
    <>
      <Routes >
        <Route path='/' Component={SignIn} />
        <Route path='/signup' Component={Signup} />
        {authRoutes && authRoutes.map((item, index) => (
          <Route key={index} path={item.url} element={<Protected component={item.component}/>} />
        ))}
      </Routes >
    </>
    // <TodoList />
  );
}

export default App;
