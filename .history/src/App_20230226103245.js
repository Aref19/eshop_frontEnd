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
 <Navbar />
      <Routes>
      <Routes>
      <Route path="/" 
      element ={
        <>
          <Slider/>
      <Producktslist/>
        </>
      }
      />
      <Route path="about" element={<About/>}/>
      <Route path="produckt/:producktId" element={<ProducktDetails/>}/>  {/* producktId is a dynamick varibale  */}
     </Routes>
      </Routes>

    </div>
  );
}

export default App;
