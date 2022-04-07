import React from 'react';
import Instrument from "./../../instrument";
import vid from './Celesta 001 rangeDynamics.mp4';
import score from './Celesta 001 rangeDynamics.png';

const instrumentText = {
  0: "Performer: Don Freund\n\n" +
    "The celesta sounds an octave higher than written; this can be indicated by the use of treble and bass clefs with an \"8\" above.\n\n" +
    "The standard range of the celesta is from SOUNDING middle C to the top C of the piano, but NOTATED an octave lower.\n\n" +
    "In the orchestra the celesta may be played by the orchestral pianist or a member of the percussion section. When the performer is \"doubling,\" it is often played from a standing position.",
  15: "The celesta is essentially the body of a glockenspiel played with mechanism of a piano. Since the hammers that strike the celesta's steel bars are made of felt, its tone is warm and darkly colored when compared to the glockenspiel, but bright and colorful compared to the high range of the piano.\n\n" +
    "The celesta has dampers and a pedal that acts similarly to the piano's damper pedal, but the decay of the tones, even in the lower octaves, is relatively rapid, and the dampers are much less efficient in stopping the tone than the piano's dampers are.",
  21: "The lower range of the celesta has a strong non-harmonic attack transient tone that is particularly pronounced at loud dynamic levels.",
  26: "The lower range of the celesta has a strong non-harmonic attack transient tone that is particularly pronounced at loud dynamic levels.",
  36: "The lower range of the celesta has a strong non-harmonic attack transient tone that is particularly pronounced at loud dynamic levels.",
  41: "The lower range of the celesta has a strong non-harmonic attack transient tone that is particularly pronounced at loud dynamic levels.",
  52: "The top range of the celesta is full of ringing color, which can be extended by the use of the pedal.",
  59: "The top range of the celesta is full of ringing color, which can be extended by the use of the pedal.",
  68: "The top range of the celesta is full of ringing color, which can be extended by the use of the pedal.",
  77: "The top range of the celesta is full of ringing color, which can be extended by the use of the pedal.",
}

const morePages = [["/CelestaAT","Articulation Textures"]]

const gridHeights = [200, 125, 125];
const gridWidths = [[35, 118, 300], [35, 100, 100, 100, 100], [35, 100, 100, 100, 100]];
const gridTimes = [[0, 15], [21, 26, 36, 41], [52, 59, 68, 77]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Celesta"
        title="Range & Dynamics"
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
