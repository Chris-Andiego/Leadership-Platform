import Footer from './Footer';
import './Signup.css';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
    <>
      <div className="main">
        <div className="sub-smain">
          <div>
            <h1>Sign Up</h1>
            <div>
              <input type='text' placeholder='User Name' className='name'/>
            </div>
            <div className='second'>
              <input type='text' placeholder='Rank' className='name'/>
            </div>
            <div className='second'>
              <input type='password' placeholder='Password' className='name'/>
            </div>
            <div className='second'>
              <input type='password' placeholder='Confirm Password' className='name'/>
            </div> 
            <div className='button'>
              <button onClick={() => console.log('Clicked')}>SIGN UP</button>
            </div>
            <div>
              <p className='link'>
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    );
  }
  
  export default SignUp;
  