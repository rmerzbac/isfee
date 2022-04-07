import React from 'react';
import Instrument from "./../../instrument";
import vid from './range.mp4';
import score from './range.png';

const instrumentText = {
  0: "Performer: Tasha Warren.\n\n" +
    "Contemporary notation for the bass clarinet uses only treble clef, with the concert pitch sounding an octave and a major 2nd lower than the written pitch.\n\n" +
    "These pitches move from the middle of the chalumeau register of the bass clarinet into the \"throat tones.\" This low register (even the throat tones) projects a distinctive, unmistakable color in the bass range of the orchestra.",
  7: "As the bass clarinet ascends through its clarion register the sound becomes paler.",
  12: "The highest notes of the bass clarinet are useful for range purposes, but may sound colorless.",
  18: "All bass clarinets will have extra bass keys going at least as far down as written D (concert C, matching the C-string of the cello). These notes are rich and resonant, and very flexible dynamically. Significantly more air is needed to produce the sound in this region."
}

const morePages = [["/bassClarinetRC","Register Colors"],
["/bassClarinetAC","Articulation Colors"],
["/bassClarinetP","Passages"]]

const gridHeights = [230, 200]
const gridWidths = [[20, 260, 185],
                    [15, 180, 250]]
const gridTimes = [[0, 7],
                  [12, 18]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bass Clarinet"
        title="Range"
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
