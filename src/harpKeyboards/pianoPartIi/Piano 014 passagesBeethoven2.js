import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 014 passagesBeethoven2.mp4';
import score from './Piano 014 passagesBeethoven2.png';

const instrumentText = {
  0: "Here a new textural relationship is introduced: right hand forearm octave jabs against soft repeated wrist dyads in the left.\n\n" +
    "This 4-note chord arpeggio is significantly easier than a triad arpeggio, which would have required the pianist to cover more ground with bigger skips in less time.",
  5: "The hand crossing here allows to right hand to have an antiphonal dialogue with itself. These skips are a bit treacherous, but the passage is made easier by three factors: the left hand is very simple; there is always at least a measure between skips to regain poise; and the skips are always to black notes, which are much easier to find in a hurry than white notes since they stand out from the keyboard. In cross-hand passages the traveling hand generally goes over the stationary hand.",
  9: "The hand crossing here allows to right hand to have an antiphonal dialogue with itself. These skips are a bit treacherous, but the passage is made easier by three factors: the left hand is very simple; there is always at least a measure between skips to regain poise; and the skips are always to black notes, which are much easier to find in a hurry than white notes since they stand out from the keyboard. In cross-hand passages the traveling hand generally goes over the stationary hand.",
  14: "This is an exceptionally effective example of physical mirror writing using radial rotation of the wrist from the elbow. The octave interval allows the radial motions to be used most efficiently (in keyboard technique, large interval tremolos are more ergonomic than trills). However, each hand position spans no more than an octave, avoiding large skips. The articulation of the outer notes (first sustained, then staccato) gives the impression of 4 textural layers.",
  18: "This is an exceptionally effective example of physical mirror writing using radial rotation of the wrist from the elbow. The octave interval allows the radial motions to be used most efficiently (in keyboard technique, large interval tremolos are more ergonomic than trills). However, each hand position spans no more than an octave, avoiding large skips. The articulation of the outer notes (first sustained, then staccato) gives the impression of 4 textural layers."
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
["/PianoPB","Passages - Bach"],
["/PianoPB1","Passages - Beethoven, I"],
["/PianoPD","Passages - Debussy"]]

const gridHeights = [130, 90, 100, 100, 100];
const gridWidths = [[35, 440], [35, 440], [35, 440], [35, 440], [35, 440]];
const gridTimes = [[0], [5], [9], [14], [18]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Passages - Beethoven 2"
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
