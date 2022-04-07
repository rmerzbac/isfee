import React from 'react';
import Instrument from "./../../instrument";
import vid from './passagesArticulationColors.mp4';
import score from './passagesArticulationColors.png';

const instrumentText = {
  0: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "These two famous excerpts from the third movement of Tchaikovsky's 4th Symphony display both the brilliance and the agility of the piccolo.",
  6: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "These two famous excerpts from the third movement of Tchaikovsky's 4th Symphony display both the brilliance and the agility of the piccolo.",
  10: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "The excerpt from Stravinsky's Firebird features triple-tonguing on the piccolo. The tonguing pattern is spelled by the composer (highly unusual), presumably to show a preference for the \"tokoto\" triple-tongue over the alternative \"totoko.\"",
  13: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "The piccolo is very responsive to fast passagework throughout its range.\n\n" +
    "Even when slurred, each note speaks very clearly.",
  17: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "The piccolo is very responsive to fast passagework throughout its range.\n\n" +
    "The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
  21: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "The piccolo is very responsive to fast passagework throughout its range.\n\n" +
    "Single tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.",
  26: "Please remember when looking at these scores that the piccolo sounds an octave higher than written.\n\n" +
    "The piccolo is very responsive to fast passagework throughout its range.\n\n" +
    "Double-tonguing is particularly effective on members of the flute family, where the tonguing is unencumbered by the reeds employed by all the other woodwinds.",
}

const morePages = [["/piccoloRRC", "Range, Registers, & Colors"],
["/piccoloMAV", "More Articulation & Vibrato"]]

const gridHeights = [100, 65, 60, 70, 60, 70, 70];
const gridWidths = [[70, 390],[55, 405],[55, 405],
              [35, 425],[35, 425],[35, 425],[35, 425]];
const gridTimes = [[0],[6],[10],[13],[17],[21],[26]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piccolo"
        title="Passages & Articulation Colors"
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
