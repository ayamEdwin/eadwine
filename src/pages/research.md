---
title: Research & Publications
description: My research plans, technical reports, and project documentation on safe, human-aware robotics, spanning legged locomotion, contact-aware manipulation, and perception.
hide_table_of_contents: false
---
import ResearchVideoCarousel from '@site/src/components/ResearchVideoCarousel';

# Research & Publications

<div style={{ textAlign: 'justify' }}>

A curated collection of my research plans, technical reports, and project documentation.

## Research Statement

My research asks how embodied robots can stay **safe, predictable, and useful around people** under uncertainty. Robots now perform well in controlled settings, but homes, hospitals, warehouses, and public spaces expose gaps in safety, adaptation, and interaction that control performance alone does not close. A robot in these places must do more than finish a task. It has to keep its balance and its contact forces within safe limits, perceive people and objects reliably, and behave in ways humans can anticipate and trust.

No single technique closes this gap, so I approach it through three connected entry points: **legged locomotion**, **contact-aware manipulation**, and **perception for human-aware autonomy**. Each is a way into the same long-term goal of human-centered robotics, and each builds skills the others depend on. I am excited to begin from whichever of them best matches a research group's strengths and to grow toward the full problem from there.

### Motivation: Robot Failures in the Real World

<ResearchVideoCarousel />

These are not just examples of robot instability and safety risk. They are the motivating challenge behind my research agenda. They show why humanoids and robotic manipulators need safety constraints, uncertainty-aware control, and human-aware interaction designed in from the start. My interest is in moving beyond walking and manipulation ability toward robust, trustworthy autonomy in the environments where robots will actually be used.

## Three Entry Points to Human-Centered Robotics

All three tracks share one core: **safety constraints, uncertainty-aware decision-making, and behavior that people can interpret and anticipate.**

<a id="locomotion"></a>

### Track 1: Safe Legged Locomotion in Human-Centric Environments

How can legged robots maintain dynamic stability, recover from disturbances, and move safely around people under uncertainty and physical constraints, in both industrial and domestic settings?

*Research questions:*

- How can a legged robot predict and limit the risk of a fall near people, and degrade gracefully when a fall cannot be avoided?
- How can locomotion policies stay predictable and legible to nearby humans while still adapting to clutter and uneven terrain?

<a id="manipulation"></a>

### Track 2: Contact-Aware Manipulation

How can a robot decide when to avoid contact, when to allow controlled and compliant contact, and when to recover or stop, without violating physical constraints or abandoning its task? This matters most where people share the workspace, such as handovers and collaborative tasks.

*Research questions:*

- How can a manipulator choose between avoiding, permitting, and stopping contact using uncertainty in what it senses?
- What makes a handover or shared-workspace motion feel safe and predictable to the person involved?

<a id="perception"></a>

### Track 3: Perception for Human-Aware Autonomy

Perception is the bridge between the other two tracks. A robot can only act safely around people if it can estimate human pose, intent, and scene geometry, and know how much to trust those estimates. I am interested in perception that produces calibrated uncertainty a controller or planner can use directly, rather than only a single best guess.

*Research questions:*

- How can a robot estimate human state and object geometry from onboard sensing with uncertainty that downstream planners can rely on?
- How should perception errors be passed into locomotion and manipulation controllers so that safety margins adjust automatically?

## Long-Term Research Vision

### Safe Whole-Body Autonomy Around People

Over the longer term, I want to bring these tracks together into coordinated whole-body autonomy that combines locomotion, manipulation, and contact-aware task execution in dynamic human environments. The challenge is to maintain balance while deciding when to avoid contact, when to allow controlled and compliant contact, and when to recover or stop, without violating physical constraints or abandoning the ongoing task. Closing the gap between what robots can do in the lab and what they must do around people is the work I want to dedicate my research career to.

## Problem Statement: Safe Legged Locomotion in Human Environments

Legged locomotion, safety, and interaction between humans and robots are the intersections of my research interests. While modern robots can increasingly track trajectories and recover from disturbance in controlled settings, the central challenge is not simply getting a robot to walk. In uncertain, human-populated environments, the challenge is creating a safe, resilient, and socially aware system. According to [Kai Williams](https://www.understandingai.org/p/why-humanoid-robots-wont-catch-up#footnote-anchor-3) at [Understanding AI](https://www.understandingai.org/p/), the biggest engineering challenge for humanoid robots is safety. Most current legged humanoids must actively maintain balance. If the leg motors stop for any reason, the robot falls and can injure people nearby. Real-world failures therefore show that locomotion is not only a control problem but also a safety and interaction problem in human settings. My initial focus is to study how legged humanoids can navigate clutter, recover from unanticipated disturbances, and remain stable and predictable around people. I want to combine physically grounded dynamics and control with safety constraints and interaction-aware design, moving from walking in idealized conditions toward reliable locomotion in shared spaces.

## Preliminary Work

- **Manipulation and vision:** Implemented forward and inverse kinematics for a 4-DoF robotic arm and used a USB camera with OpenCV to recognize objects in its workspace.
- **Safety-critical embedded control:** In my thesis, designed PID current-feedback control for motor torque regulation with limit-switch safety interlocks, fault detection, and emergency stops, plus a human-machine interface for intuitive operator control.
- **Real-time firmware and robotics hardware:** Led firmware architecture for time-triggered and event-triggered control tasks, and assisted with calibration and testing of DC motors and ROV equipment during an internship in robotics.
- **Simulation (early stage):** Building a GPU-first physics simulator purpose-built for humanoid robots, as a foundation for testing safe locomotion and contact behavior.
- **Perception (early stage):** Developing a from-scratch method that reconstructs 3D object shape from camera video, with the goal of producing geometry usable in physics simulation. The 2D and 3D fitting prototypes are working and I am extending them to colour.

## References

1. Williams, Kai. [“Why Humanoid Robots Won’t Catch Up.”](https://www.understandingai.org/p/why-humanoid-robots-wont-catch-up) *Understanding AI*.
2. [“Unitree robot failure in real world.”](https://www.youtube.com/watch?v=wpV5Uh5NUpM) YouTube video.
3. [“Robot demonstration.”](https://www.youtube.com/watch?v=8Drm_v3_iG4) YouTube video.
4. [Franka robot arm image](/img/franka.webp) Reddit.

## Final Year Project Thesis

[View Motor Control and Software Implementation for Glass Crusher Thesis](/pdf/MOTOR_CONTROL_REPORT.pdf)

</div>