import React from 'react';
import Instrument from "./../../instrument";
import vid from './dynamicRangeColorsTmp.mp4';
import score from './dynamicRangeColorsTmp.png';

const instrumentText = {
  0: "The quality of attack associated with the choice of mallet can be distinctly heard on all drums at all dynamic levels.",
7: "The quality of attack associated with the choice of mallet can be distinctly heard on all drums at all dynamic levels.",
19: "The quality of attack associated with the choice of mallet can be distinctly heard on all drums at all dynamic levels.",
25: "The quality of attack associated with the choice of mallet can be distinctly heard on all drums at all dynamic levels. ",
38: "The quality of attack associated with the choice of mallet can be distinctly heard on all drums at all dynamic levels.",
45: "The quality of attack associated with the choice of mallet can be distinctly heard on all drums at all dynamic levels.",
51: "Damping with the fingers immediately after the stroke creates a dry staccato articulation.",
56: "Damping each note with the fingers as the next note is struck creates a clear legato articulation.",
59: "The normal beating spot for a timpani drum is three or four inches from the rim. \n\n" +
" Striking the drum in the center creates a \"thuddy\" attack with a fast decay.",
67: "Timpani shells when struck have sound pitches pitch related to (but not the same as) the tuning of the drum.",
70: "It is recommend that the tuning of all the drums be given at the beginning of a movement, and updated during extended rests.",
72: "This improvised passage displays typical tympani gestures, including hand-over-hand sticking and the playing of 2 drums simultaneously.",
77: "This improvised passage displays typical tympani gestures, including hand-over-hand sticking and the playing of 2 drums simultaneously.",
94: "Objects with a mixed-pitch sustained sound (a cymbal is particularly effective) can be placed on or near the top of a timpano, and will be influenced in pitch by changes in the drum pitch. ",
}

const gridHeights = [120, 100, 90, 70, 140]
const gridWidths = [[30, 70, 70, 70, 70, 70, 70],
                  [30, 120, 100, 100, 100],
                  [30, 80, 360],
                  [30, 420],
                  [30, 420]]
const gridTimes = [[0, 7, 19, 25, 38, 45],
                  [51, 56, 59, 67],
                  [70, 72],
                  [77],
                  [94]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Timpani"
        title="Dynamic Range & Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
