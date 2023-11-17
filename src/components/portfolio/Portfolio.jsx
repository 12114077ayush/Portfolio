import "./portfolio.scss"
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        }
    }
}
const items = [
    {
        id: 1,
        title: "socioface",
        img: "./socioface.png",
        desc: "Developed a dynamic social media frontend web application using the React.js framework. This project focuses on creating an engaging user experience with features such as post liking and disliking. The application includes three major pages: Homepage, Login page, and Profile page."
    },
    {
        id: 2,
        title: "Dribble Web Page",
        img: "./dribbblepage.png",
        desc: "Developed a visually appealing web page inspired by the design aesthetics of Dribbble, utilizing React for dynamic functionality. The project showcases my proficiency in front-end development, combining CSS, Material UI, and Bootstrap for a polished and responsive user interface."
    },
    {
        id: 3,
        title: "Hero Hf Deluxe",
        img: "./graphic1.png",
        desc: "Witness the metamorphosis of the Hero HF Deluxe as it undergoes a stunning graphic redesign, elevating its aesthetic allure to unparalleled heights. Crafted with precision using Photoshop, this once simple black model has been reborn into a captivating and attractive masterpiece."
    },
    {
        id: 4,
        title: "Indian Navy Day",
        img: "./navy.jpg",
        desc: "Dive into the depths of patriotism and maritime valor with our specially crafted poster in honor of Indian Navy Day on December 4th. Designed using the artistic prowess of Photoshop, this poster seamlessly blends striking vectors, dynamic brush strokes, and vivid colors to pay homage to the guardians of our vast seas."
    },

];

const Single = ({ item }) => {
    return (
        <section>
            <div className="container">
                <motion.div className="wrapper">
                    <motion.div className="imgcontainer">
                        <img src={item.img} alt="" />
                    </motion.div>
                    <motion.div className="textcontainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.id === 1 ? "https://social-media-alpha-bice.vercel.app/" : "https://12114077ayush.github.io/dribble-webpage/"}>See Demo</a></button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    return (
        <div className="portfolio" variants={variants} initial="initial" >
            <div className="progresstitle">
                <h1>Highlighted Projects</h1>
                <hr />
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />))}
        </div>
    );
}

export default Portfolio;