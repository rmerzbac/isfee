import React from 'react';
import Instrument from "./../../instrument";
import vid from './trianglesCowbell.mp4';
import score from './trianglesCowbell.png';

const instrumentText = {
  0: "Triangles are available in a variety of sizes. \n\n" +
" They are almost always played with a triangle beater, a thin metal rod. \n\n" +
" The decay lasts a substantial amount of time, so a damping symbol can be a significant indication.",
30: "Triangle vibrato can be effectively created by oscillating the air around the instrument.",
37: "When the triangle is positioned so that it can be damped by the free hand, the damping can become a rhythmic part of the articulation.",
51: "The tone color of the cowbell is greatly influenced by the choice of mallets.",
56: "The tone color of the cowbell is greatly influenced by the choice of mallets.",
61: "The tone color of the cowbell is greatly influenced by the choice of mallets.",
68: "The tone color of the cowbell is greatly influenced by the choice of mallets. \n\n" +
" Here the contrast in tone is created not only by the difference in size between the wood stick handle and tip but also the place on the cowbell at which it is struck.",
}

const gridHeights = [110, 130, 100, 90, 110]
const gridWidths = [[30, 320, 100],
                    [30, 420],
                    [30, 70, 350],
                    [30, 420],
                    [70, 390]]
const gridTimes = [[0, 30],
                  [37],
                  [51, 56],
                  [61],
                  [68]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Metals"
        title="Triangles and Cowbell"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
