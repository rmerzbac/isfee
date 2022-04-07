import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationVibratoColorsTp.mp4';
import score from './articulationVibratoColorsTp.png';

const instrumentText = {
  0: "Performer: Thaddeus Archer \n\n" +
    "The precise, immediate changes in the length of the column of air created by the valve mechanism provide a basic clarity of articulation on brass instruments, even when played legato with no tonguing. ",
  6: "Performer: Thaddeus Archer \n\n" +
    "Slur-two-tongue-two articulation is very common and effective on brass instruments. ",
  12: "Performer: Thaddeus Archer \n\n" +
    "Single tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful. ",
  20: "Performer: Thaddeus Archer \n\n" +
    "Double-tonguing is very effective for fast passages on brass instruments. ",
  26: "Performer: Thaddeus Archer \n\n" +
    "Staccato articulation is effective in all but the highest and lowest registers of the trumpet, although it projects most clearly in the middle-high register. ",
  29: "Performer: Thaddeus Archer \n\n" +
    "Staccato articulation is effective in all but the highest and lowest registers of the trumpet, although it projects most clearly in the middle-high register. ",
  33: "Performer: Thaddeus Archer \n\n" +
    "Triple-tonguing can be very effective on all brass instruments. \n\n" +
    " It must be remembered that when triple-tonguing skips (as in this example) the amount of preparation time moving into the new note is considerably shortened, making the attacks less secure. ",
  37: "Performer: Thaddeus Archer \n\n" +
    "Flutter-tonguing is effective throughout the range of the trumpet. ",
  42: "Performer: Thaddeus Archer \n\n" +
    "A slight amount of vibrato is normal on the trumpet, applied according to the taste and discretion of the performer. \n\n" +
    " Composers may specify varying amounts of vibrato. ",
  47: "Performer: Thaddeus Archer \n\n" +
    "A slight amount of vibrato is normal on the trumpet, applied according to the taste and discretion of the performer. \n\n" +
    " Composers may specify varying amounts of vibrato. ",
  54: "Performer: Thaddeus Archer \n\n" +
    "A slight amount of vibrato is normal on the trumpet, applied according to the taste and discretion of the performer. \n\n" +
    " Composers may specify varying amounts of vibrato. \n\n"
}

const morePages = [["/TrumpetHFS","Harmonic Series, Fingering & Scales"],
["/TrumpetTRC","Tremolos & Register Colors"],
["/TrumpetPBM","Pitch Bend & Mutes"],
["/TrumpetP","Passages"]]

const gridHeights = [80, 50, 60, 60, 60, 70, 70, 90]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 230, 260], [40, 480], [40, 480], [40, 110, 110, 260]]
const gridTimes = [[0], [6], [12], [20], [26, 29], [33], [37], [42, 47, 54]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Trumpet"
        title="Articulation & Vibrato Colors"
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
