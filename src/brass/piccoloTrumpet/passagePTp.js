import React from 'react';
import Instrument from "./../../instrument";
import vid from './passagePTp.mp4'
import score from './passagePTp.png'

const instrumentText = {
  0: "This passage from the \"Credo\" of Bach's B-minor Mass was originally written for a valveless trumpet whose fundamental is the D below the bass clef -- almost twice as long as a modern C trumpet. Here an extended lead pipe is used to pitch the modern piccolo trumpet in A. \n\n" +
  "The score shows Bach's original transposition, the concert pitch result, and the way it would be notated for a modern piccolo trumpet in A, although trumpeters may prefer to transpose as they read from the original part.\n\n",
  8: "This passage from the \"Credo\" of Bach's B-minor Mass was originally written for a valveless trumpet whose fundamental is the D below the bass clef -- almost twice as long as a modern C trumpet. Here an extended lead pipe is used to pitch the modern piccolo trumpet in A. \n\n" +
  "The score shows Bach's original transposition, the concert pitch result, and the way it would be notated for a modern piccolo trumpet in A, although trumpeters may prefer to transpose as they read from the original part.\n\n",
  14: "This passage from the \"Credo\" of Bach's B-minor Mass was originally written for a valveless trumpet whose fundamental is the D below the bass clef -- almost twice as long as a modern C trumpet. Here an extended lead pipe is used to pitch the modern piccolo trumpet in A. \n\n" +
  "The score shows Bach's original transposition, the concert pitch result, and the way it would be notated for a modern piccolo trumpet in A, although trumpeters may prefer to transpose as they read from the original part.\n\n",
  18: "This passage from the \"Credo\" of Bach's B-minor Mass was originally written for a valveless trumpet whose fundamental is the D below the bass clef -- almost twice as long as a modern C trumpet. Here an extended lead pipe is used to pitch the modern piccolo trumpet in A. \n\n" +
  "The score shows Bach's original transposition, the concert pitch result, and the way it would be notated for a modern piccolo trumpet in A, although trumpeters may prefer to transpose as they read from the original part.\n\n"
}

const gridHeights = [150, 115, 120, 130]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480] ]
const gridTimes = [[0], [8], [14], [18]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piccolo Trumpet"
        title="Passages"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


