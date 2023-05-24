import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Signup = () => {
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event: any) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="row justify-content-center align-items-center mb-4 login-cont">
                <div className="card col-4 login-card signup-card">
                    <h4 className="card-header text-center mb-4 login-header">Sign Up</h4>
                    <div className="justify-content-center">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    className="form-input col-12 p-2 mb-4 signup-input"
                                    placeholder="Your username"
                                    name="userName"
                                    type="text"
                                    value={formState.userName}
                                    onChange={handleChange}
                                />
                                <input
                                    className="form-input col-12 p-2 mb-4 signup-input"
                                    placeholder="Your email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className="form-input col-12 p-2 mb-4 signup-input"
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <div className='button-cont'>
                                <button
                                    className="p-2 signup-button button"
                                    style={{ cursor: 'pointer' }}
                                    type="submit"
                                >
                                    Submit
                                </button>
                                </div>
                            </form>
                        )}

                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
        </main>
    );
};

export default Signup;