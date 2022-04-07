import React from 'react';
import Instrument from "./../../instrument";
import vid from './passage.mp4';
import score from './passage.png';

const instrumentText = {
  0: "This passage from Beethoven's Pastorale Symphony displays the bright, clear sound of the clarinet's clarion register (although it dips into throat tones in the 5th and 6th measurers). It also demonstrates the instrument's agility and dynamic range, especially effective in the 4-measure diminuendo to pp.",
  5: "This passage from Beethoven's Pastorale Symphony displays the bright, clear sound of the clarinet's clarion register (although it dips into throat tones in the 5th and 6th measurers). It also demonstrates the instrument's agility and dynamic range, especially effective in the 4-measure diminuendo to pp.",
  10: "This passage from Beethoven's Pastorale Symphony displays the bright, clear sound of the clarinet's clarion register (although it dips into throat tones in the 5th and 6th measurers). It also demonstrates the instrument's agility and dynamic range, especially effective in the 4-measure diminuendo to pp.",
  14: "This passage from Beethoven's Pastorale Symphony displays the bright, clear sound of the clarinet's clarion register (although it dips into throat tones in the 5th and 6th measurers). It also demonstrates the instrument's agility and dynamic range, especially effective in the 4-measure diminuendo to pp.",
}

const morePages = [["/clarinetRS","Range & Skips"],
["/clarinetTT","Trills & Tremolos"],
["/clarinetRC","Register Colors"],
["/clarinetAC","Articulation Colors"],
["/clarinetTV","Tonguing & Vibrato"],
["/clarinetAP","Another Passage"]]

const gridHeights = [125, 130, 130, 125]
const gridWidths = [[35, 435],
                    [35, 435],
                    [35, 435],
                    [35, 435]]
const gridTimes = [[0], [5], [10], [14]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Clarinet"
        title="Passage"
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
