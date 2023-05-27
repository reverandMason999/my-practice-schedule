import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home/Home'
import LoginSuccess from './pages/Login/LoginSuccess'
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
function App() {
    return(
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='Register' element={<Register />} />
                    <Route path='/Login/Success' element={<LoginSuccess />} />
                    <Route path='/Profile' element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
  
}

export default App;
