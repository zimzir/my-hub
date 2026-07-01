<div class="documentation-area" aria-hidden="true" style="position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);"></div>

# Electronic Design

<center> 
★ ★ ★ Circuits ★ ★ ★
</center><br>

This section focuses on electronic design, covering **schematic creation**, **PCB layout**, and basic **circuit concepts**. The goal is to design and produce a functional circuit using [KiCad](https://www.kicad.org/download/), incorporating essential components like microcontrollers, switches, and LEDs while getting acquainted with the workflow.

<center> 
<small> ha! easy peasy!</small> 
<br>
૮ ⚆ﻌ⚆ა                     (๏ᆺ๏υ)
<br>
<small>...?</small>
</center>

---

## Electronics

I've been introduced to this topic countless times, but unfortunately, little has stuck with me. So I'm decided to make this one count! 

I gathered a lot of information from a documentation [forum](https://fablabbcn-projects.gitlab.io/learning/educational-docs/fabacademy/classes/06-ElectronicsDesign/) and [this discussion](https://news.ycombinator.com/item?id=16775744), which highlighted the importance of **devoloping intuition**.

This has been my approach—the Beta approach, I hope. 

## Basic Electrical Concepts

**Charge** is the fundamental property of subatomic particles. Protons are positive, electrons are negative, and neutrons are neutral. Atoms, which make up all elements, consist of a core with protons and neutrons, while electrons orbit around them.

<center>
![Charge](../../images/documentation/pcb-manufacturing/Electronics-design/charge.gif)
</center>

**Voltage** is created when electrons are unevenly distributed, causing a potential difference. It is **measured in Volts (V)** and determines the energy applied per unit <span class="tooltip">charge<span style="color: #1a95e0;">*</span>
  <span class="tooltiptext">(E = V × Charge)</span>
</span> . This imbalance drives current flow as electrons move to restore equilibrium.

**Current** refers to the flow of electrons due to voltage difference and is **measured in Amperes (A)**. 

A **<span class="tooltip">direct current<span style="color: #1a95e0;">*</span> <span class="tooltiptext">DC</span>
</span>** flows consistently in one direction. 

An **<span class="tooltip">alternating current<span style="color: #1a95e0;">*</span> <span class="tooltiptext">AC</span>
</span>** changes direction over time.

![AC/DC](../../images/documentation/pcb-manufacturing/Electronics-design/ac-dc.webp)

**Resistance** determines how easily electrons can flow and is **measured in Ohms, Ω**. High resistance limits current flow, while low resistance allows high current, which can cause a short circuit if too low.

**Ohm’s Law** describes the relationship between voltage (V), current (I), and resistance (R):
<center>
𝑉 = 𝐼 × 𝑅
</center>

<small> I covered this in [FabAcademy program: week 4](https://fabacademy.org/2025/labs/barcelona/students/camila-simsiroglu/assignments/week%204.html) ;) </small>

---

## The Multimeter & Breadboard

A multimeter is a tool that measures voltage, resistance, and current in a circuit. It is also useful for debugging by checking continuity between points.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/multimeter.jpg" alt="Multimeter" width="200">
</center>


A breadboard is a prototyping tool that allows easy and quick connections between electronic components, enabling fast circuit assembly and testing.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/breadboard.jpeg" alt="Breadboard" width="200">
</center>

I usually test my circuit diagrams using wires and a breadboard before taking it to the PCB. 

---
## Electronic Design { style="text-align:center" }

In the world of electronics, designing circuits and systems requires a deep understanding of various components and how they work together. So we are going to start by describing the most basic ones and showcasing how they look on a schematic.

## Electronic components

- **Resistors**: Passive two-terminal electrical component that implements electrical resistance as a circuit element.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/resistor.jpg" alt="Resistor" width="200">
</center>


- **Capacitor**: A device that stores electrical energy in an electric field. It is a passive electronic component with two terminals. Its *main job* is to supress high frequency noise in power supply signals.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/capacitor.png" alt="Capacitor" width="200">
</center>

- **Diodes** (asymmetric conductunce): Two terminal component that conducts current primarly in one direction. It has low resistance in one direction, and high resistance in the other.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/diode.png" alt="Diode" width="200">
</center>

- **Oscillator**: Electronic circuit that produces a periodic, oscillating electronic signal, often a sine wave or a square wave or a triangle.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/oscillator.svg" alt="Oscillator" width="200">
</center>

- **Regulator**: A DC linear voltage regulator that can regulate the output voltge even when the supply voltage is very colse to the output voltage.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/regulator.png" alt="Regulator" width="200">
</center>

- **Transistor**: A switch that allows more voltage to be integrated to the circuit. Example; you want to control a light with a microprocessor.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/transistor.png" alt="Transistor" width="200">
</center> 

All of these components have specific numerical values and units that are tied to their functions. To ensure they work correctly within an integrated circuit, it's essential to calculate their values based on the requirements of your design. This information can be found in their respective **datasheets**, which provide crucial details on their specifications, operating conditions, and limitations.

--- 

## Electronic Design Automation

<span class="tooltip">EDA<span style="color: #1a95e0;">*</span> <span class="tooltiptext">Electronic Design Automation</span>
</span> tools help design and simulate electronic circuits. I use [KiCad](https://www.kicad.org/), a powerful open-source tool for schematic creation and PCB layout.

The design process involves several key concepts:

- **Symbols**: These are graphical representations of electronic components (such as resistors, capacitors, diodes, etc.) used in the schematic diagram. 

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/symbols.jpg" alt="Symbols" width="500">
</center>


- **Footprints**: A footprint refers to the physical layout of a component on the PCB, defining the size and shape of pads, holes, and the component’s positioning on the board. It serves as the actual placement of the component when soldered onto the PCB.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/footprint.jpg" alt="Footprint" width="300">
</center>


- **PCB** (Printed Circuit Board): A PCB is the physical board that holds and connects the components in an electronic circuit. It is made of layers of conductive material (usually copper) and insulating material (such as fiberglass). 

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/pcb.jpg" alt="PCB" width="300">
</center>

The PCB is where all the electrical connections between components are routed. 

---
<center>
## ꩜꩜꩜ Designing my first board ꩜꩜꩜
</center>

While I was learning this, I set out to design my very first board, completely on my own. While I've worked on other electronics projects in the past, like a MIDI controller, I always hit a wall when it came to diving into professional PCB design. 

To avoid getting overly ambitious or overconfident, I decided to take a more humble approach. Baby steps, really. Because sometimes learning involves feeling a little "dumb" as you work through the process. 

With that mindset, I opted to design a very simple board: **a basic circuit with a button, four LEDs, and an ATtiny microcontroller**. I used resistors for the LEDs, a capacitor, a USB-A for power, and a UPDI for programming. A straightforward design to get my feet wet and build a solid foundation.

### Requirements 

So what do I need? Or how do I know what I need? 

Well if you know anything about me, you might have noticed I tend to like small things. I studied a bunch of <span class="tooltip">MCUs<span style="color: #1a95e0;">*</span> <span class="tooltiptext">Microcontroller</span> </span>, including the Attiny.

The Attiny family is great for small compact designs.


OK! ᕙ(⇀‸↼‶)ᕗ <small> Hands on! </small>

I opened up KiCad, created a New Project, and went over to the Schematic editor.

Then I opened up the tab Preferences> Manage Symbol Libraries.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/preferences.jpeg" alt="preferences" width="300">
</center>

And there I clicked on the **+** icon to add the [zip folder](https://gitlab.fabcloud.org/pub/libraries/electronics/kicad) containg all the components we had at the local Lab where I worked on this (FabLab Barcelona). I also deactivated all the other presets loaded by KiCad so that I don't accidentally choose the symbol of a component to which I don't have access. 

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/symbol-libraries.jpeg" alt="Libraries" width="300">
</center>

Once this was done I used the command <code>A</code> to click anywhere in the canvas and so the list of symbols appeared. 

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/choose-symbol.jpeg" alt="Choose symbol" width="300">
</center>

I chose the **Attiny 412**. Below the list you can see some useful information, including a [link to the datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/40001911A.pdf). This is where I confirmed that **this MCU can handle 5V**, so using a USB Type-A(5V) power supply would check out perfectly.

I procedeed to add that component in the same way, then the rest of the components came and my schematic looked like this:
<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/schematic.jpeg" alt="schematic" width="600">
</center>



<center>
Lets go over my train of thoughts to understand the choices I made - why included certain components and left others out...
</center>

The Attiny 412 has **eight pins**. Out of these, one is VCC and one is GND, leaving me with six usable pins. The power source? USB. That takes care of two pins. Since **USB power** can introduce noise, I decided to smooth it out with a capacitor. To determine the right value, I consulted ChatGPT, which suggested using a **10 µF capacitor**. I also cross-checked this with other documentation and found a [project](https://fabacademy.org/2023/labs/isafjordur/students/svavar-konradsson/projects/t412.html#neils-board) that used the same capacitor, so I went with it.

Next, how will the board receive instructions? One option would be to use the USB data pins, but that would require two pins. Instead, I opted for **UPDI** (Unified Program and Debug Interface), which only needs one data pin connected to the board, plus VCC and GND.

What about a **transistor? Not needed!** as I confirmed earlier, the Attiny 412 can handle 5V directly.

I also wanted a **switch** to control the LEDs, so I assigned a pin for that. To prevent signal noise, I added a **pull-up resistor**.

At this point, I had four pins left for the LEDs ([this](https://download.luminus.com/datasheets/Luminus_MP3014_1100_Datasheet.pdf) ones I liked the most), each requiring a resistor. 

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/electrical-characteristics.jpg" alt="Electrical Characteristics" width="600">
</center>

According to the electrical characteristics, the LEDs have a typical forward voltage of 2.85V. Meaning the resistor needs to handle the remaining voltage from the 5V supply. I chose 100Ω resistors since they are easier to find, and they limit the current to a safe level, keeping the LEDs well within their recommended operating range.
<br>
​<center><small>
Great. Now I know every thing I wanted to place. 
</small></center>

You might have noticed that the symbols have labels on them to the side. This is to indicate their connections and you can find this tool the right panel. 

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/label.jpg" alt="label" width="200">
</center>

Once you know how to connect your components it's time for the fun part; **wiring**!!
Head over to the **PCB Editor** by clicking on this icon on the top right.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/pcb-editor.jpg" alt="pcb editor" width="200">
</center>

You might see an empty canvas so update your schematic using this icon on the top right.
<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/update.jpg" alt="update pcb editor" width="600">
</center>

Now all I needed to do is wire it up! Make a layer of copper connections and some tracing by hand. Sort of like building a maze and at the same time trying to find your way out of it.
This is how my board came out after an hour of wiring.
<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/final-board.jpg" alt="Final Board" width="600">
</center>

You can also add a layer for the **outline** of your board. But for the moment, I’ll just stick with a boring square and save the funny shapes for later.

Btw, this is a **3D model** of the board. 

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/3d-model.jpg" alt="3D Model" width="300">
</center>

You can access it by clicking on this Icon at the top right of the PCB editor.

<center>
<img src="../../../images/documentation/pcb-manufacturing/Electronics-design/3d-viewer.jpg" alt="3D Viewer" width="400">
</center>

You can also import it to your favourite 3D software and place it on your designs! Cool huh? 
<br>
---

I'll be exploring how to create boards in real life in the next section. So stay 
*grounded* and tuned for more. 


<small> Ps: you can access my design files [here](../../images/documentation/pcb-manufacturing/Electronics-design/sims-board.zip).</small>
