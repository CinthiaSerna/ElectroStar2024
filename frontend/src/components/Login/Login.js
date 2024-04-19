import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from'./LoginValidation';
import axios from 'axios';
import '../Styles/Style.css';

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                    alert("welcome");
                }else{
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className='body'>
            <div className='login-form'>
                <h2>Inicia Sesión</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'><strong className='titulo'>Correo</strong></label>
                        <input type='email' placeholder='Ingresa el Correo' name='email'
                        onChange={handleInput} className='controls'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor='password'><strong className='titulo'>Contraseña</strong></label>
                        <input type='password' placeholder='Ingresa su contraseña' name='password'
                        onChange={handleInput} className='controls'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <div> 
                        <button className='login-button'>Iniciar Sesión</button> 
                        <p className='terminos'>¿Aun no tienes una cuenta?</p>
                        <Link to="/signup" className='button'>Registrarme</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;