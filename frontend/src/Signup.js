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
        <div className='bg-primary vh-100 d-flex justify-content-center align-items-center'>
            <div className='bg-white p-4 rounded w-50'>
                <h2 className="text-center mb-4">Registro</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <form action='' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor='documento'><strong>Documento</strong></label>
                                <input type='text' placeholder='Ingresa tu documento' name='documento'
                                value={values.documento}
                                onChange={handleInput} className='form-control rounded-0'/>
                                {errors.documento && <span className='text-danger'>{errors.documento}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='nombre'><strong>Nombre</strong></label>
                                <input type='text' placeholder='Ingresa tu nombre' name='nombre'
                                value={values.nombre}
                                onChange={handleInput} className='form-control rounded-0'/>
                                {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='apellido1'><strong>Primer Apellido</strong></label>
                                <input type='text' placeholder='Ingresa tu primer apellido' name='primerApellido'
                                value={values.primerApellido}
                                onChange={handleInput} className='form-control rounded-0'/>
                                {errors.primerApellido && <span className='text-danger'>{errors.primerApellido}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='apellido2'><strong>Segundo Apellido (opcional)</strong></label>
                                <input type='text' placeholder='Ingresa tu segundo apellido' name='segundoApellido'
                                value={values.segundoApellido}
                                onChange={handleInput} className='form-control rounded-0'/>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <p className="mt-2 text-center">¿Ya tienes una cuenta?</p>
                                <Link to="/login" className='btn btn-default bg-light text-decoration-none'>Iniciar Sesión</Link>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <form action='' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor='correo'><strong>Correo</strong></label>
                                <input type='text' placeholder='Ingresa tu correo' name='email'
                                value={values.email}
                                onChange={handleInput} className='form-control rounded-0'/>
                                {errors.email && <span className='text-danger'>{errors.email}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='confirmCorreo'><strong>Confirmar Correo</strong></label>
                                <input type='text' placeholder='Confirma tu correo' name='confirmarEmail'
                                onChange={handleInput} className='form-control rounded-0'/>
                                {errors.confirmarEmail && <span className='text-danger'>{errors.confirmarEmail}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password'><strong>Contraseña</strong></label>
                                <input type='password' placeholder='Crea tu contraseña' name='password'
                                onChange={handleInput} className='form-control rounded-0'/>
                                {errors.password && <span className='text-danger'>{errors.password}</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='confirmPassword'><strong>Confirmar Contraseña</strong></label>
                                <input type='password' placeholder='Confirma tu contraseña' name='confirmarPassword'
                                onChange={handleInput} className='form-control rounded-0'/>
                                {errors.confirmarPassword && <span className='text-danger'>{errors.confirmarPassword}</span>}
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type='submit' className='btn btn-success me-3'>Registrarme</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;

