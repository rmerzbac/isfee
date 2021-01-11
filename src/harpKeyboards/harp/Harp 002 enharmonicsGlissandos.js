import React from 'react';
import Instrument from "./../../instrument";
import vid from './Harp 002 enharmonicsGlissandos.mp4';
import score from './Harp 002 enharmonicsGlissandos.png';

const instrumentText = {
  0: "Harp notation is unique in that the enharmonic spelling of a pitch unambiguously indicates the string and pedal setting to be employed, irrespective of theoretical interval relationships. (Some such enharmonic spellings can appear musically illiterate.) Every pitch excepting D-, G- and A-naturals can be played two different ways.\n\n" +
    "Since the process of playing a string involves resting a finger on it before plucking (damping a ringing string in the process), repeated notes are inevitably non-legato.",
  3: "Harp notation is unique in that the enharmonic spelling of a pitch unambiguously indicates the string and pedal setting to be employed, irrespective of theoretical interval relationships. (Some such enharmonic spellings can appear musically illiterate.) Every pitch excepting D-, G- and A-naturals can be played two different ways.\n\n" +
    "Enharmonic equivalencies are often used to allow a string to ring through a repetition. Here the right hand plays B-flat, and the left hand plays A-sharp. (The red string is C.)",
  8: "Harp strings are generally allowed to ring unless damping is marked or articulation is indicated. Repeated notes are by their nature self-damping, so these two different enharmonic spellings of these repeated chords indicate two contrasting articulation effects.",
  11: "Harp strings are generally allowed to ring unless damping is marked or articulation is indicated. Repeated notes are by their nature self-damping, so these two different enharmonic spellings of these repeated chords indicate two contrasting articulation effects.",
  15: "Repeated note tremolos are generally more effective when played as enharmonic trills.",
  21: "Here the enharmonic spelling of the pitches (as well as the pedal diagram which represents it) calls for a pedal setting with 3 enharmonic pitch-class homonyms. A glissando with this pedal setting yields a 4-note half-diminished 7th chord.",
  26: "This glissando notation suggests \"hand-over-hand\" glissandos. A precise number of \"mini-glissandos\" need not be indicated.",
  32: "Ascending single-hand double-note glissandos can be comfortably executed, but the descending form is awkward.",
  34: "Ascending single-hand double-note glissandos can be comfortably executed, but the descending form is awkward.",
  37: "Ascending single-hand double-note glissandos can be comfortably executed, but the descending form is awkward.",
  39: "Ascending single-hand double-note glissandos can be comfortably executed, but the descending form is awkward.",
}

const gridHeights = [80, 60, 115, 140, 160];
const gridWidths = [[40, 200, 250], [50, 150, 170, 170], [35, 450], [35, 450], [60, 120, 180, 140, 190]];
const gridTimes = [[0, 3], [8, 11, 15], [21], [26], [32, 34, 37, 39]];


export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Harp"
        title="Enharmonic & Glissandos"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
