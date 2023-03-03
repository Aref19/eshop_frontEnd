import './App.css';
import Login from './component/Login'
import UserSignIn from './component/UserSignIn'
import ProviderSign from './component/ProviderSignIn'
import ReactDOM from "react-dom/client";
import Navbar from "./component/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  <Navbar/>
  {
    path: "/",
    element: <Login/>,
  },

  {
    path: "/userSignIn",
    element: <UserSignIn/>,
  },

  {
    path: "/providerSign",
    element: <ProviderSign/>,
  },

]);

function App() {
  return (
    <div className="App">
     <Navbar/>
    </div>
  );
}

export default App;
