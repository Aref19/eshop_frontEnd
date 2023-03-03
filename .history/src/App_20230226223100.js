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
import Home from './component/Home';


const AppLayout = () => (
  <>
    <Navbar />
  </>
);



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"
          element={
            <>
              <Home />
       
            </>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
