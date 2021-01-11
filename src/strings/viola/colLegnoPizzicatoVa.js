import React from 'react';
import Instrument from "./../../instrument";
import vid from './colLegnoPizzicatoVa.mp4';
import score from './colLegnoPizzicatoVa.png';

const instrumentText = {
  0: "Col legno battuto means \"struck with the wood of bow.\" The bow is flipped to do this. \n\n" +
"If time permits, some players may switch to an old bow (or even a chopstick, which produces essentially the same sound) to preserve the varnish on their bows.",
6: "Col legno tratto means \"bowed with the wood of bow.\" The bow is flipped to do this. \n\n" +
"If time permits, some players may switch to an old bow to preserve the varnish on their bows.",
19: "Single pizzicato notes are usually all played with the index finger of the right hand. Most orchestral string players have not developed a multi-finger pizzicato technique. \n\n" +
"If there is time to set the bow down, pizzicato playing can better controlled.",
29: "Single pizzicato notes are usually all played with the index finger of the right hand. Most orchestral string players have not developed a multi-finger pizzicato technique. \n\n" +
"If there is time to set the bow down, pizzicato playing can better controlled.",
32: "Single pizzicato notes are usually all played with the index finger of the right hand. Most orchestral string players have not developed a multi-finger pizzicato technique. \n\n" +
"If there is time to set the bow down, pizzicato playing can better controlled.",

  }

const gridHeights = [120, 120, 120, 120]
const gridWidths = [[40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 210, 220],
                    [40, 440],
                    [40, 440]]
const gridTimes = [[0],
                  [6],
                  [19],
                  [29, 32]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Viola"
        title="Col Legno & Pizzicato"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
