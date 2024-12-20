import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const ViewApplication = () => {
    const applicants = useLoaderData()
    console.log(applicants)

    const handleStatusChange = (e, id) => {
        console.log(e.target.value, id)

        const data = {
            status: e.target.value
        }

        fetch(`https://job-portal-server-kappa-tan.vercel.app/job-application/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success("successfully updated")
                }
                else {
                    toast.error("oppss Something wrong")
                }
            })

    }

    return (
        <div>
            <h1>View Application</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applicants?.map(applicant => <><tr key={applicant._id}>

                                <td>{applicant.email}</td>
                                <td>{applicant.jobtype}</td>
                                <td>
                                    <select onChange={(e) => handleStatusChange(e, applicant._id)} className="select select-bordered select-sm w-full max-w-xs" defaultValue={applicant.status || "Change Status"}>
                                        <option disabled selected>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr> </>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;