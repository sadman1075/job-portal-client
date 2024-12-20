import { Link, useLoaderData } from "react-router-dom";

const Jobdetails = () => {
    const job = useLoaderData()
    const { _id, applicationDeadline, category, company, company_logo, description, hr_email, hr_name, jobType, location, requirements, responsibilities, salaryRange, status, title } = job
    return (
        <div className="lg:w-1/2 mx-auto">
            <div className="card bg-base-100 w-full shadow-xl p-4 border-2  mx-1 mt-10 mb-10">
                <div className="flex gap-5">
                    <div>
                        <img src={company_logo} className="w-16" alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{company}</h1>
                        <p>{location}</p>
                    </div>
                </div>
                <div className="mt-4 ml-6">
                    <p className="text-3xl font-bold text-purple-600">{category}</p>
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

                    <div>
                        <h2 className="text-xl font-bold text-red-500  mt-3">Responsibility</h2>
                    </div>
                    <div>
                        <p >{responsibilities}</p>
                    </div>

                    <div className="mt-2">
                        <p className="text-xl font-bold text-red-500  ">Salary</p>
                    </div>
                    <div>
                        <p>{salaryRange.min} - {salaryRange.max}</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-xl font-bold text-red-500  ">Application DeadLine</p>
                    </div>
                    <div>
                        <p>{applicationDeadline}</p>
                    </div>
                    <div>
                    <p className="font-semibold">Hr Name: {hr_name}</p>

                    <p className="font-semibold">Hr Email Address: {hr_email}</p>

                    </div>

                    <div className="card-actions justify-between mt-4">
                        <Link to={`/job-apply/${_id}`} className="btn btn-primary">Apply Now</Link>
                        <Link to={-1} className="btn bg-black text-white">Back</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;