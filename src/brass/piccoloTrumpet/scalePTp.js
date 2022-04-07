import React from 'react';
import Instrument from "./../../instrument";
import vid from './scalePTp.mp4'
import score from './scalePTp.png'

const instrumentText = {
  0: "Performer: Thaddeus Archer\n\n" +
  "The B-flat piccolo trumpet is an invention whose principal function is to make Baroque high clarino trumpet parts more manageable. It is half the size of the standard B-flat trumpet, with partials sounding an octave higher than that instrument.\n\n" +
  "The 4th valve (played with the little finger) adds tubing to lower the fundamental a perfect 4th, making the lowest note of this scale playable.",
  8: "Performer: Thaddeus Archer\n\n" +
  "The B-flat piccolo trumpet is an invention whose principal function is to make Baroque high clarino trumpet parts more manageable. It is half the size of the standard B-flat trumpet, with partials sounding an octave higher than that instrument.\n\n" +
  "Note that the range is not extended an octave higher, but that the security and agility of the high range is greatly enhanced."
}

const morePages = [["/PiccoloTrumpetP","Passages"]]

const gridHeights = [335]
const gridWidths = [[40, 280, 200]]
const gridTimes = [[0, 8]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piccolo Trumpet"
        title="Scales"
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
