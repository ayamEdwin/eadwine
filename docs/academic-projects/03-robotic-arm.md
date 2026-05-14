# Robotron Arm 
## MTR-323 Robotics(Year 3)
## What is MTR-323 Robotics?

This course introduces path planning, kinematics, dynamics
and control in the context of robotic systems. In particular,
it focusses on the design aspects of industrial robot
manipulators.

## Project Overview

<div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
  <div style={{ flex: 1 }}>

As part of the coursework assessment, we were tasked to
apply the knowledge obtained from the Robotics module.
My team and I based our design on a pick-and-place
manipulator with four(4) degrees of freedom in PrismaticRevolute-Revolute-Revolute(PRRR) configuration because
we believe it will provide an optimal balance between our
workspace, dexterity, and simplicity, allowing for precise
and efficient movement of the objects in a variety of
applications such as collection of eggs in a battery cage
poultry system, sorting of fruits for processing in industry
etc.

  </div>
  <div style={{ flex: 0.8 }}>

![Robotron Top View](/img/robotron_top_view.png)

  </div>
</div>

## Objectives
1. To design and manufacture a 4-DoF Robotic arm for pick-and-place tasks.
2. To integrate a webcam as a sensor for robot perception using OpenCV python.


## Role & Contributions

1. Designed and 3D printed the mechanical structure
of the robotic arm using Autodesk Inventor
Professional.
2. Collaborated with my team to compute the inverse
kinematics for the robot arm using link dimensions
from the CAD and physical model.
3. Implemented the computed inverse kinematic
algorithm on an Arduino Uno R3 using the Arduino
IDE.
4. Programmed the webcam using OpenCV's
background subtraction libraries to determine the
coordinates of the object in 2D – space on the white
board used and sent the coordinate data to the
Arduino via UART which was used by the inverse
kinematic algorithm to precisely move the joint
angles to pick and place the object of desire.

<div style={{ textAlign: 'center' }}>

![Robotron Workspace](/img/robotron_workspace.png)

</div>


## Technical Highlights
1. Refined the mechanical design due to damaged
links resulting from haphazard motion of the arm
during initial tests.
2. Debugged and refactor both webcam interface code
and Arduino code integrating planned path
algorithms.
3. Performed addictive manufacturing of modelled
parts using a Creality Ender V2 – 3D printer.
4. Performed initial motor calibrations to ensure
motor angles are within desired range.
5. Tested the arm for days before finally getting it to
work as expected without giving up.


## Outcome and Impact
The design and construction of the 4-DoF Robotic arm
shaped my understanding of robotic manipulators in
general and lay a foundation for future works.
My Robotics course instructor, Mr. Obed Doku, second
from left in the image was pleased with our performance in
applying the theory learnt from class. My
team and I aced in the Robotics coursework
assessment. This proved that we were able to achieve
our project objectives from beginning to finish.

## What I have Learned

The Robotron project taught me valuable lessons which I apply to projects I work on ever since. The first lesson
reminds me that getting a robot to work as expected requires utmost dedication, time, effort and a tenacious spirit.
The robot can only work when you never give up.

Second lesson is more of technical, after damaging
parts of the first printed robot arm, I realized I
focused on aesthetics instead of functionality, this
has shaped my understanding of hardware design.
Another lesson I learnt is about the inverse
proportion dependance of the software and the
hardware on each other. For a bad hardware
design, the software needs to compensate for
extra functionalities in order to get a robust and a
reliable system. I realized this when I, smoothen
the motion of the arm to prevent jerky
movements in order not to damage the poorly
designed joints and links.

<div style={{ textAlign: 'center' }}>

![Robotron Setup](/img/robotron_setup.png)

</div>