import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationColorsCBsn.mov'
import score from './articulationColorsCBsn.png'

const instrumentText = {
  0: "Performer: Matthew Hogan\n\n" +
  "Note that the contrabassoon sounds an octave lower than notated. All these pitches (excepting the high A) sound concert pitches below the bass clef. The contrabassoon projects these low pitches with exceptional agility and clarity.",
  6: "Performer: Matthew Hogan\n\n" +
  "Note that the contrabassoon sounds an octave lower than notated. All these pitches (excepting the high A) sound concert pitches below the bass clef. The contrabassoon projects these low pitches with exceptional agility and clarity.",
  11: "Performer: Matthew Hogan\n\n" +
  "Note that the contrabassoon sounds an octave lower than notated. All these pitches (excepting the high A) sound concert pitches below the bass clef. The contrabassoon projects these low pitches with exceptional agility and clarity.",
  17: "Performer: Matthew Hogan\n\n" +
  "This kind of staccato articulation is naturally effective on the contrabassoon. It is consistent throughout the range of the instrument.",
  20: "Performer: Matthew Hogan\n\n" +
  "This kind of staccato articulation is naturally effective on the contrabassoon. It is consistent throughout the range of the instrument."
}

const gridHeights = [120, 100, 100, 100]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 230, 250]]
const gridTimes = [[0], [6], [11], [17, 20]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contrabassoon"
        title="Articulation Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


