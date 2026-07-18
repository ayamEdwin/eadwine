---
slug: mtr-25-glass-crusher
title: MTR-25 Crusher — Embedded firmware for sustainable glass recycling
date: 2025-11-01
authors: [edwin]
tags: [project, embedded, sustainability]
description: A deep dive into the MTR-25 Crusher project, where firmware design and motor control powered a local recycling innovation.
---

The MTR-25 Crusher is the first portable glass-crushing system designed for local manufacturing businesses. It comes with software-implemented safety features and dual crushing chambers for fine and coarse glass grain output.

Glass waste accumulates in landfills and poses environmental and safety challenges in Ghana and other urban areas. Our team designed a semi-automated Glass Crusher system to enhance recycling efficiency, incorporate robust motor control, and improve operator safety. Manual glass crushing is inefficient and hazardous for operators, and large-scale industrial crushers are costly and inaccessible to many local recycling SMEs. We aimed to develop a low-cost, reliable control system that improves crushing precision and safety, supporting local sustainable waste management and circular economy initiatives.

Read the full project page here: [MTR-25 Crusher project page](/eadwine/docs/academic-projects/01-glass-crusher).

### Key highlights

- **Firmware Architecture**: Led firmware design and integration of event-triggered/time-triggered real-time control tasks on STM32F030 microcontroller.
- **Motor Control**: Developed and tested PID control algorithms with real-time current feedback for crushing motor torque regulation.
- **Safety Interlocks**: Designed and implemented safety interlocks including limit switch-based gate control with fault detection and emergency stops.
- **Human-Machine Interface**: Built an HMI with LCD display, LEDs, and push buttons for intuitive user control.
- **System Validation**: Conducted unit tests on key firmware modules to ensure robustness and fault tolerance.
- **Proof of Concept**: Validated the system on a test board with a Nema17 stepper motor and 3D-printed gate control mechanism.

### Technical Implementation

- Used STM32F030 microcontroller as the master controller coordinating motor and gate control with I2C communication.
- Integrated a stepper motor for gate diverter with precision position control, error detection, and visual/audible alerts.
- Employed Segger Embedded Studio with DarkLight APIs for efficient embedded development.
- Implemented soft start/stop, pulse operation modes, and automatic fault response with buzzer and LED indicators.

### Outcome & Impact

This project achieved a functional prototype meeting all design objectives for user interface, motor control, and safety features. It provided a scalable firmware framework with documented recommendations for RTOS integration, advanced sensor monitoring, and full automation potential. Most importantly, it enabled practical recycling innovation supporting environmental sustainability and local industry empowerment.

The experience reinforced the importance of integrated fault detection, safety interlocks, and the value of unit testing in embedded systems development.
