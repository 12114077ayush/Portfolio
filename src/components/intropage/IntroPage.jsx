import "./introPage.scss"
import { motion } from "framer-motion"

const textvariant = {
    initial: {
        opacity: 0,
        x: -500,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollvariant: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    }
}

const IntroPage = () => {
    return (
        <div className="intro">
            <motion.div className="wrapper">
                <motion.div className="textcontainer" variants={textvariant} initial="initial" animate="animate">
                    <motion.h2 variants={textvariant}>Ayush Choudhary</motion.h2>
                    <motion.h1 variants={textvariant}>Web developer and Graphic designer</motion.h1>
                    <motion.div className="buttons" variants={textvariant}>
                        <motion.button whileHover={{ boxShadow: "inset 400px 0 0 0 #4e4692" }} transition={{ duration: 1 }} variants={textvariant}>see the latest works</motion.button>
                        <motion.button whileHover={{ boxShadow: "inset 400px 0 0 0 #4e4692" }} transition={{ duration: 1 }} variants={textvariant}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img src="scroll.png" alt="" variants={textvariant} animate="scrollvariant" />
                </motion.div>
            </motion.div>

            <div className="imagecontainer">
                <img className="hero" src="/profile.png" alt="" />
            </div>
        </div>
    );
}

export default IntroPage;