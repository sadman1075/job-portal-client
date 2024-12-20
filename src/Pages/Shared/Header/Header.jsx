import { useContext } from "react";
import logo from "../../../../public/logo.png"
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import toast from "react-hot-toast";

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handalelogout = () => {
        logout()
            .then(result => {
                toast.success("Successfully Logout")
                navigate("/login")

            })
            .catch(error=>{
                toast.success(error.message)
            })
    }
    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to={"/myapplication"}>My Application</Link></li>
        <li><Link to={"/add-jobs"}>Add Jobs</Link></li>
        <li><Link to={"/all-jobs"}>All Jobs</Link></li>
        <li><Link to={"/my-add-jobs"}>My Add Jobs</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <img className="w-20" src={logo}></img>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user ? <Link onClick={handalelogout} className="btn bg-black text-white">Logout</Link> : <>
                        <Link to={"/register"} className="">Registration</Link>
                        <Link to={"/login"} className="btn btn-primary">Sign In</Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Header;