import React from 'react';
import Instrument from "./../../instrument";
import vid from './drumMultiset.mp4'
import score from './drumMultiset.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "Drums are frequently arrayed together in a configuration chosen by the composer. This particular multi-set allows for a large range and four distinct basic drum colors, which are in turn varied on a large scale by the choice of mallets.\n\n" +
  "The fatter sound of the handles of wood sticks, which are broader and heavier compared with the tips, provides a commonly used all-purpose wood-stick character for the multi-set. ",
  4: "Performer: Eric Guinivan\n\n" +
  "Drums are frequently arrayed together in a configuration chosen by the composer. This particular multi-set allows for a large range and four distinct basic drum colors, which are in turn varied on a large scale by the choice of mallets.\n\n" +
  "The fatter sound of the handles of wood sticks, which are broader and heavier compared with the tips, provides a commonly used all-purpose wood-stick character for the multi-set.",
  9: "Performer: Eric Guinivan\n\n" +
  "The pitch range of the drum multi-set is evident even when playing on the rims of the drums.",
  13: "Performer: Eric Guinivan\n\n" +
  "The pitch range of the drum multi-set is evident even when playing on the rims of the drums.",
  17: "Performer: Eric Guinivan\n\n" +
  "Medium yarn mallets project a full-bodied sound throughout the multi-set.",
  20: "Performer: Eric Guinivan\n\n" +
  "Medium yarn mallets project a full-bodied sound throughout the multi-set.",
  26: "Performer: Eric Guinivan\n\n" +
  "Playing with the hands (actually the finger-tips) can produce warm, intimate but clear sound on all drums.",
  29: "Performer: Eric Guinivan\n\n" +
  "Playing with the hands (actually the finger-tips) can produce warm, intimate but clear sound on all drums.",
}

const morePages = [["/DrumsSBD","Snare & Bass Drums"],
["/DrumsBTTC","Bongos, Timbales, Toms & Congas"],
["/DrumsDS","Swing Drum Set"],
["/DrumsDR","Rock Drum Set"],
["/DrumsT","Tambourine"]]

const gridHeights = [110, 60, 60, 60, 60, 50, 60, 60]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [4], [9], [13], [17], [20], [26], [29]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Drums"
        title="Drum Multi-set"
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
