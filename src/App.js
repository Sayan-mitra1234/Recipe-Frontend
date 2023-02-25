import {Route,Routes,Navigate, Form} from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Form2 from "./components/Form/Form";
import './App.css';
import Logout from "./components/Form/LogOut";

function App() {
  const user=localStorage.getItem("token")
  return (
    <div className="App">
        <Routes>
            {user && <Route path="/" exact element={<Main/>}/>}
            <Route path="/signup" exact element={<Signup/>}/>
            <Route path="/login" exact element={<Login/>}/>
            <Route path="/" element={<Navigate replace to="/login"/>}/>
            <Route path="/form" exact element={<Form2/>}/>
            <Route path="/logout" exact element={<Logout/>}/>

        </Routes>
    </div>
  );
}

export default App;
