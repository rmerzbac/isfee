import React from 'react';
import Instrument from "./../../instrument";
import vid from './bowDirectionsSpeedPressure.mp4';
import score from './bowDirectionsSpeedPressure.png';

const instrumentText = {
  0: "Generally speaking, a faster bow creates a louder sound. \n\n Greater bow speed results in more of the bow length employed over a period time.  \n\n These forte quarter notes use the whole length of the bow. ",
	5: "These piano quarter notes use only about a quarter of the length of the bow.",
	8: "Down-bow forte. \n\n Down-bow bow-strokes move in the direction from the frog (where the bow is held) to the tip. \n\n The part of the bow closest to the frog of the bow and the player's bow-arm naturally applies greater weight and pressure to the string than the part closer to the tip of the bow. To sustain this forte whole note as a down-bow stroke, the player must apply additional pressure as the bow moves to the tip.",
	10: "Up-bow forte. This up-bow stroke moves from the tip to the frog.",
	12: "Down-bow piano. These piano strokes use less bow length (slower speed) and less pressure.",
	14: "Up-bow piano. \n\n" +
  "These piano strokes use less bow length (slower speed) and less pressure.",
	16: "Down-bow diminuendo. \n\n" +
  "It is natural for the sound to lose its intensity s the bow travels towards the tip.",
	19: "Up-bow crescendo. \n\n" +
  "It is natural for the sound to gain strength as the bow approaches the frog.",
	23: "Down-bow forte-piano. \n\n" +
  "Note how a very fast bow is used to create the forte that begins the note, and a slow bow speed is used to sustain it at a piano dynamic.",
	26: "Up-bow forte-piano. \n\n" +
  "Note how a very fast bow is used to create the forte which begins the note, and a slow bow speed is used to sustain it at a piano dynamic. \n\n" +
  "Players develop the ability to counter the natural dynamic implications of bow direction and placement by adjusting pressure and speed. ",
	30: "Notice how these various bowing patterns affect not only the articulation of the notes, but also the part of the bow (frog, tip, upper-half, lower-half) that engages the string.",
	33: "Notice how these various bowing patterns affect not only the articulation of the notes, but also the part of the bow (frog, tip, upper-half, lower-half) that engages the string.",
	35: "Notice how these various bowing patterns affect not only the articulation of the notes, but also the part of the bow (frog, tip, upper-half, lower-half) that engages the string.",
	41: "Notice how these various bowing patterns affect not only the articulation of the notes, but also the part of the bow (frog, tip, upper-half, lower-half) that engages the string.",
	44: "Notice how these various bowing patterns affect not only the articulation of the notes, but also the part of the bow (frog, tip, upper-half, lower-half) that engages the string.",
	47: "Bow changes of unequal length may require an adjustment of bow speed and consequently an adjustment of bow pressure if a consistent dynamic level is desired.",
	50: "Here the faster bow speed for the up-bow is allowed to create a slight accent.",
	53: "Slurs from weak beats to strong beats.",
	58: "Accented notes played down-bow and up-bow.",
	61: "Here the tenuto-staccato is treated as affecting the attack of the note; other players may interpret it to affect the duration and place space between the notes.",
	65: "It is possible to articulate notes under one bow (called \"loure\" or \"portato\") by stopping the bow and then moving in the same direction which puts space between the notes (the interpretation used here), or by dynamically pulsing the notes (a smoother, less clear articulation).",
	70: "Successive down-bows require the player to \"re-take\" the bow between strokes. Each stroke is exactly the same. ",
}

const gridHeights = [100, 90, 80, 80, 80, 80]
const gridWidths = [[40, 190, 180, 120, 140],
                    [40, 60, 60, 60, 60, 60, 60],
                    [40, 100, 100, 200],
                    [40, 100, 100, 100, 120],
                    [40, 200, 100, 100],
                    [40, 270, 150]]
const gridTimes = [[0, 5, 8, 10],
                  [12, 14, 16, 19, 23, 26],
                  [30, 33, 35],
                  [41, 44, 47, 50],
                  [53, 58, 61],
                  [65, 70]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Cello"
        title="Bow Directions, Speed and Pressure"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
