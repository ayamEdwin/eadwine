---
sidebar_position: 1
---

# Introduction

## Welcome to DarkLight V1.0
### The Embedded Framework for Learning and Rapid Prototyping
DarkLight is an educational embedded systems framework specifically designed for undergraduate engineering education and rapid electrical engineering prototyping. Built around the <code>STM32F030RCT6</code> microcontroller and <code>ST-Link V2</code> debugger, DarkLight provides the perfect bridge between theoretical computer engineering concepts and practical firmware development.

### Why DarkLight?
Most engineering programs face a fundamental dilemma: Arduino is too abstracted for serious engineering education, while professional IDEs are too complex for effective teaching. DarkLight solves this by providing:

#### Transparent Hardware Control
- Direct register access with clean abstractions.
- No <code>magic</code> behind the scences - students see exactly how microcontroller peripherals work.
- Minimal code overhead for predictable timing.

#### Professional Toolchain Integration
- Native support for <code>Segger Embedded Studio</code> with industry standard tools.
- Real-time debugging with <code>J-Scope</code>, <code>SystemView</code>, and <code>RTT</code>.
- Command-line interface for rapid prototyping.

#### Stamdardized Learning Environment
- Consistent <code>STM32-DEV BOARD</code> plus <code>ST-Link V2</code> hardware target.
- Reproducible results across all student setups.
- Affordable, widely available components.


### Why Arduino Falls Short for Engineering Education
While arduino serves as an excellent introduction to electronics, it presents significant limitations for
undergraduate engineering students, particularly in advanced courses like motor control:
#### 1. Opaque Hardware Abstraction
**Arduino's Problem:**
```cpp
analogWrite(motorPin, 255); // What's actually happening?
```

**DarkLight's Approach:**
```cpp
// Transparent PWM Configuration
PwmOut motorPin(PTB0); // Assigns motor pin to pwm object

motorPin.period(0.001f); // 1kHz switching frequency
motorPin.write(0.5f); // 50% duty cycle - students understand the math
```
Engineering students need to understand timer peripherals, frequency of pulse and how that affects the duty cycle - all hidden by arduino's simplicity of fixed periods. 

#### 2. Inadequate Real-Time Performance
**Motor Control Critical Issues:** Arduino's delay() and non-deterministic Interrupt Service Routines (ISRs) create unpredictable timing that can:
- Destruct motors due to missed PWM updates.
- Cause instability in advanced closed-loop control systems.
- Prevent accurate sampling of position encoders.

**DarkLight Solution:** Direct NVIC configuration and predictable interrupt timing essential for:
- Field Oriented Control (FOC) algorithms.
- Quadrature encoder capture at high speeds.
- Precise PWM dead-time insertion.

#### 3. Limited Debugging Capabilities
The Arduino Serial Monitor is a form of "print debugging," which offers only basic monitoring, whereas professional Segger J-Link tools provide full hardware debugging capabilities like breakpoints, step-through execution, and real-time memory inspection. 
Limitations of Arduino's Serial Debugging
The Arduino Serial Monitor uses the board's universal asynchronous receiver-transmitter (UART) to send text messages to a host computer. Its limitations include: 
- **No Code Control:** The Serial Monitor is for output only; it cannot pause code execution, step through lines, or jump to specific parts of the program.
- **Limited Visibility:** It can only report values that you explicitly program it to print. It cannot inspect all variable values, memory contents, or CPU registers at an arbitrary moment in time.
- **Invasive:** Adding Serial.print() statements changes the code and its timing, which can sometimes alter the behavior of the bug you're trying to find.
- **Hardware Pin Usage:** The Serial Monitor uses specific hardware pins for communication, which might be needed for other components in your project.
- **Compiler Optimization Issues:** Extensive compiler optimizations can sometimes make the results of basic debugging appear nonsensical, which is harder to manage with simple print statements.

**Capabilities of Segger Tools**
Segger J-Link tools are professional hardware debug probes that interface directly with the microcontroller's debugging interface (typically SWD or JTAG). Their capabilities include: 
- **Full Code Control:** They allow you to set an unlimited number of breakpoints in flash memory, pause program execution, and step through code line by line (step-into, step-over, step-out).
- **Comprehensive Inspection:** You can inspect the values of all variables, view memory dumps, and examine the state of the CPU registers and peripheral pins in real-time while the code is paused.
- **Non-Invasive:** Hardware debugging does not require adding extra code to your sketch (like Serial.print), so it does not affect the program's timing or memory usage.
- **Real-Time Terminal (RTT):** Segger offers RTT technology for high-speed, non-intrusive "printf" style debugging that outputs messages without using the target's serial port, which is very useful for real-time applications.
- **Broad Compatibility:** J-Link probes work with a wide range of CPUs and architectures (ARM Cortex, etc.) and are compatible with many professional IDEs and tools, including Segger Embedded Studio.
- **System View** allows you to analyze control loop timing and RTOS tasks without intrusion.


#### 4. Missing Professional Development Skills
For industry-ready skills, engineering graduates need experience with:
- Professional IDEs (SEGGER Embedded Studio)
- Hardware debugging with real probes (ST-Link V2)
- Close to register level peripheral configuration (Simple abstraction layer)
- Version Control Integration
- Makefile-based build systems

Arduino teaches students none of these industry-essential skills

#### 5. Insufficient for Advanced Motor Control Topics
**Arduino Limitations:**
- Limited ADC sampling rate and synchronization
- Fixed PWM periods
- Inadequate interrupt priority management

**DarkLight Enables:**
- **BLDC Motor Control:** 6-step commutation with hardware timing
- **Stepper Motors:** Microstepping with current control
- **Servo Control:** Multiple synchronized PWM outputs
- **Power Electronics:** Buck/Boost converter control loops
- **Digital Signal Processing:** Filtering, audio processing and real-time control

### The DarkLight Educational Philosophy
DarkLight is built on the principle that engineering students should understand the hardware they are programming. We provide:
**1. Simple Layered Learning** - Fewer low-level abstraction blocks
**2. Professional Tools** - SEGGER ecosystem skills that transfer to industry jobs
**3. Real Engineering Challenges** - Solve actual advance motor control problems, not just
blinking LEDs
**4. Debugging-First Mindset** - Learn to use oscilloscopes, logic analyzers, and professional debug tools

### Who DarkLight Is For
- **Undergraduate Engineering Students** taking embedded systems, motor control, power electronics, or digital signal processing courses
- **Electrical Engineers** needing rapid prototyping for hardware validation
- **Educators** seeking a modern, professional alternative to Arduino for engineering labs
- **Hobbyists** ready to graduate to professional embedded development


## Profiles and RTOS


## Licensing
Blank for now

## Getting Started
You can start using DarkLight by clicking the next page to follow along with the documentation or navigate to the <code>Tutorial</code> section as a beginer in embedded systems. Make sure to use the API reference as a guide whenever you are confused about something.