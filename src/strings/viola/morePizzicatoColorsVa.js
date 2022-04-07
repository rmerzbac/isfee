import React from 'react';
import Instrument from "./../../instrument";
import vid from './morePizzicatoColorsVa.mp4';
import score from './morePizzicatoColorsVa.png';

const instrumentText = {
  0:"Double-stop pizzicatos may played with the index and middle finger (as in this performance), or as a fast strum (if the strings are adjacent).",
4:"Pizzicato triple and quadruple stops are usually arpeggiated with one finger. If the direction is upward the thumb can strum across the strings. (The direction of the strum should be indicated.)",
7:"Pizzicato triple and quadruple stops are usually arpeggiated with one finger. If the direction is upward the thumb can strum across the strings. (The direction of the strum should be indicated.)",
13:"Slurred pizzicatos are less effective on the violin and viola than on the cello and contrabass. The pitches of the slur must be on the same string. Notice that the sound quickly decays, except when the second note is the open A string.",
18:"Glissando pizzicato is an interesting but very subtle gesture.",
24:"Snap pizzicato, also called Bartok pizz., is created by pulling the string away from the fingerboard and releasing it so that it snaps back against the fingerboard. \n\n" +
"Here it is executed by grabbing the string between the thumb and finger, pulling and releasing.",
33:"It is possible to pluck open strings with the left hand while stopping another string with the left hand and playing arco.",
}

const morePages = [["/scalesTrillsStringColors","Scales, Trills & String Colors"],
["/arpeggiosDoubleStopsVa","Arpeggios & Double Stops"],
["/harmonicsVibratoGlissandoVa","Harmonics, Vibrato & Glissando"],
["/articulationColorsVa","Articulation & Bow Colors"],
["/moreBowColorsVa","More Bow Colors"],
["/colLegnoPizzicatoVa","Col Legno & Pizzicato"],
["/passageVa","Excerpt"]]

const gridHeights = [120, 120, 120, 120]
const gridWidths = [[40, 150, 170, 160],
                    [40, 210, 210],
                    [40, 400],
                    [40, 420]]
const gridTimes = [[0, 4, 7],
                  [13, 18],
                  [24],
                  [33]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Viola"
        title="More Pizzicato Colors"
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
