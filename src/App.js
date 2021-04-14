import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppState from "./context/AppState";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Loading from "./components/Loading";

function App() {
  return (
    <AppState>
      <Router>
        <ToastContainer />
        <Loading/>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PublicRoute exact path='/login' component={Login} />
          <PublicRoute exact path='/register' component={Register} />
        </Switch>
      </Router>
    </AppState>
  );
}

export default App;
