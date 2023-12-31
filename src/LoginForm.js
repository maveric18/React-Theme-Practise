import React from 'react'
import useLocalStorage from 'use-local-storage';

const LoginForm = () => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

  return (
    <>
      <div className="app" data-theme={theme}>
      <div className='login'>
        <h3>Log in into your Udemy account</h3>
        <div className='container'>
          <div className='top'>
            <i className='fab fa-google'></i>
            <i className='fab fa-facebook-square'></i>
            <i className='fab fa-linkedin'></i>
            <i className='fab fa-twitter-square'></i>
            <i className='fab fa-apple'></i>
          </div>
          <p className='divider'>
            <span>Or</span>
          </p>
          <form >
            <label>Email</label>
            <input type='email' placeholder='Enter your Email'/>
            <label>Password</label>
            <input type='password' placeholder='Enter your Password'/>
            <div className='remember'>
              <input type='checkbox' checked='checked' />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className='bottom'>
            <p>Forgot your password?</p>
            <a href='/'>Reset Password</a>
          </div>
          <p className='create'>Create Account</p>
        </div>
        <div className='theme-toggle'>
          <h2>Light Theme</h2>
          <i onClick={switchTheme} class='fas fa-toggle-on'></i>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginForm;
