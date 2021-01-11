import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColors.mp4';
import score from './registerColors.png';

const instrumentText = {
  0: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  4: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  8: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  11: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This low range is relatively dark and full. Attacking the low C in these examples requires care and skill, particularly at softer dynamic levels.",
  17: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Even though this passage is in the low-middle range of the instrument (and the concert-pitch range suggests a dark \"low mezzo\" color), the sound projects with a brightness and intensity associated with a higher range.",
  20: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Even though this passage is in the low-middle range of the instrument (and the concert-pitch range suggests a dark \"low mezzo\" color), the sound projects with a brightness and intensity associated with a higher range.",
  24: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Even though this passage is in the low-middle range of the instrument (and the concert-pitch range suggests a dark \"low mezzo\" color), the sound projects with a brightness and intensity associated with a higher range.",
  28: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Even though this passage is in the low-middle range of the instrument (and the concert-pitch range suggests a dark \"low mezzo\" color), the sound projects with a brightness and intensity associated with a higher range.",
  32: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This high-middle range is capable of projecting great intensity or sweetness.",
  35: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This high-middle range is capable of projecting great intensity or sweetness.",
  39: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This high-middle range is capable of projecting great intensity or sweetness.",
  42: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "This high-middle range is capable of projecting great intensity or sweetness.",
  46: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Pitches written above the staff can sound thin and strident, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  50: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Pitches written above the staff can sound thin and strident, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  54: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Pitches written above the staff can sound thin and strident, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
  57: "The saxophone is constructed in such a way as to provide great consistency of timbre and articulation qualities throughout its standard range.\n\n" +
    "Pitches written above the staff can sound thin and strident, but an accomplished performer can take advantage of the flexibility of the instrument to add color and richness with vibrato, dynamic inflection and articulation nuance.",
}

const gridHeights = [150, 120, 120, 120]
const gridWidths = [[35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100],
                    [35, 100, 100, 100, 100]]
const gridTimes = [[0, 4, 8, 11],
                  [17, 20, 24, 28],
                  [32, 35, 39, 42],
                  [46, 50, 54, 57]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Alto Saxophone"
        title="Register Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
