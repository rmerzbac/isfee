import React from 'react';
import Instrument from "./../../instrument";
import vid from './bongosTimbalesTomsConga.mp4'
import score from './bongosTimbalesTomsConga.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "Bongos always come in pairs and are the highest members of the drum family. They are traditionally played with the hands, but respond well to various kinds mallet (as demonstrated on the following page).",
  5: "Performer: Eric Guinivan\n\n" +
  "Bongos always come in pairs and are the highest members of the drum family. They are traditionally played with the hands, but respond well to various kinds mallet (as demonstrated on the following page).",
  10: "Performer: Eric Guinivan\n\n" +
  "Timbales are generally pitched between bongos and tomtoms. Their shell is shallower than tomtoms, and the sound is correspondingly bright and piercing.",
  15: "Performer: Eric Guinivan\n\n" +
  "Tomtom shells are deeper than timbales, and the sound deeper and more resonant. Tomtoms are available in a great variety of sizes. They are very responsive to the varieties of timbres created by different mallets.",
  24: "Performer: Eric Guinivan\n\n" +
  "The conga drum is traditionally played with the hands, using techniques that exploit the different timbres created by playing on different parts of the drum-head.",
  31: "Performer: Eric Guinivan\n\n" +
  "The conga drum is traditionally played with the hands, using techniques that exploit the different timbres created by playing on different parts of the drum-head.",
  41: "Performer: Eric Guinivan\n\n" +
  "A conga drum can also be played with various kinds of mallets, provide a sound that is relatively deep but still dry and precise. In this mode, it clearly projects over a large dynamic range.",
  47: "Performer: Eric Guinivan\n\n" +
  "A conga drum can also be played with various kinds of mallets, provide a sound that is relatively deep but still dry and precise. In this mode, it clearly projects over a large dynamic range."
}

const gridHeights = [110, 100, 90, 70, 50, 120]
const gridWidths = [[40, 200, 280], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0, 5], [10], [15], [24], [31], [41]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Drums"
        title="Bongos, Timbales, Toms & Congas"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


