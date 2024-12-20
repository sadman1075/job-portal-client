import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";

const AddJobs = () => {
    const { user } = useContext(AuthContext)

    const handleAddJobs = (e) => {
        e.preventDefault()
        const from = e.target;
        const company = from.companyName.value;
        const company_logo = from.companyLogo.value;
        const jobType = from.jobType.value;
        const title = from.jobTitle.value;
        const location = from.location.value;
        const applicationDeadline = from.deadLine.value;
        const category = from.category.value;
        const newrequirements = from.requirements.value;
        const min = parseInt(from.min.value);
        const max = parseInt(from.max.value);
        const currency = from.currency.value;
        const description = from.description.value;
        const hr_name = from.name.value;
        const hr_email = from.email.value
        const newresponsibility = from.responsibility.value;
        const responsibilities = newresponsibility.split("\n")
        const requirements = newrequirements.split("\n")
        const addjobdetails = {
            company, company_logo, title, jobType, location, applicationDeadline, category, requirements,
            salaryRange: { min, max, currency }, responsibilities, description, hr_name, hr_email
        }
        console.log(addjobdetails)

        fetch("https://job-portal-server-kappa-tan.vercel.app/jobs", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addjobdetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully posted!",
                        icon: "success"
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }

                from.reset()

            })

    }
    return (
        <div className="bg-[#F4F3F0] ">
            <div>
                <h1 className="text-4xl font-bold rancho text-center pt-8">Add New Jobs</h1>
                <h1 className="text-lg  text-center pt-6 px-2 lg:px-10">
                    The "Add Job" section is designed to simplify the process of posting job opportunities for recruiters and employers. It provides an intuitive and user-friendly interface for entering job details such as job title, description, required skills, location, salary range, and job type (full-time, part-time, remote, etc.). Employers can also add company information, including the company name, logo, and contact details, to enhance visibility and credibility. The section allows customization by specifying job categories, experience levels, and application deadlines</h1>
            </div>
            <form className="card-body" onSubmit={handleAddJobs}>
                <div className="lg:flex justify-center w-full gap-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="text" name="companyName" id="name" placeholder="Enter Your Company Name" className="input input-bordered lg:w-[300px]" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company image</span>
                        </label>
                        <input type="text" name="companyLogo" id="name" placeholder="Enter Your Company image" className="input input-bordered lg:w-[300px]" required />
                    </div>
                </div>
                <div className="lg:flex justify-center w-full gap-20">
                    <div className="form-control lg:w-[300px]">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select className="select select-ghost border-1 border-gray-300 bg-white w-full " name="jobType" required>
                            <option disabled selected>Select The job type</option>
                            <option>Full-Time</option>
                            <option>Part-Time</option>
                            <option>Intern</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="jobTitle" id="chef" placeholder="Enter Your Job Title" className="input input-bordered lg:w-[300px]" required />

                    </div>
                </div>
                <div className="lg:flex justify-center w-full gap-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name="location" id="supplier" placeholder="Enter Your Company Location" className="input input-bordered lg:w-[300px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Dead Line</span>
                        </label>
                        <input type="date" name="deadLine" className="input input-bordered lg:w-[300px]" required />

                    </div>
                </div>
                <div className="lg:flex justify-center w-full gap-20">
                    <div className="form-control lg:w-[300px]">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select select-ghost border-1 border-gray-300 bg-white w-full " name="category" required>
                            <option disabled selected>Select The Category type</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Teaching</option>
                            <option>Finance</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Requirements</span>
                        </label>
                        <textarea type="text" name="requirements" placeholder="Enter the requirements for this job" className="textarea textarea-bordered lg:w-[300px]" required />

                    </div>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text lg:mx-72">Salary</span>
                    </label>
                    <div className=" lg:flex justify-center lg:gap-4 lg:mx-[270px]">
                        <input type="number" name="min" placeholder="Enter the min salary " className="input input-bordered w-full mt-4 lg:mt-0" required />
                        <input type="number" name="max" placeholder="Enter the max salary " className="input input-bordered w-full mt-4 lg:mt-0" required />
                        <select className="select select-ghost border-1 border-gray-300 bg-white w-full " name="currency" required>
                            <option disabled selected>Select The Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>

                        </select>
                    </div>
                </div>
                <div className="lg:flex justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" name="description" placeholder="Add description" className="textarea textarea-bordered lg:w-[690px]" required />

                    </div>
                </div>
                <div className="lg:flex justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Responsibility</span>
                        </label>
                        <textarea type="text" name="responsibility" placeholder="Add Responsibility" className="textarea textarea-bordered lg:w-[690px]" required />

                    </div>
                </div>

                <div className="lg:flex justify-center w-full gap-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Hr Name</span>
                        </label>
                        <input type="text" name="name" id="name" value={user?.displayName} className="input input-bordered lg:w-[300px]" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Hr Email</span>
                        </label>
                        <input type="text" name="email" id="name" value={user?.email} className="input input-bordered lg:w-[300px]" required />
                    </div>
                </div>
                <div className="lg:flex justify-center">
                    <div className=" form-control lg:w-[690px] mt-6 ">
                        <button className="btn bg-black text-white border-2 border-[#331A15] rancho text-lg ">Add Job</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddJobs;