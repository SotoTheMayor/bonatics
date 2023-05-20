import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);

    const handleChange = (event: any) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event: any) => {
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      setFormState({
        email: '',
        password: '',
      });
    };

    // const handleError= async (event: any) => {
    //     // {error ? (
    //     //     <div>
    //     //       <p className="error-text">The provided credentials are incorrect</p>
    //     //     </div>
    //     //   ) : null}
      
    // }
  
    return (
      <main className="flex-row justify-content-center mb-4">
        <div className="col-4 col-lg-4">
          <div className="card">
            <h4 className="card-header bg-green-400 text-success p-2 text-center">Login</h4>
            <div className="justify-content-center">
            
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-block btn-info"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                    // onChange={handleError}
                  >
                    Submit
                  </button>
                </form>
                 
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Login;
  