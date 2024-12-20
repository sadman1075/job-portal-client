import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Jobdetails from "../Pages/JobDetails/Jobdetails";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJobs from "../Pages/AddJobs/AddJobs";
import AllJobs from "../Pages/AllJobs/Alljobs";
import MyAddJobs from "../Pages/MyAddJobs/MyAddJobs";
import ViewApplication from "../Pages/ViewApplication/ViewApplication";
import About from "../Pages/Home/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts></Layouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoutes><Jobdetails></Jobdetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://job-portal-server-kappa-tan.vercel.app/jobs/${params.id}`)
            },
            {
                path: "/job-apply/:id",
                element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://job-portal-server-kappa-tan.vercel.app/jobs/${params.id}`)

            },
            {
                path: "/myapplication",
                element: <PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>,
            },
            {
                path: "/add-jobs",
                element: <PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
            },
            {
                path: "/all-jobs",
                element: <AllJobs></AllJobs>,
                loader: () => fetch("https://job-portal-server-kappa-tan.vercel.app/all-jobs")
            },
            {
                path: "/my-add-jobs",
                element: <MyAddJobs></MyAddJobs>
            },
            {
                path: "/view-application/:job_id",
                element: <PrivateRoutes><ViewApplication></ViewApplication></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://job-portal-server-kappa-tan.vercel.app/job-application/jobs/${params.job_id}`)
            }
        ]
    }
])