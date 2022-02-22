import {Project} from '../interfaces/project'

const allProjects: Project[] = [
    {
        "title": "Analog Synthesizer",
        "description": `
            Analog synthesizer that utilizes a Hex Schmitt trigger. The circuit was made on breadboard then transferred onto a protoboard
            and features 3 oscillators. The enclosure is designed in Adobe Illustrator and laser cut onto wood. 
        `,
        "slug": "analog-synth",
    },
    {
        "title": "Digital Synthesizer",
        "description": `
            Digital synthesizer made using an Arduino Teensy and MAX/MSP. The Arduino Teensy allows the physical knobs, buttons, and switches
            to control the MAX patch. It functions as a sequencer and FM synthesizer. I used Adobe Illustrator to laser cut an enclosure mad out of mirror acrlic.
        `,
        "slug": "digital-synth",
    },
    {
        "title": "MIDI Controller",
        "description": `
            MIDI controller that uses touchpad buttons and knobs that can be assigned function digitally in multiple programs.
            I used an Arduino uno to give the physical parts function, and Adobe Illustrator to design the enclosure which was laser cut out of wood. 
        `,
        "slug": "midi-controller",
    },
    {
        "title": "Tabletop Bass Guitar with MAX/MSP Looper",
        "description": `
            For this project I built a tabletop bass guitar and programmed a MAX/MSP looper patch for a solo perforce.
            The bass has 4 strings and pickups and can function as a fretless bass guitar, but also features a built-in spring reverb
            connected to a piezo pickup that can be controlled onboard for added percussive effect.
            The patch can then loop, modulate those loops, and be saved with presets.
        `,
        "slug": "max-looper-bass",
    }
]

export default allProjects