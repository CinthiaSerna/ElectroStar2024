import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ValidationSign from'./SignupValidation';
import axios from 'axios';

function Signup(){

    const [values, setValues] = useState({

        documento: '',
        nombre: '',
        primerApellido: '',
        segundoApellido: '',
        email: '',
        confirmarEmail: '',
        password: '',
        confirmarPassword: '',
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value }));
    }


    const handleSubmit = (event) =>{
        event.preventDefault();
        const validationErrors = ValidationSign(values);
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }

    }

    return(
        <div className='body'>
            <div className='signup-form'>
                <h2 className="registro">Registro</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <form action='' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor='documento'><strong className='titulo'>Documento</strong></label>
                                <input type='text' placeholder='Ingresa tu documento' name='documento'
                                value={values.documento}
                                onChange={handleInput} className='controls'/>
                                {errors.documento && <span className='text-danger'>{errors.documento}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='nombre'><strong className='titulo'>Nombre</strong></label>
                                <input type='text' placeholder='Ingresa tu nombre' name='nombre'
                                value={values.nombre}
                                onChange={handleInput} className='controls'/>
                                {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='apellido1'><strong className='titulo'>Primer Apellido</strong></label>
                                <input type='text' placeholder='Ingresa tu primer apellido' name='primerApellido'
                                value={values.primerApellido}
                                onChange={handleInput} className='controls'/>
                                {errors.primerApellido && <span className='text-danger'>{errors.primerApellido}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='apellido2'><strong className='titulo'>Segundo Apellido</strong></label>
                                <input type='text' placeholder='Ingresa tu segundo apellido (opcional)' name='segundoApellido'
                                value={values.segundoApellido}
                                onChange={handleInput} className='controls'/>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <p className="terminos">¿Ya tienes una cuenta?</p>
                                <Link to="/login" className='button'>Iniciar Sesión</Link>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <form action='' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor='correo'><strong className='titulo'>Correo</strong></label>
                                <input type='text' placeholder='Ingresa tu correo' name='email'
                                value={values.email}
                                onChange={handleInput} className='controls'/>
                                {errors.email && <span className='text-danger'>{errors.email}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='confirmCorreo'><strong className='titulo'>Confirmar Correo</strong></label>
                                <input type='text' placeholder='Confirma tu correo' name='confirmarEmail'
                                onChange={handleInput} className='controls'/>
                                {errors.confirmarEmail && <span className='text-danger'>{errors.confirmarEmail}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password'><strong className='titulo'>Contraseña</strong></label>
                                <input type='password' placeholder='Crea tu contraseña' name='password'
                                onChange={handleInput} className='controls'/>
                                {errors.password && <span className='text-danger'>{errors.password}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='confirmPassword'><strong className='titulo'>Contraseña</strong></label>
                                <input type='password' placeholder='Confirma tu contraseña' name='confirmarPassword'
                                onChange={handleInput} className='controls'/>
                                {errors.confirmarPassword && <span className='text-danger'>{errors.confirmarPassword}</span>}
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type='submit' className='login-button'>Registrarme</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;

