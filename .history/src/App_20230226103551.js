import './App.css';
import Login from './component/Login'
import UserSignIn from './component/UserSignIn'
import ProviderSign from './component/ProviderSignIn'
import ReactDOM from "react-dom/client";
import Navbar from "./component/Navbar"
import { Route, Routes ,Router} from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route 
          path="/"
            element={<Login /> }
          />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
