import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from'./LoginValidation';
import axios from 'axios';


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
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-4 rounded w-25'>
                <h2>Inicia Sesión</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Correo</strong></label>
                        <input type='email' placeholder='Ingresa el Correo' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Contraseña</strong></label>
                        <input type='password' placeholder='Ingresa su contraseña' name='password'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <div> 
                        <button className='btn btn-success w-100 rounded-0'>Iniciar Sesión</button> 
                        <p className='mt-3'>¿Aun no tienes una cuenta? Regístrate</p>
                        <Link to="/signup" className='btn btn-default w-100 bg-light rounded-0 text-decoration-none'>Registrarme</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;