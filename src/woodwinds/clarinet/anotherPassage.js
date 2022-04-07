import React from 'react';
import Instrument from "./../../instrument";
import vid from './anotherPassage.mp4';
import score from './anotherPassage.png';

const instrumentText = {
  0: "In this excerpt from Rimsky-Korsakov's Capriccio Espagnol, the clarinet begins by imitating the solo violin, but takes the arpeggio figure further and faster, ending in virtual \"sheets of sound.\"",
  4: "In this excerpt from Rimsky-Korsakov's Capriccio Espagnol, the clarinet begins by imitating the solo violin, but takes the arpeggio figure further and faster, ending in virtual \"sheets of sound.\"",
  10: "In this excerpt from Rimsky-Korsakov's Capriccio Espagnol, the clarinet begins by imitating the solo violin, but takes the arpeggio figure further and faster, ending in virtual \"sheets of sound.\"",
  12: "In this excerpt from Rimsky-Korsakov's Capriccio Espagnol, the clarinet begins by imitating the solo violin, but takes the arpeggio figure further and faster, ending in virtual \"sheets of sound.\"",
  14: "In this excerpt from Rimsky-Korsakov's Capriccio Espagnol, the clarinet begins by imitating the solo violin, but takes the arpeggio figure further and faster, ending in virtual \"sheets of sound.\"",
}

const morePages = [["/clarinetRS","Range & Skips"],
["/clarinetTT","Trills & Tremolos"],
["/clarinetRC","Register Colors"],
["/clarinetAC","Articulation Colors"],
["/clarinetTV","Tonguing & Vibrato"],
["/clarinetP","Passage"]]

const gridHeights = [90, 110, 120, 120, 100]
const gridWidths = [[35, 440],
                    [35, 440],
                    [35, 440],
                    [35, 440],
                    [35, 440]]
const gridTimes = [[0], [4], [10], [12], [14]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Clarinet"
        title="Another Passage"
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
