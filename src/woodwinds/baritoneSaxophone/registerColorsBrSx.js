import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColorsBrSx.mp4'
import score from './registerColorsBrSx.png'

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  4: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  7: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  10: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  15: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  18: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  22: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  25: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  29: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This high-middle range is capable of projecting great intensity or sweetness.",
  33: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This high-middle range is capable of projecting great intensity or sweetness.",
  36: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This high-middle range is capable of projecting great intensity or sweetness.",
  40: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This high-middle range is capable of projecting great intensity or sweetness.",
  45: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Pitches written above the staff can sound pale, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  49: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Pitches written above the staff can sound pale, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  53: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Pitches written above the staff can sound pale, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  56: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Pitches written above the staff can sound pale, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
}

const morePages = [["/BaritoneSaxophoneRR","Range & Registers"],
["/BaritoneSaxophoneAC","Articulation Colors"],
["/BaritoneSaxophoneMAVC","More Articulations & Vibrato Colors"],
["/BaritoneSaxophoneP","Excerpts"]]

const gridHeights = [150, 120, 120, 140]
const gridWidths = [[40, 110, 110, 120, 140], [40, 110, 110, 120, 140], [40, 110, 110, 120, 140], [40, 110, 110, 120, 140]]
const gridTimes = [[0, 4, 7, 10], [15, 18, 22, 25], [29, 33, 36, 40], [45, 49, 53, 56]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Baritone Saxophone"
        title="Register Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}
        morePages={morePages}/>
    </div>
  );
}
