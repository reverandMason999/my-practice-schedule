import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import './Register.css'
import Header from "../../components/Header/Header"

const Register = () => {
    const navigate = useNavigate()
    
    const [state, setState] = useState({
        username: '',
        email:'',
        password:''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username: state.username,
            email: state.email,
            password: state.password
        };
        axios.post('http://localhost:5000/register', userData, { withCredentials: true}).then((response) => {
            console.log(response.data)
        });
        navigate('/Profile')
        
    }
    
    
    return (
        <>
        <Header />
        <div className="register-card" >
        <h3>Register now!</h3>
            <form method='post'  onSubmit={handleSubmit} className="registration-form" >
                <label>username:</label>
                <input type='text' value={state.username} name="username" placeholder="username" onChange={handleChange}/>
                <label>email:</label>
                <input type ='text' value={state.email} name="email"  placeholder="email" onChange={handleChange}/>
                <label>password:</label>
                <input type='password' value ={state.password} name="password" placeholder="password" onChange={handleChange}/>
                <button type="submit">submit</button>
            </form>
        </div>
        </>
    )
}

export default Register;