
import React from 'react';
import { motion } from 'framer-motion';
import "./studentprogress.scss"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2
        }
    }
}


const AnimatedProgressBar = ({ progress }) => {
    return (
        <div className='student studenttext'>
            <motion.div
                initial={{ width: 0 }}
                animate={{
                    width: `${progress}%`,
                    transition: {
                        duration: 2
                    }
                }}
                style={{
                    height: '100%',
                    background: '#4CAF50',
                    borderRadius: '5px',
                }}
            />
        </div>
    );
};

const StudentProgress = ({ subjects }) => {
    return (
        <motion.div className='studenttext' style={{ paddingTop: "50px", paddingLeft: "180px" }} variants={variants} initial="initial" whileInView="animate" >
            <motion.h2 variants={variants}>Student Progress</motion.h2>
            {Object.entries(subjects).map(([subject, progress], index) => (
                <motion.div variants={variants} key={index} className='rows'>
                    <h3 className='row1'>{subject}</h3>
                    <p className='percentage'>{`${progress}`}</p>
                    <AnimatedProgressBar progress={parseInt(progress)} className="bar" />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default StudentProgress;
