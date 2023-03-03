import './App.css';
import Login from './component/Login'
import SignIn from './component/SignIn'
import ProviderSign from './component/ProviderSignIn'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

  {
    path: "/pat",
    element: <div>Hello world!</div>,
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
