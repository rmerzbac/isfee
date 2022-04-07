import React from 'react';
import Instrument from "./../../instrument";
import vid from './Guitar 006 moreRHTechniques.mp4';
import score from './Guitar 006 moreRHTechniques.png';

const instrumentText = {
  0: "A bracket indicates that all notes of a chord are to be played simultaneously, using one right-hand finger per string.",
  8: "Straight lines with arrows indicate the direction of a strummed chord.",
  14: "Straight lines with arrows indicate the direction of a strummed chord.",
  21: "Straight lines with arrows indicate the direction of a strummed chord.",
  23: "Rasgueado is a flamenco technique. The fingers are flicked across the strings in succession. This is one rare occasion when the little finger of the right hand is used. ",
  27: "A wavy line with an arrow indicates a slower strum.",
  33: "A wavy line with an arrow indicates a slower strum.\n\n" +
    "\"Sul ponticello\" translates as \"on the bridge,\" but guitarists will play \"sul pont\" midway between the tone hole and the bridge. This emphasizes the higher partials of the string timbre, creating a brighter sound.",
  39: "A wavy line with an arrow indicates a slower strum.\n\n" +
    "\"Metallico\" indicates are most extreme form of \"sul pont,\" playing as close to the bridge as possible, resulting in a very bright, wiry sound.",
  45: "\"Sul tasto\" means \"over the fingerboard.\" It has an effect opposite to \"sul ponticello,\" suppressing the high partials to create a warmer, muted sound.",
  53: "In guitar writing, \"pizz.\" indicates the use of the heel of the right hand to mute the strings as they are plucked, resulting in a much dryer articulation.",
  55: "In guitar writing, \"pizz.\" indicates the use of the heel of the right hand to mute the strings as they are plucked, resulting in a much dryer articulation.",
  57: "In guitar writing, \"pizz.\" indicates the use of the heel of the right hand to mute the strings as they are plucked, resulting in a much dryer articulation.",
  62: "Coordination of right-hand articulation and left-hand fingering makes it possible to play as fast on the guitar as on any other instrument.",
  67: "Coordination of right-hand articulation and left-hand fingering makes it possible to play as fast on the guitar as on any other instrument."
}

const morePages = [["/GuitarTF","Tuning, Fretboard"],
["/GuitarLHS","L. H. Shapes"],
["/GuitarLHSSC","L. H. Shapes, String Colors"],
["/GuitarRHFSS","R. H. Finger-Strokes, Slurs"],
["/GuitarRHFP","R. H. Finger Patterns"],
["/GuitarH","Harmonics"],
["/GuitarGT","Glissandos, Trills"],
["/GuitarCE","Color Extensions"]]

const gridHeights = [100, 100, 100, 100, 80];
const gridWidths = [[35, 140, 140, 145], [35, 135, 140, 150], [35, 140, 140, 145], [35, 125, 155, 145], [35, 280, 155]];
const gridTimes = [[0, 8, 14], [21, 23, 27], [33, 39, 45], [53, 55, 57], [62, 67]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Guitar"
        title="More R. H. Techniques"
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
