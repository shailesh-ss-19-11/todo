import SignIn from "./auth/SignIn";
import Signup from "./auth/Signup";
import TodoList from "./components/TodoList";
import About from "./siteComponents/About";
import Contact from "./siteComponents/Contact";
import Home from "./siteComponents/Home";
import UserList from "./siteComponents/UserList";

export const authRoutes = [
    {url:"todolist",component:TodoList},
    {url:"home",component:Home},
    {url:"about",component:About},
    {url:"contact",component:Contact},
    {url:"userlist",component:UserList},
]