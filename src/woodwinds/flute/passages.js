import React from 'react';
import Instrument from "./../../instrument";
import vid from './passages.mp4';
import score from './passages.png';

const instrumentText = {
  0: "This famous orchestral excerpt from the last movement of Beethoven's \"Eroica\" Symphony displays both the lyricism and scintillating virtuosity that can be projected in the most effective orchestral tessitura of the instrument.",
	6: "This famous orchestral excerpt from the last movement of Beethoven's \"Eroica\" Symphony displays both the lyricism and scintillating virtuosity that can be projected in the most effective orchestral tessitura of the instrument.",
	11: "This famous orchestral excerpt from the last movement of Beethoven's \"Eroica\" Symphony displays both the lyricism and scintillating virtuosity that can be projected in the most effective orchestral tessitura of the instrument.",
	15:	"This famous orchestral excerpt from the last movement of Beethoven's \"Eroica\" Symphony displays both the lyricism and scintillating virtuosity that can be projected in the most effective orchestral tessitura of the instrument.",
	18: "This famous orchestral excerpt from the last movement of Beethoven's \"Eroica\" Symphony displays both the lyricism and scintillating virtuosity that can be projected in the most effective orchestral tessitura of the instrument.\n\n" +
    "The flute's facility for double-tonguing allows every note of this passage to be articulated; on other woodwinds some slurring would be advised.",
	21: "This famous orchestral excerpt from the last movement of Beethoven's \"Eroica\" Symphony displays both the lyricism and scintillating virtuosity that can be projected in the most effective orchestral tessitura of the instrument.\n\n" +
    "The flute's facility for double-tonguing allows every note of this passage to be articulated; on other woodwinds some slurring would be advised.",
	25: "This excerpt from Saint-Saens's Carnival of the Animals demonstrates the unique agility of the flute.",
	28: "This excerpt from Saint-Saens's Carnival of the Animals demonstrates the unique agility of the flute."
}

const morePages = [["/fluteRRT","Range, Registers, & Tremolos"],
["/fluteRC","Register Colors"],
["/fluteAVC", "Articulation & Vibrato Colors"]]

const gridHeights = [84, 55, 55, 55, 50, 55, 75, 70]
const gridWidths = [[35, 425],
                    [35, 425],
                    [35, 425],
                    [35, 425],
                    [35, 425],
                    [35, 425],
                    [35, 425],
                    [35, 425]]
const gridTimes = [[0],
                  [6],
                  [11],
                  [15],
                  [18],
                  [21],
                  [25],
                  [28]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Flute"
        title="Passages"
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
