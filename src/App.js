import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Heder from './components/Header/Heder';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Edit from './pages/Edit/Edit';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
    return (
      <>
      <Heder/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/edit:id' element={<Edit/>} />
          <Route path='/userprofile/:id' element={<Profile/>}/>
        </Routes>
      </>
    );
  }

export default App;
