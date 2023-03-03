import './App.css';
import Login from './component/Login'
import UserSignIn from './component/UserSignIn'
import ProviderSign from './component/ProviderSignIn'
import ReactDOM from "react-dom/client";
import Navbar from "./component/Navbar"
import {Route,Routes} from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const AppLayout =()=>(

)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/userSignIn",
    element: <UserSignIn />,
  },

  {
    path: "/providerSign",
    element: <ProviderSign />,
  },

]);

function App() {
  return (
    <div className="App">

      <Routes>
       
        <RouterProvider router={router} />
      </Routes>

    </div>
  );
}

export default App;
