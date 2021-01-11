import React from 'react';
import Instrument from "./../../instrument";
import vid from './passageCBsn.mp4'
import score from './passageCBsn.png'

const instrumentText = {
  0: "Performer: Matthew Hogan\n\n" +
    "This passage from the last movement of Brahms's  Symphony No. 1 uses the contrabassoon in its traditional function, adding definition to the string contrabasses, who in turn are doubling the cellos an octave lower.",
  7: "Performer: Matthew Hogan\n\n" +
    "This passage from the last movement of Brahms's  Symphony No. 1 uses the contrabassoon in its traditional function, adding definition to the string contrabasses, who in turn are doubling the cellos an octave lower.",
  13: "Performer: Matthew Hogan\n\n" +
    "This passage from the last movement of Brahms's  Symphony No. 1 uses the contrabassoon in its traditional function, adding definition to the string contrabasses, who in turn are doubling the cellos an octave lower.",
  18: "Performer: Matthew Hogan\n\n" +
    "This passage from the last movement of Brahms's  Symphony No. 1 uses the contrabassoon in its traditional function, adding definition to the string contrabasses, who in turn are doubling the cellos an octave lower.",
  24: "Performer: Matthew Hogan\n\n" +
    "This passage from the last movement of Brahms's  Symphony No. 1 uses the contrabassoon in its traditional function, adding definition to the string contrabasses, who in turn are doubling the cellos an octave lower.\n\n" +
    "The low C is an octave higher in the contrabass part; the 2-octave leap appears only in the contrabassoon.",
  31: "Performer: Matthew Hogan\n\n" +
    "This passage from the last movement of Brahms's  Symphony No. 1 uses the contrabassoon in its traditional function, adding definition to the string contrabasses, who in turn are doubling the cellos an octave lower.\n\n" +
    "The low C is an octave higher in the contrabass part; the 2-octave leap appears only in the contrabassoon."
}

const gridHeights = [110, 80, 70, 80, 80, 70]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [7], [13], [18], [24], [31]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contrabassoon"
        title="Excerpt"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


