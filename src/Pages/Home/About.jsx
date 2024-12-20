import { Link } from "react-router-dom";
import about from "../../../public/job 1.jpg"
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="mb:-10 mt-10 lg:mt-24 lg:mb-32" data-aos="zoom-in" data-aos-duration="2000">
            <div className="hero bg-base-100 ">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-1/2">
                        <img
                            src={about}
                            className=" rounded-lg w-full  " />
                    </div>
                    <div className="w-full lg:w-1/2 lg:ml-10">
                        <h1 className="text-5xl font-bold ">About Our Website</h1>
                        <p className="py-6 text-justify">
                            A job portal app is a digital platform designed to connect job seekers with employers, streamlining the recruitment process for both parties. 
                        </p>
                        <h1 className="text-xl font-bold">How You Can Use Job Portal</h1>
                        <p className="mt-3  text-justify">

                            Using a job portal app is simple and efficient for both job seekers and employers. Job seekers start by downloading the app, creating an account, and building a detailed profile that includes their resume, skills, and work experience. They can then search for jobs using filters such as location, industry, or job type and apply directly through the app. The app also allows them to track application statuses and communicate with recruiters via in-app messaging. 
                        </p>
                        <Link to={"/donation-campaigns"} className="btn bg-black text-white  mt-6">Donate Campaigns</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;