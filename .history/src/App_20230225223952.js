import './App.css';
import Login from './component/Login'
import UserSignIn from './component/UserSignIn'
import ProviderSign from './component/ProviderSignIn'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },

  {
    path: "/signIn",
    element: <UserSignIn/>,
  },

  {
    path: "/signIn",
    element: <ProviderSign/>,
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
