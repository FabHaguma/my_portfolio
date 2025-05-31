// src/components/About.jsx
import React from 'react';
import profilePhoto from '../../assets/images/profile-fabrice.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="page-section about-section">
      <div className="about-content">
        <div className="about-image-container">
          <img src={profilePhoto} alt="Fabrice Haguma" className="profile-photo" />
        </div>
        <div className="about-text-container">
          <h2>About Me</h2>
          <p className="tagline">
            I build seamless and efficient web applications, bridging the gap
            between engaging user interfaces and robust back-end logic. Based in
            Kigali, Rwanda.
          </p>
          <p>
            Driven by a passion for creating impactful digital experiences, I specialize in
            full-stack development with a keen eye for detail and user-centric design.
            My journey in tech started with a simple word game on my phone, where scattered
            letters came together to form connections. The challenge sparked
            an idea: why not create
            <a
              href="https://fabhaguma.github.io/letter-to-word/"
              target="_blank"
            >
              a simple application 
            </a> 
            to unlock all possible combinations of real words from any given
            set of letters? I envisioned a program that could systematically
            compare scattered letters against a list of known words. That
            moment of clarity marked the start of my journey into software,
            fueled by curiosity and the desire to turn a playful problem
            into a meaningful solution. And I've been hooked ever since.
          </p>
          <p>
            What truly excites me is working across the entire development
            lifecycle. I enjoy the challenge of designing intuitive user
            interfaces just as much as I enjoy architecting efficient
            databases and APIs. This full-stack perspective allows me to
            create cohesive, well-rounded applications and effectively
            collaborate with diverse teams.
          </p>
          {/* <p>
            I believe in writing clean, maintainable code and focusing on
            solving real-world problems. I'm a continuous learner, always
            eager to explore new technologies and methodologies to improve
            my craft.
          </p> */}
          <p>
            When I’m not immersed in code, you’ll often find me exploring
            the vibrant streets of Kigali. I have a passion for driving and
            reading, two activities that soothe my mind in very different
            ways. Driving gives me a sense of control and focus, as the
            bustling rhythm of the roads and the ever-changing scenery
            outside the window keep me grounded in the present. Meanwhile,
            reading offers an escape into new worlds and ideas, fueling my
            imagination and curiosity. Together, they create a perfect
            balance for my restless spirit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;