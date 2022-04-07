import React from 'react';
import Instrument from "./../../instrument";
import vid from './rangeRegisters.mp4';
import score from './rangeRegisters.png';

const instrumentText = {
  0: "Performer: Crystal Barrett\n\n" +
    "The English Horn is a transposing instrument; the pitches sound a perfect 5th lower than written. The registers of the English Horn retain many of the characteristics of the oboe transposed down a 5th, but the changes in color as the pitches move from low to high are less pronounced than on the oboe. This is due in part to the presence of the \"d'amore bell,\" the bulb at the bottom of the instrument, which smoothes out the lower register.",
  24: "The English Horn developed with an emphasis on the effectiveness of the low range. These low notes are rounder, fuller, and less reedy than the corresponding written pitches on the oboe. Note that there is no written B-flat (sounding E-flat) on the English Horn. The presence of the \"d'amore bell\" prevents the construction of a low B-flat key.",
  39: "The extreme high register of the English Horn has some of that poignant pleading quality heard in the corresponding range of the oboe, but even these very high notes are relatively dark and rounded.",
}

const morePages = [["/englishHornRC","Register Colors"],
["/englishHornPAC","Passages & Articultion Colors"],
["/englishHornAVC","Articulation & Vibrato Colors"]]

const gridHeights = [230, 150]
const gridWidths = [[35, 440],
                    [35, 240, 200]]
const gridTimes = [[0],
                  [24, 39]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="English Horn"
        title="Range & Registers"
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
