'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
    return (
        <section>
            <motion.div
                initial={{ opacity:0, scale:0.9 }}
                animate={{ opacity:1, scale:1 }}
                transition={{ duration:1 }}
            >
            
                <Image
                src="/friska.png"
                alt="Hero Photo"
                width={420}
                height={420}
                className="rounded-xl object-cover"
                />
            </motion.div>
        </section>
    )
}