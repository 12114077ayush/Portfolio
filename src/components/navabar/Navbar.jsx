import { motion } from "framer-motion"
import "./navbar.scss"
import Sidebar from "../../sidebar/Sidebar";
const Navbar = () => {


    return (
        <div className="navbar" >
            {/* sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span initial={{ opacity: 0.5, scale: 0.1 }} animate={{ opacity: 1.5, scale: 1 }} transition={{ duration: 1 }} >Ayush choudhary </motion.span>
                <div className="social">
                    <a href="https://github.com/12114077ayush" className=""><img src="/GitHub.png" alt="" /></a>
                    <a href="https://instagram.com/ayushchoudhary469?igshid=YzdlaTI1bGd5c3Jl" className=""><img src="/instagram.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/ayush-choudhary-baa36a278/" className=""><img src="/linkdin.png" alt="" /></a>

                </div>
            </div>
        </div>
    );
}

export default Navbar;