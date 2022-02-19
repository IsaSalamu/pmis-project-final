import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/navbar';
import Layout from './components/layout/Layout'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import NavbarTab from './components/layout/Navs/NavbarTab';
import Footer from './components/layout/Navs/Footer';
import RegiserClient from './components/layout/registerCliet';
import Receiving from './components/layout/receiving';
import Candling from './components/layout/candling';
import Dashboard from './components/layout/dashboard';
import FooterComponent from './components/layout/footerComponent';
import ListOfClients from './components/layout/listOfClients';
import Recieve from './components/layout/recieve';
import Clients from './components/layout/Clients';
import NewNavbar from './components/layout/NewNavbar';
function App() {
  return (
    <div className='overral-css'>
      <Router>
        <div className='row'>
          <NewNavbar/>
          {/* <Navbar /> */}
          {/* <RegiserClient /> */}

          <div className='col-md-12'>
            <Routes>


              <Route path='/dashboard' exact element={<Dashboard />} />
              <Route path='/' exact element={<Dashboard />} />
              <Route path='/clients-list' exact element={<Clients/>} />
              <Route path='/receiving' exact element={<Receiving />} />
              <Route path='/register' exact element={<RegiserClient />} />
              <Route path='/candling' exact element={<Candling />} />
              <Route path='/collecting' exact element={<Candling />} />
              <Route path='/batch' exact element={<Candling />} />
              <Route path='/feed' exact element={<Candling />} />
              <Route path='/vaccination' exact element={<Candling />} />
              <Route path='/receive' exact element={<Recieve/>} />

            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
