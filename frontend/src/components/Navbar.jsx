import logo from "../images/logo.svg";
import menuIcon from "../images/icon-menu.svg"
import closeIcon from "../images/icon-close.svg"
import { Link, NavLink } from 'react-router-dom';
import { useState, useContext } from "react";
import { AppContext } from "../AppContext";

const Navbar = () => {
    const { cartItem } = useContext(AppContext);
    const [openList, setOpenList] = useState(false);
    const openMenu = () => {
        if (!openList) {
            document.body.style.overflow = "hidden"
            setOpenList(true)
        }
    }
    const closeMenu = () => {
        if (openList) {
            document.body.style.overflow = "auto"
            setOpenList(false)
        }
    }
    return (
        <div className="sm:max-w-[75rem] mx-auto navbar bg-base-100 shadow-xl rounded-xl">
            <div className="flex-1 gap-4 sm:gap-6">
                <div>
                    <img tabIndex={0} role="button" className={`sm:hidden cursor-pointer pt-1`} onClick={openMenu} src={menuIcon} alt="open-menu-icon" />
                </div>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <ul tabIndex={0} className={` ${openList ? "block" : "hidden"} p-4 *:text-2xl *:pb-4 sm:*:pb-0 sm:*:text-lg sm:flex gap-2 *:cursor-pointer fixed top-[0] z-10 bg-slate-100 sm:bg-transparent sm:top-0 sm:static w-[15rem] h-full left-0`}>
                    <img onClick={closeMenu} className=" sm:hidden cursor-pointer" src={closeIcon} alt="close-menu-icon" />
                    <NavLink to="/"><li className='py-1 sm:px-4 rounded-lg transition duration-700 ease-out' onClick={closeMenu}>Men</li></NavLink>
                    <NavLink to="/womenshoes"><li className='py-1 sm:px-4 rounded-lg transition duration-700 ease-out' onClick={closeMenu}>Women</li></NavLink>
                    <NavLink to="/about"><li className='py-1 sm:px-4 rounded-lg transition duration-700 ease-out'>About</li></NavLink>
                    <NavLink to="/contact"><li className='py-1 sm:px-4 rounded-lg transition duration-700 ease-out'>Contact</li></NavLink>
                </ul>
            </div>
            <div className="flex-none">
                <div>
                    <Link to="/cart">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero" /></svg>
                                {cartItem.length === 0 ?
                                    <span className="hidden"></span> :
                                    <span className="badge badge-sm indicator-item bg-[#ff5900] text-white font-bold">{cartItem.length}</span>
                                }
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
