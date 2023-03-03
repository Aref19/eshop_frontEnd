import './App.css';
import Login from './component/Login'
import SignIn from './component/SignIn'
import ProviderSign from './component/ProviderSignIn'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <div className="App">
     <Login/>
    </div>
  );
}

export default App;
