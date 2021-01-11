import React from 'react';
import Instrument from "./../../instrument";
import vid from './snareBassDrum.mp4'
import score from './snareBassDrum.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "The snare drum is almost always played with snare drum sticks, and usually the snares are on. Strokes can be broadened or accentuated by a flam (2 strokes total including the main note), a drag (3 strokes) or a ruff (4 or 5 strokes). These are played \"closed\" (rebounding strokes) when marked with a slur. These grace notes and rolls (which are normally also \"closed\") can also be played \"open\" with separate single strokes for a more deliberate effect. The final note is a rim-shot.",
  7: "Performer: Eric Guinivan\n\n" +
  "The snare drum is almost always played with snare drum sticks, and usually the snares are on. Strokes can be broadened or accentuated by a flam (2 strokes total including the main note), a drag (3 strokes) or a ruff (4 or 5 strokes). These are played \"closed\" (rebounding strokes) when marked with a slur. These grace notes and rolls (which are normally also \"closed\") can also be played \"open\" with separate single strokes for a more deliberate effect. The final note is a rim-shot.",
  16: "Performer: Eric Guinivan\n\n" +
  "The snares my be turned off to create a clearer, deeper sound.",
  23: "Performer: Eric Guinivan\n\n" +
  "The snares my be turned off to create a clearer, deeper sound.",
  33: "Performer: Eric Guinivan\n\n" +
  "Bass drums may be positioned vertically, horizontally, or at an angle as in this demonstration. Bass drum beaters are specifically created for that particular instrument. Heavy felt beaters will provide the fullest, deepest sound.",
  45: "Performer: Eric Guinivan\n\n" +
  "Bass drums may be positioned vertically, horizontally, or at an angle as in this demonstration. Bass drum beaters are specifically created for that particular instrument. Heavy felt beaters will provide the fullest, deepest sound.\n\n" +
  "The quality of the bass drum can be changed significant by different degrees of left hand muting.",
  57: "Performer: Eric Guinivan\n\n" +
  "As beaters get harder, they generally have smaller mallet heads, increasing the contrast towards a more incisive, less rounded sound.",
  68: "Performer: Eric Guinivan\n\n" +
  "As beaters get harder, they generally have smaller mallet heads, increasing the contrast towards a more incisive, less rounded sound.",
  79: "Performer: Eric Guinivan\n\n" +
  "The bass drum is capable of a very large dynamic range.",
  99: "Performer: Eric Guinivan\n\n" +
  "When played with hard beaters, the bass drum can clearly articulate relatively fast rhythms.",
  106: "Performer: Eric Guinivan\n\n" +
  "The bass drum can be damped with the knee to create a very crisp articulation.",
  114: "Performer: Eric Guinivan\n\n" +
  "The bass drum is usually struck midway between the center of the drum and the edge. Varying this beating point creates an interesting variety of colors.",
}

const gridHeights = [80, 50, 60, 60, 80, 60, 60, 60]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 210, 270], [40, 210, 270], [40, 150, 330], [40, 230, 250]]
const gridTimes = [[0], [7], [16], [23], [33, 45], [57, 68], [79, 99], [106, 114]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Drums"
        title="Snare & Bass Drum"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


