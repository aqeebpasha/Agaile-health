import logo from './logo.svg';
import './App.css';
import MainModule from './moduleComponents/MainModule';
import CustomerListPage from './moduleComponents/childComponents/CustomerListPage';
import BrokerBussinessListPage from './moduleComponents/childComponents/BrokerBussinessListPage';
import BrokerBusinessList from './moduleComponents/childComponents/BrokerBusinessList';
import LoginS from './LoginComponent.js/LoginS';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
     {/* <MainModule/> */}
     {/* <CustomerListPage/> */}
     {/* <BrokerBussinessListPage/> */}
     {/* <BrokerBusinessList/> */}
     {/* <LoginS/> */}

     <BrowserRouter>

     <Route exact path='/' component={LoginS}></Route>
     <Route path='/mainModule' component={MainModule}></Route>
     </BrowserRouter>
    </div>
  );
}

export default App;
