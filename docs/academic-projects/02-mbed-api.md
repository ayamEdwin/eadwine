# Custom Mbed
## Mbed Application Programming Interface (API)
The retirement of the Mbed OS platform [Mbed OS](https://os.mbed.com/) effective July 2026 created a critical gap in our embedded systems curriculum at
Koforidua Technical University. The subsequent move to low-level STM32 programming (bare-metal, CMSIS, HAL)
proved excessively difficult for sophomore engineering students, hindering their ability to engage with core course
material effectively.
I Led a team of top students in the Mechatronics department
to design and develop an educational STM32 API, inspired by
the retired Mbed framework, to abstract low-level hardware
complexity for sophomore engineering students. I managed
the full project lifecycle using Git/GitHub, delivering a tool that
allowed students to prioritize application development over
register configuration. The solution was later adopted by
university staff, which is set to be scaled nationally as [DarkLight](https://www.darklightrts.com/),
and will continue to aid embedded systems education across
Ghana.

## API Implementation

The API was developed using industry-standard tools including **Segger Embedded Studio** for development and debugging, and **GitHub** for version control and collaborative development. These tools ensured professional code quality and enabled seamless team collaboration throughout the project lifecycle.

![Mbed Code](/img/mbed_code.png)

## API Usage Example

The API is designed with a familiar interface similar to the **ARM Mbed** style of usage, making the transition seamless for students already familiar with Mbed. This design choice reduces the learning curve and allows students to focus on embedded systems concepts rather than API syntax.

![Mbed API Usage](/img/mbed_api_usage.png)

## Hardware Pinout

The API was customized for the **STM32F030RC6** microcontroller, a low-cost ARM Cortex-M0 device ideal for educational purposes. The hardware pinout was carefully designed to expose essential GPIO, ADC, UART, and timer peripherals while abstracting the complexities of register-level configuration.

![Mbed Pinout](/img/mbed_pinout.png)