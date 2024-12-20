import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";

const MyApplications = () => {
    const [myapplications, setmyapplication] = useState()
    const { user } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`https://job-portal-server-kappa-tan.vercel.app/job-application?email=${user.email}`, { withCredentials: true })
            .then(res => setmyapplication(res.data))

    }, [])
    return (
        <div className="mt-10 mb-20">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th>Dead line</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myapplications?.map(myapplication => <>
                            
                                <tr>

                                    <td>{myapplication.company}</td>
                                    <td>{myapplication.jobtype}</td>
                                    <td>{myapplication.deadline}</td>
                                    <td className={`${myapplication.status == "Hired" ? "text-green-500 font-bold" : "text-red-500 font-bold"}`}>{myapplication.status ? myapplication.status : "Cheaking"}</td>
                                </tr>

                            </>)
                        }



                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyApplications;