import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';



function Home() {
  let navigate = useNavigate()
    return (
         
      <div className='items-center text-center'>
        <h2 className='text-slate-900 text-5xl m-4'>Home</h2>
        <div>

          <button onClick={() => { navigate('/login')}}>
            Login useNavigate
            </button>
            <Link to='/login' className='hover:underline mx-4'>Login por Link</Link>
        </div>

      </div>
    );
}

export default Home;