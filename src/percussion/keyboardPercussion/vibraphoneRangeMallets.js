import React from 'react';
import Instrument from "./../../instrument";
import vid from './vibraphoneRangeMallets.mp4'
import score from './vibraphoneRangeMallets.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "The standard vibraphone has a 3-octave range. The tubular resonators allow the metal bars to sustain the tone for a prolonged time, unless the pedal is released, which damps all the bars.",
  12: "Performer: Eric Guinivan\n\n" +
  "The tubular resonators allow the metal bars to sustain the tone for a prolonged time, unless the pedal is released, which damps all the bars.",
  19: "Performer: Eric Guinivan\n\n" +
  "The tubular resonators allow the metal bars to sustain the tone for a prolonged time, unless the pedal is released, which damps all the bars.",
  23: "Performer: Eric Guinivan\n\n" +
  "The tubular resonators allow the metal bars to sustain the tone for a prolonged time, unless the pedal is released, which damps all the bars.",
  33: "Performer: Eric Guinivan\n\n" +
  "Discs inside the resonators are made to revolve when the motor is turned on, creating vibrato. The motor has a speed control. In this example it is on the \"slow\" setting.",
  41: "Performer: Eric Guinivan\n\n" +
  "Discs inside the resonators are made to revolve when the motor is turned on, creating vibrato. The motor has a speed control. In this example it is on the \"slow\" setting.",
  46: "Performer: Eric Guinivan\n\n" +
  "Discs inside the resonators are made to revolve when the motor is turned on, creating vibrato. The motor has a speed control. In this example it is on the \"slow\" setting.",
  60: "Performer: Eric Guinivan\n\n" +
  "Harder mallets bring out the bell-like quality of the vibraphone's tone.",
  66: "Performer: Eric Guinivan\n\n" +
  "Harder mallets bring out the bell-like quality of the vibraphone's tone.",
  71: "Performer: Eric Guinivan\n\n" +
  "Harder mallets bring out the bell-like quality of the vibraphone's tone."
}

const gridHeights = [130, 120, 130, 120]
const gridWidths = [[40, 480], [40, 170, 90, 220], [40, 170, 90, 220], [40, 170, 90, 220]]
const gridTimes = [[0], [12, 19, 23], [33, 41, 46], [60, 66, 71]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Keyboard Percussion"
        title="Vibraphone: Range Mallets"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


