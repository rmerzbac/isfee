import React from 'react';
import Instrument from "./../../instrument";
import vid from './excerptB.mp4';
import score from './excerptB.png';

const instrumentText = {
  0: "This passage from Mozart's \"Haffner\" Symphony (No. 35, KV 385, last movement) demonstrates the virtuosity demanded of bassists even in works of the classical period. Here the bass section doubles the cellos an octave lower.",
		6: "This passage from Mozart's \"Haffner\" Symphony (No. 35, KV 385, last movement) demonstrates the virtuosity demanded of bassists even in works of the classical period. Here the bass section doubles the cellos an octave lower.",
		11: "This passage from Mozart's \"Haffner\" Symphony (No. 35, KV 385, last movement) demonstrates the virtuosity demanded of bassists even in works of the classical period. Here the bass section doubles the cellos an octave lower.",
		15: "This passage from Mozart's \"Haffner\" Symphony (No. 35, KV 385, last movement) demonstrates the virtuosity demanded of bassists even in works of the classical period. Here the bass section doubles the cellos an octave lower.",
		19: "This passage from Mozart's \"Haffner\" Symphony (No. 35, KV 385, last movement) demonstrates the virtuosity demanded of bassists even in works of the classical period. Here the bass section doubles the cellos an octave lower.",
		24: "This passage from Mozart's \"Haffner\" Symphony (No. 35, KV 385, last movement) demonstrates the virtuosity demanded of bassists even in works of the classical period. Here the bass section doubles the cellos an octave lower.",
		28: "This passage from Mozart's \"Haffner\" Symphony (No. 35, KV 385, last movement) demonstrates the virtuosity demanded of bassists even in works of the classical period. Here the bass section doubles the cellos an octave lower.",
		31: "This passage from Mozart's \"Haffner\" Symphony (No. 35, KV 385, last movement) demonstrates the virtuosity demanded of bassists even in works of the classical period. Here the bass section doubles the cellos an octave lower.",
		36: "This passage from Mozart's \"Haffner\" Symphony (No. 35, KV 385, last movement) demonstrates the virtuosity demanded of bassists even in works of the classical period. Here the bass section doubles the cellos an octave lower. \n\n" +
"The octave skips in this line require playing on non-adjacent strings, flying over a silent string in between them.",
		39: "This passage from Mozart's \"Haffner\" Symphony (No. 35, KV 385, last movement) demonstrates the virtuosity demanded of bassists even in works of the classical period. Here the bass section doubles the cellos an octave lower.",

  }

const gridHeights = [80, 50, 50, 45, 45, 45, 45, 45, 45, 50]
const gridWidths = [[40, 440],
                    [40, 440],
                    [40, 440],
                    [40, 440],
                    [40, 440],
                    [40, 440],
                    [40, 440],
                    [40, 440],
                    [40, 440],
                    [40, 440]]
const gridTimes = [[0],
                  [6],
                  [11],
                  [15],
                  [19],
                  [24],
                  [28],
                  [31],
                  [36],
                  [39]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contrabass"
        title="Excerpt"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
