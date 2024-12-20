import Lottie from "lottie-react";
import register_lottie from "../../assets/Register_lottie/Animation - 1734093605552.json";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { googlesignin, createUser } = useContext(AuthContext)
    const navigate=useNavigate(

    )
    const handlegooglesignin = () => {

        googlesignin()
            .then(result => {
                toast.success("successfully Sign Up")
                navigate("/")
                
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const registerinfo = {
            name, email, password
        }
        console.log(registerinfo)

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
           return toast.error("Password contains Minimum six characters, at least one uppercase letter, one lowercase letter and one number")
        }
        createUser(email,password)
        .then(result=>{
            toast.success("successfully Sign up")
            navigate("/")
        })
        .catch(error=>{
            toast.error(error.message)
        })

    }

    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96 ">
                    <Lottie animationData={register_lottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                    <h1 className="text-5xl font-bold mt-4 text-center">Register now!</h1>

                    <form className="card-body" onSubmit={handleRegistration}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text " name="name" placeholder="Enter your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white">Register</button>
                        </div>
                        <div className="divider">Or</div>
                        <div className="form-control  ">
                            <button onClick={handlegooglesignin} className="btn bg-black text-white "><FcGoogle />Sign in with Google</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;