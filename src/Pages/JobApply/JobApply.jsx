import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const JobApply = () => {
    const { user } = useContext(AuthContext)
    const { _id, applicationDeadline, company, title } = useLoaderData()
    const navigate = useNavigate()
    const handlejobapply = (e) => {
        e.preventDefault()
        const from = e.target;
        const job_id = _id;
        const github = from.github.value;
        const linkedin = from.linkedin.value;
        const resume = from.resume.value;
        const company = from.company.value;
        const jobtype = from.jobtype.value;
        const deadline = from.deadline.value;
        const name = user.displayName;
        const email = user.email;
        const applyinfo = {
            job_id, github, linkedin, resume, company, jobtype, deadline, name, email
        }
        console.log(applyinfo)

        fetch("https://job-portal-server-kappa-tan.vercel.app/job-application", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(applyinfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You Have successfully Applied for the job",
                        icon: "success"
                    });
                    navigate(-1)
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }


            })

    }
    return (
        <div className="bg-[#F4F3F0] ">
            <div>
                <h1 className="text-4xl font-bold rancho text-center pt-8">Applying Jobs</h1>
                <h1 className="text-lg  text-center pt-6 px-2 lg:px-10">The Add New Campaign page is designed to simplify the process of creating and managing campaigns for users. It provides an intuitive interface with a structured form to capture all the essential details required for launching and managing a campaign effectively</h1>
            </div>
            <form className="card-body" onSubmit={handlejobapply}>
                <div className="lg:flex justify-center w-full gap-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github Link</span>
                        </label>
                        <input type="url" name="github" id="name" placeholder="Enter Your Github Link" className="input input-bordered lg:w-[300px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Linkedin Link</span>
                        </label>
                        <input type="url" name="linkedin" id="chef" placeholder="Enter Your Linkedin Link" className="input input-bordered lg:w-[300px]" required />

                    </div>
                </div>
                <div className="lg:flex justify-center w-full gap-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume</span>
                        </label>
                        <input type="file" name="resume" id="supplier" placeholder="Enter Your Resume" className="input input-bordered lg:w-[300px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company</span>
                        </label>
                        <input type="text" name="company" readOnly value={company} className="input input-bordered lg:w-[300px]" required />

                    </div>
                </div>
                <div className="lg:flex justify-center w-full gap-20">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <input type="text" name="jobtype" readOnly value={title} className="input input-bordered lg:w-[300px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">DeadLine</span>
                        </label>
                        <input type="text" Value={applicationDeadline} readOnly name="deadline" placeholder="Date" className="input input-bordered lg:w-[300px]" required />

                    </div>
                </div>
                <div className="lg:flex justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" readOnly value={user?.email} className="input input-bordered lg:w-[690px]" required />

                    </div>
                </div>
                <div className="lg:flex justify-center">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" value={user.displayName} className="input input-bordered lg:w-[690px]" required />

                    </div>
                </div>
                <div className="lg:flex justify-center">
                    <div className=" form-control lg:w-[690px] mt-6 ">
                        <button className="btn bg-black text-white border-2 border-[#331A15] rancho text-lg ">Apply</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default JobApply;