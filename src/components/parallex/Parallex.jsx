import "./parallex.scss"
import { motion } from "framer-motion"



const Parallex = ({ type }) => {
    return (
        <div className="parallex" style={{ background: type === "My skills" ? "linear-gradient(180deg,#0c0c1d,#333357)" : "linear-gradient(180deg,#333357,#0c0c1d)" }}>
            <motion.h1 initial={{
                opacity: 0,
                scale: 0.5
            }} whileInView={{ opacity: 1, scale: 1.5, }} transition={{ duration: 0.75 }}> {type === "My skills" ? "My skills" : "My projects"} </motion.h1>
            <div className="mountains"></div>
            <div className="planet" style={{ backgroundImage: type === "My skills" ? "url(./planets.png)" : "url(./sun.png)" }}></div>
            <motion.div className="stars" initial={{ opacity: 0, x: -500 }} whileInView={{ opacity: 1, x: 0, }} transition={{ duration: 1 }}></motion.div>
        </div>
    );
}

export default Parallex;