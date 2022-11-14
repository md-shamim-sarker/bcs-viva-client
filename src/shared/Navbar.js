import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const openHandler = () => {
        setOpen(!open);
        console.log(open);
    };

    return (
        <nav className='w-full flex justify-between items-center px-5 bg-blue-200 py-2 fixed z-50'>
            <Link to={"/"} className="text-2xl font-bold">BCS VIVA</Link>
            <div className='flex justify-between items-center gap-x-5'>
                {/* For Desktop */}
                <div className='hidden lg:flex gap-x-5 items-center font-bold'>
                    <NavLink to={"/"} className={({isActive}) => isActive ? 'text-blue-800' : undefined}>
                        Home
                    </NavLink>
                    <NavLink to={"/filter"} className={({isActive}) => isActive ? 'text-blue-800' : undefined}>
                        Filter
                    </NavLink>
                    <NavLink to={"/my-questions"} className={({isActive}) => isActive ? 'text-blue-800' : undefined}>
                        My Questions
                    </NavLink>
                    <NavLink to={"/add-questions"} className={({isActive}) => isActive ? 'text-blue-800' : undefined}>
                        Add Questions
                    </NavLink>
                    <NavLink to={"/about"} className={({isActive}) => isActive ? 'text-blue-800' : undefined}>
                        About
                    </NavLink>
                    <NavLink to={"/login"} className='btn btn-primary btn-sm'>
                        Login
                    </NavLink>
                </div>

                {/* For Mobile */}
                {
                    open && <Link to={"/login"} className='btn btn-primary btn-sm'>Login</Link>
                }
                <button onClick={openHandler} className="block lg:hidden">
                    {
                        open
                            ? <GrClose className='w-5 h-5'></GrClose>
                            : <FaBars className='w-5 h-5'></FaBars>
                    }
                </button>
            </div>

            <div onClick={openHandler} className={`fixed top-14 right-2 z-50 ${open ? 'block' : 'hidden'}`}>
                <div className='flex flex-col w-56 rounded-xl fixed top-14 z-96 right-2 bg-blue-200 overflow-hidden font-bold'>
                    <NavLink to={"/"} className={`w-full pl-5 py-2`}>
                        Home
                    </NavLink>
                    <NavLink to={"/filter"} className={`w-full pl-5 py-2`}>
                        Filter
                    </NavLink>
                    <NavLink to={"/my-questions"} className={`w-full pl-5 py-2`}>
                        My Questions
                    </NavLink>
                    <NavLink to={"/add-questions"} className={`w-full pl-5 py-2`}>
                        Add Questions
                    </NavLink>
                    <NavLink to={"/about"} className={`w-full pl-5 py-2`}>
                        About
                    </NavLink>
                    <NavLink to={"/"} className={`w-full pl-5 py-2`}>
                        Logout
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;