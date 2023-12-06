import Movie from "./pages/Movies/movie"
import NotFound from "./pages/NotFound/notfound"
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
import AppLayout from "./components/AppLayout/appLayout"
import Login from "./pages/Login/login"
import Register from "./pages/Register/register"
import Favorite from "./pages/Favorites/favorites"
import Details from "./pages/Movies/details"
import  "./app.css"


const router = createBrowserRouter([
  { path:"/", element:<AppLayout/>,
  children:[
    {index:true , element:<Movie/>},
    {path:"/details/:id", element:<Details/>},
    {path:'favorite', element:<Favorite/>},   
    {path:'login', element:<Login/>}, 
    {path:'register', element:<Register/>},   


           ]
  },
  {path:"*",element:<NotFound/>}
])
function App() {
 
  return <RouterProvider router={router} />
  
}

export default App
