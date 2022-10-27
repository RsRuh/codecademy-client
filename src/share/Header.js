import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import '../style/Header.css'
import img from '../assets/brain.png'
import toast from 'react-hot-toast';
import { FaUser } from "react-icons/fa";


const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);

    console.log(user);

    const handleLogOut = () => {
        userLogOut()
            .then(result => {
                toast.success('Successfully LogOut!')
             })
            .catch(error => console.error(error))
    }

    let arr = [true, false, false, false, false, false]
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text, setText] = useState("");

    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    }

    const setSelectedText = (txt) => {
        setText(txt);
        setDropDown(true);
    }
    return (
        <div>
            <div className="bg-white rounded shadow-lg py-5 px-7">
                <nav className="flex justify-between">
                    <Link to='/' className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <img src={img} className="cursor-pointer" width={34} height={34} viewBox="0 0 34 34" fill="none" alt="" />
                        <h2 className="font-normal md:text-2xl leading-6 text-gray-800">Codecademy</h2>
                    </Link>
                    {/* For medium and plus sized devices */}
                    <div className="hidden md:flex flex-auto space-x-2">
                        <Link to='/' onClick={() => selected(0)} className={`${style[0] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:hidden cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Collections</Link>
                        <Link to='/courses' onClick={() => selected(1)} className={`${style[1] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Courses</Link>
                        <Link to='/faq' onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>FAQ</Link>
                        <Link to='/blog' onClick={() => selected(3)} className={`${style[3] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Blog</Link>
                        <Link to='/' onClick={() => selected(4)} className={`${style[4] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>About Us</Link>
                        <Link to='/' onClick={() => selected(5)} className={`${style[5] ? 'text-white bg-indigo-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Success</Link>
                        <label className="swap swap-rotate">
                            <input type="checkbox" />
                            <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>



                    <div className=" flex md:space-x-5 justify-center items-center pl-2">

                        <>
                            {
                                user?.uid ?
                                    <>
                                        <div className="cursor-pointer tooltip-bottom tooltip" data-tip={user?.displayName}>
                                            {user?.photoURL ?
                                                <img src={user?.photoURL} className="headerPhoto rounded-full h-6 md:h-8" alt="" /> : <FaUser/>} 
                                        </div>
                                        <div>
                                            <h3 className='font-semibold text-[10px] lg:text-xl'>{user?.displayName}</h3>
                                        </div>
                                        <button onClick={handleLogOut} className='focus:outline-none focus:ring-2 focus:ring-offset-2  cursor-pointer md:px-3 py-2.5 font-normal text-[10px] md:text-xs leading-3 shadow-md rounded'>Logout</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='focus:outline-none focus:ring-2 focus:ring-offset-2  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded'>Login</Link>
                                        <Link to='/register' className='focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded'>Register</Link>
                                    </>
                            }
                        </>
                    </div>
                </nav>
                {/* for smaller devcies */}
                <div className="block md:hidden w-full mt-5 ">
                    <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                            <span id="s1" className={`${text.length != 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{text ? text : "Collections"}</p>
                        </div>
                        <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className=" relative">
                        <ul id="list" className={`${dropDown ? 'hidden' : 'block'} z-10 font-normal text-base leading-4 absolute top-2 z-0  w-full rounded shadow-md`}>
                            <li onClick={() => setSelectedText("Courses")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal "><Link className='pr-40' to='/courses'>Courses</Link></li>
                            <li onClick={() => setSelectedText("FAQ")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"><Link className='pr-40' to='/faq'>FAQ</Link></li>
                            <li onClick={() => setSelectedText("Blog")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"><Link className='pr-40' to='/'>Blog</Link></li>
                            <li onClick={() => setSelectedText("About Us")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"><Link className='pr-40' to='/'>About Us</Link></li>
                            <li onClick={() => setSelectedText("Success")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"><Link className='pr-40' to='/'>Success</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;