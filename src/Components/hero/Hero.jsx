import React, { useRef } from 'react';
import './hero.css';
import Lottie from 'lottie-react';
import devAnimation from '../../animation/dev.json';
import { motion } from 'framer-motion';

export default function Hero() {
    const lottieRef = useRef();
    return (
        <section className='hero flex'>
            <div className='left-section '>
                <div className="parent-avatar">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1.1)" }}
                        transition={{ damping: 6, type: "spring", stiffness: 100 }}
                        src="./AhmedS.jpg" className='avatar' alt="" />
                </div>

                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, type: "spring", stiffness: 120 }}
                    className='title'>Hi, I'm Ahmed, • Motivated Data experience in Excel, SQL, Power BI, Tableau, and Python.
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className='sub-title'>Welcome to my portfolio! Explore my projects, skills.
                </motion.p>

                <motion.div 
                    className="all-icons flex"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}>
                    
                    <a href="https://www.instagram.com/ahmedds_25?igsh=NmFjNGt4d3l5aDZz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="icon icon-instagram"></a>
                    <a href="https://www.linkedin.com/in/ahmed-sayed-9351a4297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="icon icon-linkedin"></a>
                </motion.div>
            </div>

            <div className='right-section animation'>
                <Lottie
                    lottieRef={lottieRef}
                    onLoadedImages={() => {
                        lottieRef.current.setSpeed(0.5);
                    }} 
                    animationData={devAnimation} />
            </div>
        </section>
    );
}
