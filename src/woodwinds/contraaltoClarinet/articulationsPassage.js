import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationsPassage.mp4';
import score from './articulationsPassage.png';

const instrumentText = {
  0: "For an instrument of its size and depth, the contra-alto clarinet is surprisingly agile.",
  5: "For an instrument of its size and depth, the contra-alto clarinet is surprisingly agile.",
  10: "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments. Compare the contra-alto clarinet with the contrabassoon.",
  14: "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments. Compare the contra-alto clarinet with the contrabassoon.",
  17: "This transcription of a Bach organ pedal line displays the fluidity and fullness of color of the contra-alto clarinet.",
}

const gridHeights = [160, 120, 120, 120]
const gridWidths = [[35, 430],
                    [35, 430],
                    [35, 215, 215],
                    [35, 430]]
const gridTimes = [[0], [5], [10, 14], [17]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contra-alto Clarinet"
        title="Articulations & Passage"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
