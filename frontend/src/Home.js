import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='d-flex justify-content-center'>
        <p className="mt-2 text-center">Volver al inicio</p>
        <Link to="/login" className='btn btn-default bg-light text-decoration-none'>Volver</Link>
    </div>
  );
}

export default Home;
