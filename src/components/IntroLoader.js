import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'

const IntroLoader = () => {
    const [readyAnime, setReadyAnime] = useState(true)
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {setReadyAnime(!readyAnime)}, 4000)
        setTimeout(() => {history.push("/all")}, 5000)
        // eslint - disable - next - line
    }, [])

    const letters = [
        { alpha: "M",},
        { alpha: "O",},
        { alpha: "V",},
        { alpha: "I",},
        { alpha: "E",},
        { alpha: "B",},
        { alpha: "0",},
        { alpha: "X." }
    ]

    const renderAnimation = letters.map((letter, i) => (

        <AnimatePresence>
            {readyAnime && <motion.div>
                <motion.span
                    className="alpha-holder"
                    initial={{ opacity: 0, translateY: -100 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.3 }}
                    exit={{ opacity: 0, scale: 12, transition: { duration: 0.07, delay: i * 0.07 }, }}
                    key={i}
                >
                    {letter.alpha}
                </motion.span>
            </motion.div>
            }
        </AnimatePresence>

    ))

    return (
        <div className="animation-canvas">
            <div className="anime-holder" >
                {renderAnimation}
                {/* <div class="container">
                    <a href="#" class="neon_btn">Hello</a>
                </div> */}
            </div>
        </div>
    )
}

export default IntroLoader
