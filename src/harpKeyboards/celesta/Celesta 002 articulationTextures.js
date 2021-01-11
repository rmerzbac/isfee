import React from 'react';
import Instrument from "./../../instrument";
import vid from './Celesta 002 articulationTextures.mp4';
import score from './Celesta 002 articulationTextures.png';

const instrumentText = {
  0: "Since it is played by two hands on a keyboard, the celesta is capable of virtuosic gestures and harmonic density not available to other pitched percussion.",
  9: "Since it is played by two hands on a keyboard, the celesta is capable of virtuosic gestures and harmonic density not available to other pitched percussion.\n\n" +
    "Rolled chords and detailed pedaling effects allow shadings of textural variety specific to the celesta.",
  23: "Because of the highly colored harmonic structure of the timbre of each individual tone, open voiced cords may still sound relatively dense and rich.",
  30: "Repeated figuration such as the patterns demonstrated here effectively produces a magical shimmer. Notice that the dynamic range is relatively limited. The celesta's action is not conducive to subtle dynamic control.",
  40: "Repeated figuration such as the patterns demonstrated here effectively produces a magical shimmer. Notice that the dynamic range is relatively limited. The celesta's action is not conducive to subtle dynamic control.",
}

const gridHeights = [160, 150, 150];
const gridWidths = [[35, 190, 250], [35, 300], [35, 235, 200]];
const gridTimes = [[0, 9], [23], [30, 40]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Celesta"
        title="Articulation Textures"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
