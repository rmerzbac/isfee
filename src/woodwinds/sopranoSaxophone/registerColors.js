import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColors.mp4';
import score from './registerColors.png';

const instrumentText = {
  0: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  3: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  5: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  8: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  12: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  15: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  17: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  20: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Even though this passage is in the low-middle range of the instrument, the sound projects with a brightness and intensity associated with a higher range.",
  23: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This high-middle range is capable of projecting great intensity or sweetness.",
  26: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This high-middle range is capable of projecting great intensity or sweetness.",
  29: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This high-middle range is capable of projecting great intensity or sweetness.",
  32: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This high-middle range is capable of projecting great intensity or sweetness.",
  35: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Pitches written above the staff can sound thin and strident, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  38: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Pitches written above the staff can sound thin and strident, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  41: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Pitches written above the staff can sound thin and strident, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  44: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Pitches written above the staff can sound thin and strident, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
}

const morePages = [["/sopranoSaxRR","Range & Registers"],
["/sopranoSaxP","Passage"],
["/sopranoSaxAC","Articulation Colors"],
["/sopranoSaxMAVC","More Articulation & Vibrato Colors"]]

const gridHeights = [150, 120, 120, 120]
const gridWidths = [[35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100]]
const gridTimes = [[0, 3, 5, 8],
                  [12, 15, 17, 20],
                  [23, 26, 29, 32],
                  [35, 38, 41, 44]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Soprano Saxophone"
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
