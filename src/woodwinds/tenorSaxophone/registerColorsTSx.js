import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColorsTSx.mp4'
import score from './registerColorsTSx.png'

const instrumentText = {
  0: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  3: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  6: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  9: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  13: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  16: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  19: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  22: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  28: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This high-middle range is capable of projecting great intensity or sweetness.",
  31: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This high-middle range is capable of projecting great intensity or sweetness.",
  34: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This high-middle range is capable of projecting great intensity or sweetness.",
  37: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "This high-middle range is capable of projecting great intensity or sweetness.",
  42: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Pitches written above the staff can sound pale, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  45: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Pitches written above the staff can sound pale, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  48: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Pitches written above the staff can sound pale, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  51: "Performer: Stacy Wilson\n\n" +
  "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
  "Pitches written above the staff can sound pale, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance."
}

const morePages = [["/TenorSaxophoneRR","Range & Registers"],
["/TenorSaxophoneAC","Articulation Colors"],
["/TenorSaxophoneMAVC","More Articulation & Vibrato Colors"],
["/TenorSaxophoneP","Excerpts"]]

const gridHeights = [150, 120, 120, 130]
const gridWidths = [[40, 110, 110, 120, 140], [40, 110, 110, 120, 140], [40, 110, 110, 120, 140], [40, 110, 110, 120, 140]]
const gridTimes = [[0, 3, 6, 9], [13, 16, 19, 22], [28, 31, 34, 37], [42, 45, 48, 51]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Saxophone"
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
