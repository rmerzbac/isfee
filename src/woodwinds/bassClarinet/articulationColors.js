import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColors.mp4';
import score from './articulationColors.png';

const instrumentText = {
  0: "The bass clarinet shares the clarinet's renowned agility, particularly in arpeggio passages. Even when slurred, each note speaks very clearly.",
  5: "The bass clarinet shares the clarinet's renowned agility, particularly in arpeggio passages. The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
  9: "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments. Staccato on the bass clarinet can be more incisive than on the clarinet.",
  12: "Staccato articulation speaks clearly in all registers of single-reed instruments, though not as precisely and edgy as in double-reed instruments. Staccato on the bass clarinet can be more incisive than on the clarinet, and is especially effective in the lowest octave of the range."
}

const morePages = [["/bassClarinetR","Range"],
["/bassClarinetRC","Register Colors"],
["/bassClarinetP","Passages"]]

const gridHeights = [190, 150, 150]
const gridWidths = [[35, 430],
                    [35, 430],
                    [35, 215, 215]]
const gridTimes = [[0], [5], [9, 12]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bass Clarinet"
        title="Articulation Colors"
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
