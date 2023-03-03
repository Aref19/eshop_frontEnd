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
    element: <Login>,
  },

  {
    path: "/path",
    element: <div>Hello Path</div>,
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
