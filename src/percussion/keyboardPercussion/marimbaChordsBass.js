import React from 'react';
import Instrument from "./../../instrument";
import vid from './marimbaChordsBass.mp4'
import score from './marimbaChordsBass.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "4-voice chorales may be played on the marimba as one-stroke chords, but it is far more common to play a passage such as this one employing tremolo.",
  17: "Performer: Eric Guinivan\n\n" +
  "4-voice chorales may be played on the marimba as one-stroke chords, but it is far more common to play a passage such as this one employing tremolo.",
  39: "Performer: Eric Guinivan\n\n" +
  "The lower octave of the grand marimba or bass marimba speaks most resonantly with soft mallets.\n\n" +
  "Do not ask for hard mallets to play loudly in the bass range of the marimba. These large (and expensive) wood bars are easily cracked.",
  45: "Performer: Eric Guinivan\n\n" +
  "The lower octave of the grand marimba or bass marimba speaks most resonantly with soft mallets.",
}

const gridHeights = [160, 130, 100, 80]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [17], [39], [45]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Keyboard Percussion"
        title="Marimba: Chords & Bass"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


