import React from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
    animate: {
        x: [0, -1200],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
                repeatDelay: 0,
            },
        },
    },
};

const Marquee = () => {
    return (
        <div>
            <div className="marquee">

                <motion.div
                    className="track"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <h2>
                    Creative Problem Solver • Strategic thinker • Continuous Learner • Data-Driven • Innovator • Versatile • Detail-Oriented • Creative Problem Solver • Strategic thinker • Continuous Learner • Data-Driven • Innovator • Versatile • Detail-Oriented
                    </h2>
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;