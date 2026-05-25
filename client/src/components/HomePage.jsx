import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import bradleyPic from "../public/bradley_profile.jpg";
import BradleysResume from "../public/Bradley_s_Resume.pdf";

const ease = [0.22, 1, 0.36, 1];

export default function HomePage() {
    const handleViewResume = () => {
        window.open(BradleysResume, '_blank');
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="home-section">
            <div className="home-grid">

                {/* Left — text */}
                <div className="home-left">
                    <motion.span
                        className="home-location-label"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1, ease }}
                    >
                        Vancouver, BC · University of British Columbia
                    </motion.span>

                    <motion.h1
                        className="home-name-stack"
                        aria-label="Bradley Eugene Sakran"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.01, delay: 0.15 }}
                    >
                        <motion.span
                            className="home-name-line"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.15, ease }}
                        >
                            Bradley{" "}
                        </motion.span>
                        <motion.span
                            className="home-name-line"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.28, ease }}
                        >
                            Eugene{" "}
                        </motion.span>
                        <motion.span
                            className="home-name-line"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.41, ease }}
                        >
                            Sakran<span className="home-name-period">.</span>
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        className="home-divider"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.55, ease }}
                    />

                    <motion.p
                        className="home-roles"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.65, ease }}
                    >
                        Engineer | Builder | Student
                    </motion.p>

                    <motion.p
                        className="home-description"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.75, ease }}
                    >
                        Currently studying at the University of British Columbia,
                        and building some cool stuff in my free time.
                    </motion.p>

                    <motion.div
                        className="home-actions"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.88, ease }}
                    >
                        <Button
                            className="home-btn-primary"
                            onPress={() => scrollToSection('contact')}
                        >
                            Get in Touch
                        </Button>
                        <Button
                            variant="bordered"
                            className="home-btn-secondary"
                            onPress={handleViewResume}
                        >
                            View Resume
                        </Button>
                    </motion.div>
                </div>

                {/* Right — photo */}
                <motion.div
                    className="home-right"
                    initial={{ opacity: 0, x: 30, rotate: 4 }}
                    animate={{ opacity: 1, x: 0, rotate: 1.5 }}
                    transition={{ duration: 0.9, delay: 0.2, ease }}
                >
                    <div className="home-photo-frame">
                        <motion.img
                            src={bradleyPic}
                            alt="Bradley Eugene Sakran"
                            className="home-profile-image"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 28 }}
                        />
                        <div className="home-photo-accent" aria-hidden="true" />
                    </div>
                </motion.div>

            </div>

            <motion.button
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1, ease }}
                onClick={() => scrollToSection('about')}
                aria-label="Scroll to about section"
            >
                Scroll
            </motion.button>
        </section>
    );
}
