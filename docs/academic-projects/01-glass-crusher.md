# The MTR-25 Crusher

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
<div style={{flex: 1}}>

## What is MTR-25 Crusher?

MTR-25 Crusher, is the first portable Glass Crusher
designed for local manufacturing businesses. It comes with
software implemented safety features as well as dual
crushing chambers for fine and coarse glass grain output.
As part of a team, I designed and implemented a firmware
architecture on STM32F0 microcontroller to control the
entire operation of the MTR-25 Crusher.

## Project Overview
Glass waste accumulates in landfills and poses
environmental and safety challenges in Ghana and other
urban areas. Our team designed a semi-automated Glass
Crusher system to enhance recycling efficiency, incorporate
robust motor control, and improve operator safety. This
project involved embedded firmware development
managing motor control algorithms, gate operations, and
user interface tasks for a sustainable, cost-effective
crushing solution.

</div>
<div style={{flex: '0 1 300px'}}>

<img src="/img/crusher.jpg" alt="MTR-25 Crusher" style={{width: '100%', height: 'auto', display: 'block', maxWidth: '100%'}} />

</div>
</div>


## Motivation

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
<div style={{flex: '0 1 300px'}}>

<img src="/img/crusher-3d1.jpg" alt="Crusher 3D View 1" style={{width: '100%', height: 'auto', display: 'block', maxWidth: '100%'}} />

</div>
<div style={{flex: 1}}>

Manual glass crushing is inefficient and hazardous for
operators. Large-scale industrial crushers are costly
and inaccessible to many local recycling SMEs. We
aimed to develop a low-cost, reliable control system
for a semi-automated crusher that improves crushing
precision and safety, supporting local sustainable
waste management and circular economy initiatives.

</div>
</div>


## Objectives

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
<div style={{flex: 1}}>

As the team leader for the Software Implementation
and motor control team, my objectives for the Glass
Crusher project include:
1. Developing and implementing a user
interface for real-time system monitoring,
feedback, user control inputs and I2C serial
communication protocol.
2. Our second objective was to develop and
implement soft start/stop/pulse operations
for smooth running of the crushing motor.
3. Our last objective was to perform test
procedures in a form of proof-of-concept
protype to ensure the firmware runs
smoothly before deployment and
integration into the main crusher.

</div>
<div style={{flex: '0 1 300px'}}>

<img src="/img/crusher-2d.jpg" alt="Crusher 2D Diagram" style={{width: '100%', height: 'auto', display: 'block', maxWidth: '100%'}} />

</div>
</div>


## Role & Contributions
1. Led firmware architecture design and integration of
event-triggered/time-triggered real-time control tasks.
2. Developed and tested PID control algorithms with real-
time current feedback for crushing motor torque
regulation.
3. Designed and implemented safety interlocks including
limit switch-based gate control with fault detection and
emergency stops.
4. Developed Human-Machine Interface (HMI) with LCD
display, LEDs, and push buttons enabling intuitive user
control.
5. Conducted unit tests on key firmware modules to
ensure robustness and fault tolerance.

<img src="/img/firmware-architecture.png" alt="Firmware Architecture" style={{width: '100%', height: 'auto', display: 'block', margin: '20px 0'}} />



## Technical Highlights

<div style={{display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
<div style={{flex: 1}}>

1. Used STM32F030 microcontroller as master controller
coordinating motor and gate control with I2C
communication.
2. Integrated stepper motor for gate diverter with
precision position control, error detection, and
visual/audible alerts for fault states.
3. Employed Segger Embedded Studio with DarkLight APIs
for efficient embedded development and real-time task
scheduling.
4. Firmware implemented soft start/stop, pulse operation
modes, and automatic fault response with buzzer and
LED indicators.
5. Proof-of-concept validation on a test board
demonstrated system reliability under various
operational
scenarios.

</div>
<div style={{flex: '0 1 300px'}}>

<img src="/img/code-screenshot.png" alt="Code Screenshot" style={{width: '100%', height: 'auto', display: 'block', marginBottom: '10px', maxWidth: '100%'}} />

<img src="/img/hmi_prototype.jpg" alt="HMI Prototype" style={{width: '100%', height: 'auto', display: 'block', maxWidth: '100%'}} />

</div>
</div>

<div style={{fontSize: '0.85rem', fontStyle: 'italic', marginTop: '10px', width: '100%'}}>

As shown in the images on the right, from the top a screenshot of the Glass Crusher
Firmware at the time of development in Segger Embedded Studio. It is made available at (https://github.com/ayamEdwin/Glass-Crusher) Test board with
Nema17 Stepper motor and attached 3D printed bar representing the crushers internal
gate which controls the dual output feature of the crusher.

</div>


## Outcome & Impact
1. Achieved functional prototype meeting all design
objectives for user interface, motor control, and safety 2.
features.
2. Provided scalable firmware framework with
documented recommendations for RTOS integration,
advanced sensor monitoring, and full automation 3.
potential.
3. Enabled practical recycling innovation supporting
environmental sustainability and local industry
empowerment.
4. Set a foundation for future embedded system projects
aimed at sustainable industrial automation.


## What I Learned
1. Developed strong skills in embedded firmware design
by architecting a modular, event/time-driven system and coordinating multiple real-time tasks across user
interface modules.
2. Understood the importance of integrated fault
detection and safety interlocks, including limit switch
position sensing, error signaling, and emergency stop
mechanisms.
3. Improved proficiency in hardware-software integration
by working closely with microcontroller peripherals,
communications protocols (I2C), and embedded
development tools.
4. Learned the value of unit testing and systematic
verification in embedded systems to catch faults early
and ensure reliable, maintainable code.
5. I have also realized the limitations of using an infinite
while loop with blocking wait functions and the
necessity of an RTOS for a larger system like the crusher.