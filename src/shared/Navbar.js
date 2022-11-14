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
        <nav className='flex justify-between items-center px-5 bg-slate-100 py-2'>
            <Link to={"/"} className="text-2xl font-bold">BCS VIVA</Link>
            <div className='flex justify-between items-center gap-x-5'>
                {/* For Desktop */}
                <div className='hidden lg:flex gap-x-5'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/filter"}>Filter</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/login"} className='btn btn-primary btn-sm'>Login</NavLink>
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

            <div onClick={openHandler} className={`fixed top-14 right-2 ${open ? 'block' : 'hidden'}`}>
                <div className='flex flex-col gap-y-5 w-56 rounded-xl fixed top-14 right-2 bg-slate-100 p-4'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/filter"}>Filter</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/"}>Logout</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;