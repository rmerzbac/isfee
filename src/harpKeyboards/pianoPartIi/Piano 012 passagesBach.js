import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 012 passagesBach.mp4';
import score from './Piano 012 passagesBach.png';

const instrumentText = {
  0: "This passage from J. S. Bach's Prelude in B-flat major, Well-Tempered Clavier, Book 1, demonstrates two kinds of hand-combination patterns, uniting the hands in one flamboyant texture.\n\n" +
    "Although not composed for piano, this kind of writing is idiomatic for all keyboard instruments.",
  4: "This passage from J. S. Bach's Prelude in B-flat major, Well-Tempered Clavier, Book 1, demonstrates two kinds of hand-combination patterns, uniting the hands in one flamboyant texture.\n\n" +
    "Although not composed for piano, this kind of writing is idiomatic for all keyboard instruments.",
  6: "This passage from J. S. Bach's Prelude in B-flat major, Well-Tempered Clavier, Book 1, demonstrates two kinds of hand-combination patterns, uniting the hands in one flamboyant texture.\n\n" +
    "Although not composed for piano, this kind of writing is idiomatic for all keyboard instruments.",
  8: "This passage from J. S. Bach's Prelude in B-flat major, Well-Tempered Clavier, Book 1, demonstrates two kinds of hand-combination patterns, uniting the hands in one flamboyant texture.\n\n" +
    "Although not composed for piano, this kind of writing is idiomatic for all keyboard instruments.",
  14: "This passage from J. S. Bach's Fugue in A-flat major, Well-Tempered Clavier, Book 1, demonstrates how 4 independent voices can be managed with two hands.\n\n" +
    "In the second beat of the tenor voice, finger substitution (replacing one finger with another while depressing a key) is required to maintain a legato line.\n\n" +
    "In the second measure, the left hand assists with the alto voice."
}

const morePages = [["/PianoBC","Basic Construction"],
["/PianoDP","Damper Pedal"],
["/PianoPH","Pedalling, Harmonics"],
["/PianoUCS","Una Corda, Sostenuto"],
["/PianoSP","Sostenuto Pedal"],
["/PianoPE","Piano Ergonomics"],
["/PianoHCS","Hand Combination, Span"],
["/PianoSAD","Scale Articulation, Dynamics"],
["/PianoA","Arpeggios"],
["/PianoJG","Jumps, Glissandos"],
["/PianoOP","Orchestral Piano"],
["/PianoPB1","Passages - Beethoven, I"],
["/PianoPB2","Passages - Beethoven, II"],
["/PianoPD","Passages - Debussy"]]

const gridHeights = [95, 90, 95, 105, 140];
const gridWidths = [[35, 440], [35, 440], [35, 440], [35, 440], [35, 440]];
const gridTimes = [[0], [4], [6], [8], [14]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Passages - Bach"
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
