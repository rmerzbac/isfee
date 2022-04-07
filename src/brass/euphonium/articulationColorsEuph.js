import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColorsEuph.mp4'
import score from './articulationColorsEuph.png'

const instrumentText = {
  0: "Performer: Matt Maslanka\n\n" +
  "The precise, immediate changes in the length of the column of air created by the valve mechanism provide a basic clarity of articulation on brass instruments, even when played legato with no tonguing.",
  6: "Performer: Matt Maslanka\n\n" +
  "Slur-two-tongue-two articulation is very common and effective on brass instruments.",
  11: "Performer: Matt Maslanka\n\n" +
  "Single tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.",
  16: "Performer: Matt Maslanka\n\n" +
  "Double-tonguing is very effective for fast passages on brass instruments.",
  21: "Performer: Matt Maslanka\n\n" +
  "Staccato articulation is effective in all but the lowest registers of the euphonium.",
  23: "Performer: Matt Maslanka\n\n" +
  "Staccato articulation is effective in all but the lowest registers of the euphonium.",
  26: "Performer: Matt Maslanka\n\n" +
  "Triple-tonguing can be very effective on all brass instruments. It must be remembered that when triple-tonguing skips (as in this example) the amount of preparation time moving into the new note is considerably shortened, making the attacks less secure.",
  29: "Performer: Matt Maslanka\n\n" +
  "Flutter-tonguing is effective throughout the range of the euphonium. Individual players may prefer to use the front or back of the tongue.",
  34: "Performer: Matt Maslanka\n\n" +
  "Flutter-tonguing is effective throughout the range of the euphonium. Individual players may prefer to use the front or back of the tongue."
}

const morePages = [["/EuphoniumHSVS","Harmonic Series, Valves, & Scales"],
["/EuphoniumSTRC","Skips, Trills, & Register Colors"],
["/EuphoniumVMP","Vibrato, Mutes, & Passages"]]

const gridHeights = [80, 60, 60, 60, 68, 90, 90]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 240, 240], [40, 480], [40, 240, 240]]
const gridTimes = [[0], [6], [11], [16], [21, 23], [26], [29, 34]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Euphonium"
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
