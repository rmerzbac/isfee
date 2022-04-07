import React from 'react';
import Instrument from "./../../instrument";
import vid from './Harp 007 blockedRolledChords.mp4';
import score from './Harp 007 blockedRolledChords.png';

const instrumentText = {
  0: "This passage from Rimsky-Korsakov's Capriccio Espagnol is presented 2 different ways; once with blocked chords, and once with a slight rolling of the chords.\n\n" +
    "Note that in both performances the chords are allowed to ring; the rests are not understood to indicate damping. This is largely a matter of style and taste, and may be governed by harpists' recognition of their role in relation to the sound of the rest of the orchestra. In contemporary works, harpists may suspect that rests do imply damping.",
  7: "This passage from Rimsky-Korsakov's Capriccio Espagnol is presented 2 different ways; once with blocked chords, and once with a slight rolling of the chords.\n\n" +
    "Note that in both performances the chords are allowed to ring; the rests are not understood to indicate damping. This is largely a matter of style and taste, and may be governed by harpists' recognition of their role in relation to the sound of the rest of the orchestra. In contemporary works, harpists may suspect that rests do imply damping.",
  15: "This passage from Rimsky-Korsakov's Capriccio Espagnol is presented 2 different ways; once with blocked chords, and once with a slight rolling of the chords.\n\n" +
    "Note that in both performances the chords are allowed to ring; the rests are not understood to indicate damping. This is largely a matter of style and taste, and may be governed by harpists' recognition of their role in relation to the sound of the rest of the orchestra. In contemporary works, harpists may suspect that rests do imply damping.",
  20: "This passage from Rimsky-Korsakov's Capriccio Espagnol is presented 2 different ways; once with blocked chords, and once with a slight rolling of the chords.\n\n" +
    "Note that in both performances the chords are allowed to ring; the rests are not understood to indicate damping. This is largely a matter of style and taste, and may be governed by harpists' recognition of their role in relation to the sound of the rest of the orchestra. In contemporary works, harpists may suspect that rests do imply damping.",
}

const morePages = [["/HarpPB","Pedal Basics"],
["/HarpEG","Enharmonic & Glissandos"],
["/HarpS","Scales"],
["/HarpCRA","Chords, Registers, Articulations"],
["/HarpAI","Arpeggiation Idioms"],
["/HarpHE","Harmonics & Effects"]]


const gridHeights = [150, 120, 130, 120];
const gridWidths = [[35, 440], [35, 440], [35, 440], [35, 440]];
const gridTimes = [[0], [7], [15], [20]];


export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Harp"
        title="Blocked & Rolled Chords"
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
