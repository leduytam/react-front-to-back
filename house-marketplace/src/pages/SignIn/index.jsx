import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../../assets/svg/visibilityIcon.svg';
import routes from '../../routes';

function SignIn() {
  const [isShowPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p>
        </header>

        <form>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={handleChange}
          />

          <div className='passwordInputDiv'>
            <input
              type={isShowPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={handleChange}
            />

            <img
              src={visibilityIcon}
              alt='Show password'
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link to={routes.forgotPassword.path} className='forgotPasswordLink'>
            Forgot Password
          </Link>

          <div className='signInBar'>
            <p className='signInText'>Sign In</p>
            <button className='signInButton'>
              <ArrowRightIcon fill='fff' width='34px' height='34px' />
            </button>
          </div>
        </form>

        <Link to={routes.signUp.path} className='registerLink'>
          Don't have an account?
        </Link>
      </div>
    </>
  );
}

export default SignIn;
