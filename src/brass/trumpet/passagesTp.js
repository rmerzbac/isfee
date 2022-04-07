import React from 'react';
import Instrument from "./../../instrument";
import vid from './passagesTp.mp4';
import score from './passagesTp.png';

const instrumentText = {
  0: "Performer: Thaddeus Archer \n\n" +
    "This heroic call from Beethoven's Leonore Overture No. \n\n" +
    " 2 uses the harmonic series of a larger valveless trumpet. \n\n" +
    "Trumpeters do not feel particularly compelled to use the size of trumpet designated by the composer, making their own choice based on the tessitura of the part and their personal preference. \n\n" +
    " This excerpt is performed here on a C trumpet, using the first valve to invoke the B-flat fundamental. ",
  12: "Performer: Thaddeus Archer \n\n" +
    "This heroic call from Beethoven's Leonore Overture No. \n\n" +
    " 2 uses the harmonic series of a larger valveless trumpet. \n\n" +
    "Trumpeters do not feel particularly compelled to use the size of trumpet designated by the composer, making their own choice based on the tessitura of the part and their personal preference. \n\n" +
    " This excerpt is performed here on a C trumpet, using the first valve to invoke the B-flat fundamental. ",
  22: "Performer: Thaddeus Archer \n\n" +
    "This passage from the beginning of Haydn's Trumpet Concerto demonstrates the lyric warmth and flexible cantabile possible on the trumpet over a range of nearly 2 octaves. \n\n" +
    " Here it is performed on the B-flat trumpet. ",
  32: "Performer: Thaddeus Archer \n\n" +
    "This passage from the beginning of Haydn's Trumpet Concerto demonstrates the lyric warmth and flexible cantabile possible on the trumpet over a range of nearly 2 octaves. \n\n" +
    " Here it is performed on the B-flat trumpet. \n\n"
}

const morePages = [["/TrumpetHFS","Harmonic Series, Fingering & Scales"],
["/TrumpetTRC","Tremolos & Register Colors"],
["/TrumpetAVC","Articulation & Vibrato Colors"],
["/TrumpetPBM","Pitch Bend & Mutes"]]

const gridHeights = [125, 100, 140, 110]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [12], [22], [32]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Trumpet"
        title="Passages"
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
