import { useLoaderData } from "react-router-dom";
import AllJob from "../AllJob/AllJob";

const AllJobs = () => {
    const jobs = useLoaderData()
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {
                jobs?.map(job => <AllJob key={job._id} job={job}></AllJob>)
            }
        </div>
    );
};

export default AllJobs;