import './App.css';
import {store} from "./actions/store"
import {Provider} from "react-redux"
import Clients from './pages/show_clients';
import { Container } from '@mui/material';
import Contact from './pages/contact';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DCandidates from './components/DCandidates';
import Login from './pages/login';


function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg"></Container>
      <Router>
    <Routes>
        <Route path='/clients' element={<Clients/>} />
        <Route path='/admin' element={<DCandidates/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </Router>
    </Provider>
  );
}

export default App;
