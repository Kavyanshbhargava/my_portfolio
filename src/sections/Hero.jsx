import React from 'react'
import {words} from '/src/constants/index.js'
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from "../components/AnimatedCounter.jsx";


const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y:50,
                opacity: 0,

            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut',
            }
        )
    });

    return (
        <section id="hero" className="relative overflow-hidden w-full h-screen">
            {/* Background Image */}
            <div className="absolute top-0 left-0 z-0 w-full h-full">
                <img
                    src="/images/bg.png"
                    alt="background"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            {/* Hero Layout */}
            <div className="hero-layout w-full h-full flex flex-col md:flex-row items-center justify-between px-5 md:px-20 relative z-10">
                {/* LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-1/2 w-full h-full gap-7">
                    <div className="hero-text text-white text-4xl md:text-5xl font-bold leading-tight">
                        <h1>
                            Shaping{' '}
                            <span className="slide inline-block">
                <span className="wrapper">
                  {words.map((word, index) => (
                      <span
                          key={`${word.text}-${index}`}
                          className="flex items-center gap-2 md:gap-3 pb-2"
                      >
                      <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
                        </h1>
                        <h1>Into Real Project</h1>
                        <h1>That Deliver Results</h1>
                    </div>

                    <p className="text-white/70 md:text-xl">
                        Hi, I'm Kavyansh, a developer based in India with a passion of code.
                    </p>

                    <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See My Work" />
                </header>

                {/* RIGHT: 3D MODEL */}
                <figure className="flex-1 h-full w-full md:w-1/2">
                    <div className="h-full w-full">
                        <HeroExperience />
                    </div>
                </figure>
            </div>

            <AnimatedCounter />
        </section>
    );
};

export default Hero;