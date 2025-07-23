import { easeIn } from "framer-motion";

const parent = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
        },
    },
};

const child = {
    hidden: { opacity:0, y: 100},
    show: {
        opacity:1, y: 0,
        transition: {
            duration: 0.15,
            ease: easeIn,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity:1, y:0, 
        transition: { duration: 0.8 }
    }
};

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const fadeItem = {
    hidden: { opacity: 0, y: 20 },
    show: { 
        opacity:1, y:0, 
        transition: { duration: 0.6 }
    }
};

export { parent, child, fadeUp, container, fadeItem }