import React from 'react';
import Instrument from "./../../instrument";
import vid from './range.mp4';
import score from './range.png';

const instrumentText = {
  0: "Performer: Tasha Warren.\n\n" +
    "The contra-alto clarinet in E-flat (a.k.a. the contralto clarinet and E-flat contrabass clarinet) is more common than its larger, lower brother, the B-flat contrabass clarinet. It is written in treble clef, with the concert pitch sounding an octave and a major 6th lower than the written pitch.\n\n" +
    "The low register (even the throat tones) can provide a rich color to the bass range of the orchestra.",
  8: "Performer: Tasha Warren.\n\n" +
    "The contra-alto clarinet in E-flat (a.k.a. the contralto clarinet and E-flat contrabass clarinet) is more common than its larger, lower brother, the B-flat contrabass clarinet. It is written treble clef, with the concert pitch sounding an octave and a major 6th lower than the written pitch. \n\n" +
    "The low register (even the throat tones) can provide a rich color to the bass range of the orchestra.",
  15: "Most contra-alto clarinets will have extra bass keys going at least as far down as written D (concert F). These notes are rich and resonant, and very flexible dynamically. Significantly more air is needed to produce the sound in this region. ",
}

const gridHeights = [230, 200]
const gridWidths = [[20, 260, 185],
                    [15, 435]]
const gridTimes = [[0, 8], [15]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contra-alto Clarinet"
        title="Range"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
