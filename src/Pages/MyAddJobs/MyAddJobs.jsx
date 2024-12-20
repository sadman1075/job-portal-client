import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import MyAddJob from "../MyAddJob/MyAddJob";
import toast from "react-hot-toast";

const MyAddJobs = () => {
  const { user } = useContext(AuthContext)
  const { data: jobs } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch(`https://job-portal-server-kappa-tan.vercel.app/all-jobs?email=${user.email}`)
      const data = res.json()
      console.log(data)
      return data;

    }

  })

  return (
    <div>
      {
        jobs?.length == 0 ? <p className="text-center font-bold text-5xl text-red-400">Your are not added any job</p> : <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">

          {
            jobs?.map(job => <MyAddJob job={job} key={job._id}></MyAddJob>)
          }
        </div>
      }
    </div>
  );
};

export default MyAddJobs;