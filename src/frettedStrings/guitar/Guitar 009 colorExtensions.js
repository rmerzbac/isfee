import React from 'react';
import Instrument from "./../../instrument";
import vid from './Guitar 009 colorExtensions.mp4';
import score from './Guitar 009 colorExtensions.png';

const instrumentText = {
  0: "Tone bending on the guitar is performed by stretching the string parallel to the fret. The pitch span of the bend is limited to a half-step.",
  17: "\"Tamburo\" is striking the strings with the thumb side of the right hand. Although the effect is predominantly percussive, the pitch of the strings can be recognized.",
  24: "The fingers of the left hand or right hand can strike the string hard enough at a fret to create a clear percussive pitch, called a \"slap tone.\" Releasing the string vigorously and rhythmically allows the open string to be heard as part of the gesture. Here the lowest string is tuned to D.",
  30: "The body of the guitar is readily accessible for a variety of percussion sounds.",
  40: "Crossing adjacent strings together so that they buzz against each other creates a pitched sound emulating a snare drum.",
  51: "Crossing adjacent strings together so that they buzz against each other creates a pitched sound emulating a snare drum.",
  60: "Crossing adjacent strings together so that they buzz against each other creates a pitched sound emulating a snare drum.",
  68: "The bottom three strings of the guitar have a winding of fine wire to increase their weight. These wound strings can be scraped with the nails of the right hand to produce a whistling sound.",
  75: "The sections of the strings between the top-nut and tuning barrels have an indeterminate high pitch.",
  83: "The guitar can easily be \"prepared\" by threading or attaching a foreign element to the strings at the bridge.",
  102: "The guitar can easily be \"prepared\" by threading or attaching a foreign element to the strings at the bridge.",
  117: "The guitar can easily be \"prepared\" by threading or attaching a foreign element to the strings at the bridge."
}

const morePages = [["/GuitarTF","Tuning, Fretboard"],
["/GuitarLHS","L. H. Shapes"],
["/GuitarLHSSC","L. H. Shapes, String Colors"],
["/GuitarRHFSS","R. H. Finger-Strokes, Slurs"],
["/GuitarRHFP","R. H. Finger Patterns"],
["/GuitarMRHT","More R. H. Techniques"],
["/GuitarH","Harmonics"],
["/GuitarGT","Glissandos, Trills"]]

const gridHeights = [100, 90, 110, 110, 100];
const gridWidths = [[35, 270, 165], [35, 440], [30, 445], [35, 145, 140, 140], [35, 85, 155, 55, 60, 60]];
const gridTimes = [[0, 17], [24], [30], [40, 51, 60], [68, 75, 83, 102, 117]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Guitar"
        title="Color Extensions"
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
