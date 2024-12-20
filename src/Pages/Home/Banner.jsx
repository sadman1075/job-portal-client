import { motion } from "framer-motion";
import job1 from "../../../public/job 1.jpg"
import job2 from "../../../public/job 2.jpg"

const Banner = () => {
    return (
        <div className="hero min-h-[500px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="lg:w-1/2">
                    <motion.img
                        animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 10, delay: 1, repeat: Infinity }}
                        src={job1}
                        className="w-96 max-w-xs lg:max-w-sm lg:w-96 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-b-4 border-l-4 border-blue-400" />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 0, repeat: Infinity }}
                        src={job2}
                        className="w-60 max-w-sm lg:w-96 lg:h-60 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-b-4 border-l-4 border-blue-400" />
                </div>
                <motion.div className="lg:w-1/2" animate={{y:-20}} transition={{duration:3}}>
                    <motion.h1  className="text-5xl font-bold" transition={{duration:10,delay:1}}>Get The Right <motion.span animate={{color:["#fb923c","#22c55e","#a855f7"]}} transition={{duration:10,repeat:Infinity}}>Jobs</motion.span> <br /> For You !</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;