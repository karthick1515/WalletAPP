import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import SendMoney from './components/SendMoney';
import Transactions from './components/Transactions';
import AddMoney from './components/AddMoney';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route> 
        <Route path="/signup" element={<SignUp/>} ></Route> 
        <Route path ="login" element={<Login/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>     
        <Route path='/sendmoney' element={<SendMoney/>}></Route> 
        <Route path='/transactions' element={<Transactions/>}></Route>
        <Route path='/addmoney' element={<AddMoney/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
