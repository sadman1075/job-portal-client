import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';


const HotJob = ({ job }) => {
        useEffect(() => {
            Aos.init()
        }, [])
    const { _id, applicationDeadline, category, company, company_logo, description, hr_email, hr_name, jobType, location, requirements, responsibilities, salaryRange, status, title } = job
    return (
        <div className="card bg-base-100 w-full  shadow-xl p-4 border-2  mx-1 mt-10 mb-10" data-aos="zoom-in" data-aos-duration="2000">
            <div className="flex gap-5">
                <div>
                    <img src={company_logo} className="w-16" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{company}</h1>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}
                    <div className="badge badge-secondary">NEW</div>

                </h2>
                <div>
                    <p className="text-lg ">{jobType}</p>
                    <p></p>
                </div>
                <p>{description}</p>
                <div className="flex flex-wrap text-center gap-4 ">
                    {
                        requirements?.map(skill => <p className="p-4 font-bold bg-blue-50 text-black hover:text-purple-500" key={""}>{skill}</p>)
                    }

                </div>

                <div className="mt-4">
                    <p>Salary: {salaryRange.min} - {salaryRange.max}</p>
                </div>
                

                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`} className="btn btn-primary">Job Details</Link>
                </div>
            </div>
        </div>
    );
};

export default HotJob;