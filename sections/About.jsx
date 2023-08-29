"use client"

import { motion } from "framer-motion"
import { TypingText } from "../components"

import styles from "../styles"
import { fadeIn, staggerContainer } from "../utils/motion"

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title=' Ξ About Metaversus  Ξ' textStyles='text-center' />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'>BOBO Metaverse</span> brings
        you an unparalleled journey into a digital realm that blurs the line
        between reality and imagination. Imagine a world where the electrifying
        pulse of
        <span className='font-extrabold text-white'>Synthwave</span> beats in
        harmony with the latest blockchain innovations. Step into a metaverse
        where <span className='font-extrabold text-white'>BOBO</span>, the
        iconic meme character, becomes your guide through this cosmic landscape.
        where{" "}
        <span className='font-extrabold text-white'>
          Unveil the New Era - Metaverse Redefined:
        </span>
        Witness the emergence of a new era where the metaverse isn't just a
        concept, but a tangible reality. Immerse yourself in a realm that
        transcends space and time, where each pixel is meticulously crafted to
        resonate with the Synthwave aesthetic. Feel the pulse of every
        interaction as you traverse through BOBO Metaverse, where virtual and
        reality converge seamlessly.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
)

export default About
