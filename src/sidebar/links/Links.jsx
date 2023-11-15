import { motion } from "framer-motion"

const variants = {
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1,
        },
        y: -20,
        opacity: 1
    },
    closed: {
        transition: { staggerDirection: -1 },
        y: 55,
        opacity: 0
    },

}
const Links = () => {
    const items = ["Homepage", "My skills", "My projects", "Contact"]
    return (
        <motion.div className="links" variants={variants}>
            {items.map((item) => (
                <motion.a href={`#${item}`} key={item} initial={{ scale: 1, color: "#000000" }} whileHover={{ scale: 1.5, color: "#ED7D31" }} whileTap={{ scale: .95 }} variants={variants}>{item}
                </motion.a>))}
        </motion.div>
    );
}

export default Links;