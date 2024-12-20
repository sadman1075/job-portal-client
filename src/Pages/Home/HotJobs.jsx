import { useQuery } from "@tanstack/react-query";
import HotJob from "./HotJob";

const HotJobs = () => {

    const { data: jobs } = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => {
            const res = await fetch("https://job-portal-server-kappa-tan.vercel.app/jobs")
            const data = res.json();
            console.log(data)
            return data;
        }
    })
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">JOBS</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    jobs?.map(job => <HotJob key={job._id} job={job}></HotJob>)
                }
            </div>
        </div>
    );
};

export default HotJobs;