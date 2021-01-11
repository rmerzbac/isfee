import React from 'react';
import Instrument from "./../../instrument";
import vid from './vibraphoneDampingBowing.mp4'
import score from './vibraphoneDampingBowing.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "Pitches that are ringing with the pedal depressed can be selectively damped with the mallets while other tones continue to ring.",
  8: "Performer: Eric Guinivan\n\n" +
  "A similar technique entails holding the pedal to allow a chord to ring, and then damping each note of a melody as the next one is played, creating a clean legato melody over a sustained chord.",
  25: "Performer: Eric Guinivan\n\n" +
  "This example uses a rare 4-octave vibraphone and demonstrates the change in color created by varying the motor speed.",
  39: "Performer: Eric Guinivan\n\n" +
  "This example uses a rare 4-octave vibraphone and demonstrates the change in color created by varying the motor speed.",
  59: "Performer: Eric Guinivan\n\n" +
  "Bowing the vibraphone bars with a bass bow is very effective if the pedal is depressed. In this example only \"white keys\" are used. Alternating bowing between the fronts of the \"white keys\" and the backs of the \"black keys\" can be unwieldy.",
  82: "Performer: Eric Guinivan\n\n" +
  "Bowing the vibraphone bars with a bass bow is very effective if the pedal is depressed. In this example only \"white keys\" are used. Alternating bowing between the fronts of the \"white keys\" and the backs of the \"black keys\" can be unwieldy.",
  108: "Performer: Eric Guinivan\n\n" +
  "The vibraphone may be played without the pedal depressed, giving a sharp dry articulation approaching the xylophone.",
  116: "Performer: Eric Guinivan\n\n" +
  "The vibraphone may be played without the pedal depressed, giving a sharp dry articulation approaching the xylophone; in this version pedal is introduced for contrast."
}

const gridHeights = [100, 70, 80, 80, 100, 100]
const gridWidths = [[40, 480], [40, 480], [40, 230, 250], [40, 180, 300], [40, 480], [40, 480]]
const gridTimes = [[0], [8], [25, 39], [59, 82], [108], [116]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Keyboard Percussion"
        title="Vibraphone: Damping & Bowing"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


