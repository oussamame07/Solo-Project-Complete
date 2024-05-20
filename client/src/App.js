import './App.css';
import {Routes,Route} from 'react-router-dom'
// import Register from './components/Register'
// import Login from './components/Login';
import Home from './components//home'
import Order from './components/Order';
import InfoOrder from './components/infoOrder';
// import AllOrder from './components/allOrder';
import Main from './components/view/Main';
// import SignIn from './components/demo';
// import SignUp from './components/demosignup';
import Slidebar from './components/demoslider';
import Account from './components/info';
import MediaCard from './components/card'
// import Onepage from './components/view/onepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/account/:id' element={<Account/>} />
        <Route path='/card' element={<MediaCard/>} />
        <Route path='/home/:id' element={<Home/>} />
        <Route path='/' element={<Main/>} />
        {/* <Route path='/home/id' element={<Onepage/>} /> */}
        {/* <Route path='/' element={<SignIn/>} /> */}
        <Route path='/allorder/:id' element={<Slidebar/>} />
        <Route path='/neworder/:id' element={<Order/>} />
        <Route path='/order/:id' element={<InfoOrder/>} />
        {/* <Route path='/login' element={<Login/>} /> */}


      </Routes>

    </div>
  );
}

export default App;
