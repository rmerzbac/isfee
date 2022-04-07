import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColorsTuba.mp4'
import score from './registerColorsTuba.png'

const instrumentText = {
  0: "Performer: James Saliers\n\n" +
    "This low range is the tuba's most distinctive register.",
  3: "Performer: James Saliers\n\n" +
    "This low range is the tuba's most distinctive register.",
  6: "Performer: James Saliers\n\n" +
    "This low range is the tuba's most distinctive register.",
  9: "Performer: James Saliers\n\n" +
    "This low range is the tuba's most distinctive register.",
  13: "Performer: James Saliers\n\n" +
    "This lower middle range is strong, colorful, and very responsive.",
  16: "Performer: James Saliers\n\n" +
    "This lower middle range is strong, colorful, and very responsive.",
  19: "Performer: James Saliers\n\n" +
    "This lower middle range is strong, colorful, and very responsive.",
  22: "Performer: James Saliers\n\n" +
    "This lower middle range is strong, colorful, and very responsive.",
  25: "Performer: James Saliers\n\n" +
    "Even at the bottom of the bass clef the tuba begins to sound as an instrument entering its higher range. For this line and the next, the F tuba is used in this performance.",
  28: "Performer: James Saliers\n\n" +
    "Even at the bottom of the bass clef the tuba begins to sound as an instrument entering its higher range. For this line and the next, the F tuba is used in this performance.",
  30: "Performer: James Saliers\n\n" +
    "Even at the bottom of the bass clef the tuba begins to sound as an instrument entering its higher range. For this line and the next, the F tuba is used in this performance.",
  33: "Performer: James Saliers\n\n" +
    "Even at the bottom of the bass clef the tuba begins to sound as an instrument entering its higher range. For this line and the next, the F tuba is used in this performance.",
  36: "Performer: James Saliers\n\n" +
    "The tuba does not become particularly more brilliant in its high range, but this region is relatively responsive to shading of dynamics and articulation. The F tuba (used in this performance) responds better than the CC tuba in this range.",
  39: "Performer: James Saliers\n\n" +
    "The tuba does not become particularly more brilliant in its high range, but this region is relatively responsive to shading of dynamics and articulation. The F tuba (used in this performance) responds better than the CC tuba in this range.",
  41: "Performer: James Saliers\n\n" +
    "The tuba does not become particularly more brilliant in its high range, but this region is relatively responsive to shading of dynamics and articulation. The F tuba (used in this performance) responds better than the CC tuba in this range.",
  44: "Performer: James Saliers\n\n" +
    "The tuba does not become particularly more brilliant in its high range, but this region is relatively responsive to shading of dynamics and articulation. The F tuba (used in this performance) responds better than the CC tuba in this range.",
}

const morePages = [["/TubaHSST","Harmonic Series, Scales & Trills"],
["/TubaAC","Articulation Colors"],
["/TubaAVM","Articulations, Vibrato & Mutes"],
["/TubaP","Passages I"],
["/TubaP2","Passages II"]]

const gridHeights = [160, 110, 100, 120]
const gridWidths = [[40, 110, 120, 110, 150], [40, 110, 120, 110, 150], [40, 110, 120, 110, 150], [40, 110, 120, 110, 150]]
const gridTimes = [[0, 3, 6, 9], [13, 16, 19, 22], [25, 28, 30, 33], [36, 39, 41, 44]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tuba"
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
