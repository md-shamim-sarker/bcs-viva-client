import React from 'react';
import login from '../../assets/login.svg';
import {FcGoogle} from 'react-icons/fc';
import {SiFacebook} from 'react-icons/si';
import Navbar from '../../shared/Navbar';
import {Link} from 'react-router-dom';

const Login = () => {
    const formController = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password};
        console.log(user);
    };
    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10 mt-16">
                    <div className="flex justify-center w-full">
                        <img src={login} alt="login_image" className='w-[32.9rem]' />
                    </div>
                    <div className="w-full card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className='text-center text-2xl font-bold'>LOGIN</h2>
                            <form onSubmit={formController}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <button onClick={formController} className="label-text-alt link link-hover">Forgot password?</button>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                    <div className='flex gap-x-1 justify-center mt-2'>
                                        <span>You don't have an account?</span>
                                        <Link to={"/register"} className="hover:underline text-blue-600 font-bold">Register</Link>
                                    </div>
                                </div>
                            </form>
                            <div className="divider">Or Login With</div>
                            <div className='flex justify-center gap-3'>
                                <FcGoogle className='w-5 h-5 cursor-pointer' title='Login with Google'></FcGoogle>
                                <SiFacebook className='w-5 h-5 text-blue-600 cursor-pointer' title='Login with Facebook'></SiFacebook>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;