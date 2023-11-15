import "./myskills.scss"
import { animate, motion } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        },
    }

}
const Myskills = () => {
    return (
        <motion.div className="skills" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textcontainer" variants={variants}>
                <p className="text">
                    I focus on helping your brand grow
                    <br />and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titlecontainer" variants={variants}>
                <motion.div className="title">
                    <img src="/people.webp" alt="" />
                    <h1> <motion.b whileHover={{ color: "orange" }}>Skills</motion.b> that I </h1>
                </motion.div>
                <motion.div className="title">
                    <h1> <motion.b whileHover={{ color: "orange" }}>Bring</motion.b> to the table </h1>
                    <button>What We Do?</button>
                </motion.div>
            </motion.div>
            <motion.div className="listcontainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "white", color: "black", scale: 1.2 }}>
                    <h2>Languages</h2>
                    <ul>
                        <li>
                            C
                        </li>
                        <li>
                            C++
                        </li>
                        <li>
                            Javascript
                        </li>
                        <li>
                            MATLAB
                        </li>
                    </ul>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "white", color: "black", scale: 1.2 }}>
                    <h2>Dveloper tools</h2>
                    <ul>
                        <li>
                            CSS
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            Material UI
                        </li>
                        <li>
                            React.js
                        </li>
                    </ul>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "white", color: "black", scale: 1.2 }}>
                    <h2 style={{ textAlign: "center" }}>Other technical<br /> skills</h2>
                    <ul>
                        <li>
                            Git
                        </li>
                        <li>
                            Github
                        </li>
                        <li>
                            Adobe photoshop
                        </li>
                        <li>
                            Adobe premier pro
                        </li>
                    </ul>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "white", color: "black", scale: 1.2 }}>
                    <h2 style={{ textAlign: "center" }}>soft skillls</h2>
                    <ul >
                        <li >
                            Communication skills
                        </li>
                        <li>
                            Leadership skills
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Myskills;