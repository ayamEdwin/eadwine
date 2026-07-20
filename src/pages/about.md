---
title: About Me
description: Learn more about Edwin Setsoafia
hide_table_of_contents: true
---

import EddieProfile from '@site/static/img/eddie_profile.jpg'
import EddieSoldering from '@site/static/img/eddie_soldering_ledstrip.jpg'
import {
  Github,
  Linkedin,
  Mail,
  Cpu,
  Bot,
  Wrench,
  CircuitBoard,
  Brain,
  Radio,
  Settings
} from 'lucide-react';



<style>{`
  .about-hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--ifm-color-primary-lightest) 0%, var(--ifm-color-primary-light) 50%, var(--ifm-color-primary) 100%);
    border-radius: 20px;
    margin-bottom: 3rem;
    position: relative;
    overflow: hidden;
  }
  
  .about-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    animation: rotate 20s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .profile-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
    flex-wrap: wrap;
  }
  
  .profile-img {
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    transition: transform 0.3s ease;
    border: 4px solid white;
  }
  
  .profile-img:hover {
    transform: translateY(-10px) scale(1.05);
  }
  
  .name-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, var(--ifm-color-primary-darkest), var(--ifm-color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .tagline {
    font-size: 1.25rem;
    color: var(--ifm-color-primary-darker);
    font-weight: 500;
  }
  
  .section-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 2rem 0 1rem;
    color: var(--ifm-color-primary);
    border-bottom: 3px solid var(--ifm-color-primary);
    padding-bottom: 0.5rem;
    display: inline-block;
  }
  
  .content-card {
    background: var(--ifm-background-surface-color);
    border-radius: 16px;
    padding: 2rem;
    margin: 1.5rem 0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    border: 1px solid var(--ifm-color-emphasis-200);
  }
  
  .highlight-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--ifm-color-content);
  }
  
  .quote-box {
    background: linear-gradient(135deg, var(--ifm-color-primary-lightest), rgba(255,255,255,0.5));
    border-left: 5px solid var(--ifm-color-primary);
    padding: 1.5rem;
    border-radius: 0 12px 12px 0;
    margin: 2rem 0;
    font-style: italic;
    font-size: 1.15rem;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }
  
  .skill-tag {
    background: linear-gradient(135deg, var(--ifm-color-primary), var(--ifm-color-primary-light));
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    text-align: center;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .skill-tag:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
  
  .vision-list {
    list-style: none;
    padding: 0;
  }
  
  .vision-list li {
    padding: 0.75rem 0;
    padding-left: 2rem;
    position: relative;
    font-size: 1.05rem;
  }
  
  .vision-list li::before {
    content: '';
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .stat-card {
    background: linear-gradient(135deg, var(--ifm-color-primary), var(--ifm-color-primary-dark));
    color: white;
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    display: block;
  }
  
  .stat-label {
    font-size: 1rem;
    opacity: 0.9;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
    flex-wrap: wrap;
  }
  
  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--ifm-color-primary);
    color: white;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .social-link:hover {
    background: var(--ifm-color-primary-dark);
    transform: translateY(-3px);
  }
}

`}</style>

<div className="about-hero">

## Edwin Setsoafia

<div className="tagline">Aspiring Robotics Researcher | Mechatronics Engineer</div>

</div>

<div className="profile-container">

<img src={EddieProfile} alt="Eddie Profile" className="profile-img" style={{width: '250px', height: '250px', borderRadius: '20px', objectFit: 'cover'}} />

<img src={EddieSoldering} alt="Eddie Soldering" className="profile-img" style={{width: '200px', height: '200px', borderRadius: '20px', objectFit: 'cover'}} />

</div>

---

## About Me

<div className="content-card">

<div className="highlight-text">

Hello there! I'm **Edwin Setsoafia**, a Mechatronics engineering graduate passionate about **Robotics and Artificial Intelligence (AI) research**.

I received my **Bachelor of Technology degree in Mechatronics engineering** from Koforidua Technical University, Ghana. My background in mechatronics has enriched my engineering skills in the diverse fields of:

<code>Mechanical Engineering</code> <code>Electrical/Electronics</code>                            
   <code>Embedded Systems</code>           <code>Robotics</code>                   
<code>Control Systems</code>  

I am a builder at heart. I enjoy turning ideas into working systems by combining electronics, mechanics, and software. I believe meaningful engineering comes from curiosity, ownership, and continuous iteration. Whether I'm designing hardware, writing code, or debugging a prototype, I focus on creating solutions that are reliable, practical, and impactful.

</div>

</div>

---

## My Vision

<div className="quote-box">

> "The future belongs to those who believe in the beauty of their dreams"
> — Eleanor Roosevelt

I believe in a future where autonomous and intelligent robots will one day take on various human-centric roles in industries and homes. My deliberate pursuit of mechatronics is a gradual stepping stone into the world of intelligent robots for the realisation of such a vision.

</div>

---

## What I Do

<ul className="vision-list">

<li><Bot size={18} /><code>Robot Perception</code> : Enabling robots to understand and interpret their environment through advanced sensors and computer vision</li>

<li><Bot size={18} /><code>Human-Robot Interaction</code> : Creating intuitive and natural interactions between humans and robots</li>

<li><Bot size={18} /><code>Assistive Robotics</code> : Developing robots to assist the physically challenged, elderly, and children</li>

<li><Bot size={18} /><code>Colloborative Robotics</code> : Building robots that help people be better at their jobs through collaboration</li>

</ul>

---

## Technical Skills

<div className="skills-grid">

<div className="skill-tag">
  <Wrench size={18} /><br></br>
  <span>CAD Design</span>
</div>


<div className="skill-tag">
  <CircuitBoard size={18} /><br></br>
  <span>Circuit Design</span>
</div>

<div className="skill-tag">
  <Cpu size={18} /><br></br>
  <span>Embedded C</span>
</div>

<div className="skill-tag">
  <Brain size={18} /><br></br>
  <span>Machine Learning</span>
</div>

<div className="skill-tag">
  <Radio size={18} /><br></br>
  <span>Sensor Fusion</span>
</div>

<div className="skill-tag">
  <Settings size={18} /><br></br>
  <span>Control Systems</span>
</div>

<div className="skill-tag">
  <Bot size={18} /><br></br>
  <span>ROS</span>
</div>


</div>

---

:::note

I'm avalable for research colloborations. Let's connect and break the boundaries of Moravec's paradox together.

:::
