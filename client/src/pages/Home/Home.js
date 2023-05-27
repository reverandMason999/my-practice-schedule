import './Home.css'
import GoogleButton from 'react-google-button'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
const Home = () => {
    const navigate = useNavigate();
    
    const [state, setState] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username: state.username,
            password: state.password
        };
        axios.post('http://localhost:5000/login', userData, {withCredentials: true}).then((response) => {
            console.log(response.data)
        });
        navigate('/Profile')

    }
    const fetchAuthUser = async () => {
        const response = await axios.get('http://localhost:5000/auth/user', {withCredentials: true}).catch((err) => {
            console.log('not authenticated')
        });
            console.log('User: ', response.data)
        
    }
    const redirectToGoogleLogin = () => {
        const googleLoginUrl = 'http://localhost:5000/auth/google/callback';
        const newWindow = window.open(googleLoginUrl, '_blank', 'width=500,height=600')
        if (newWindow) {
           fetchAuthUser()
           navigate('/profile')

        }
    }

   
    return(

        <>
        <Header />
        <div className="login-card">
    <h1>login here!</h1>
        <form className='login-form' onSubmit={handleSubmit}>
        <input name='username' placeholder='username' value={state.username} onChange={handleChange} />
        <input name='password' type='password' placeholder='password' value={state.password} onChange={handleChange} />
        <button className='btn' type='submit'>submit</button>
        <h3>or</h3>
        </form>
        <GoogleButton className='google-btn' onClick={redirectToGoogleLogin}/>
         <Link to={'/Register'}><button className='register-btn'>Register here!</button></Link>
        </div>
        </>
        
    )
}

export default Home;