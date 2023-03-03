import './App.css';
import Login from './component/Login'
import UserSignIn from './component/UserSignIn'
import ProviderSign from './component/ProviderSignIn'
import ReactDOM from "react-dom/client";
import Navbar from "./component/Navbar"
import { Route, Routes } from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const AppLayout = () => (
  <>
    <Navbar />
  </>
);

const router = createBrowserRouter([
  {
    element: AppLayout()
  },
  {
    path: "/",
    element: AppLayout(),
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
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
