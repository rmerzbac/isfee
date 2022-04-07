import React from 'react';
import Instrument from "./../../instrument";
import vid from './passageVa.mp4';
import score from './passageVa.png';

const instrumentText = {
  0:"This short solo passage from Richard Strauss's Don Quixote provides a catalog of characteristic viola gestures. \n\n" +
"Notice that it is sometimes advisable to change bows more often than Strauss's slurring indicates.",
6:"This short solo passage from Richard Strauss's Don Quixote provides a catalog of characteristic viola gestures. \n\n" +
"Notice that it is sometimes advisable to change bows more often than Strauss's slurring indicates.",
13:"This short solo passage from Richard Strauss's Don Quixote provides a catalog of characteristic viola gestures. \n\n" +
"Notice that it is sometimes advisable to change bows more often than Strauss's slurring indicates.",
21:"This short solo passage from Richard Strauss's Don Quixote provides a catalog of characteristic viola gestures. \n\n" +
"Notice that it is sometimes advisable to change bows more often than Strauss's slurring indicates.",
31:"This short solo passage from Richard Strauss's Don Quixote provides a catalog of characteristic viola gestures. \n\n" +
"Notice that it is sometimes advisable to change bows more often than Strauss's slurring indicates.",
37:"This short solo passage from Richard Strauss's Don Quixote provides a catalog of characteristic viola gestures. \n\n" +
"Notice that it is sometimes advisable to change bows more often than Strauss's slurring indicates.",
45:"This short solo passage from Richard Strauss's Don Quixote provides a catalog of characteristic viola gestures. \n\n" +
"Notice that it is sometimes advisable to change bows more often than Strauss's slurring indicates.",

}

const morePages = [["/scalesTrillsStringColors","Scales, Trills & String Colors"],
["/arpeggiosDoubleStopsVa","Arpeggios & Double Stops"],
["/harmonicsVibratoGlissandoVa","Harmonics, Vibrato & Glissando"],
["/articulationColorsVa","Articulation & Bow Colors"],
["/moreBowColorsVa","More Bow Colors"],
["/colLegnoPizzicatoVa","Col Legno & Pizzicato"],
["/morePizzicatoColorsVa","More Pizzicato Colors"]]

const gridHeights = [80, 70, 70, 70, 70, 70, 70]
const gridWidths = [[40, 420],
                    [40, 420],
                    [40, 420],
                    [40, 420],
                    [40, 420],
                    [40, 420],
                    [40, 420]]
const gridTimes = [[0],
                  [6],
                  [13],
                  [21],
                  [31],
                  [37],
                  [45]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Viola"
        title="Excerpt"
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
