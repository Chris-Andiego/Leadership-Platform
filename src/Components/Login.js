import Footer from './Footer';
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <h1>Login Page</h1>
            <div>
              <input type='text' placeholder='User Name' className='name'/>
            </div>
            <div className='second'>
              <input type='password' placeholder='Password' className='name'/>
            </div> 
            <div className='button'>
              <button onClick={() => console.log('Clicked')}>LOGIN</button>
            </div>
            <div>
              <p className='link'>
                Don't have an account? <Link to="/Signup" >Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    );
  }
  
  export default Login;
  