import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 013 passagesBeethoven1.mp4';
import score from './Piano 013 passagesBeethoven1.png';

const instrumentText = {
  0: "These excerpts are from the first movement of Beethoven's Sonata, Op. 13, \"Pathetique.\" The opening chord is exceptionally heavy and dark, with notes closely packed in a low range, inviting the pianist to expend the combined weight of torso and arm. The psychological effect of the forte-piano attack is created by the contrasting lightness of the ensuing thinner-voiced chords, whose dotted rhythms are articulated from the wrist.",
  12: "Similar chord structures played an octave higher are remarkably brighter in color.",
  22: "After a re-thickening to a staccato 6-voice chord, all the drama is focused into a single note, a laser-point of sound far more effective than a chord or an octave would have been. The rest under this note provides the quality of open space that makes this moment particularly incisive, especially as it is followed by the low octave B-flats.",
  33: "The Allegro derives its energy from the octave tremolo figure of the left hand; note that the right hand quarter notes (played from the wrist) are dyads, while the half-note forearm strokes are three and four-note chords.",
  35: "The Allegro derives its energy from the octave tremolo figure of the left hand; note that the right hand quarter notes (played from the wrist) are dyads, while the half-note forearm strokes are three and four-note chords."
}

const gridHeights = [130, 120, 110, 110];
const gridWidths = [[35, 180, 255], [35, 440], [35, 440], [35, 440]];
const gridTimes = [[0, 12], [22], [33], [35]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Passages - Beethoven 1"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
