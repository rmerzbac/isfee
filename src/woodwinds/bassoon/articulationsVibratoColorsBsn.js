import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationsVibratoColorsBsn.mp4'
import score from './articulationsVibratoColorsBsn.png'

const instrumentText = {
  0: "Performer: Matthew Hogan\n\n" +
    "The bassoon is very responsive to fast passagework throughout its range.\n\n" +
    "Even when slurred, each note speaks with exceptional clarity.",
  7: "Performer: Matthew Hogan\n\n" +
    "The bassoon is very responsive to fast passagework throughout its range.\n\n" +
    "The slur-two-tongue-two articulation is the most common fast articulation in all wind music.",
  13: "Performer: Matthew Hogan\n\n" +
    "The bassoon is very responsive to fast passagework throughout its range.\n\n" +
    "Single-tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.\n\n" +
    "Double-tonguing is not demonstrated here, but it is becoming a more common articulation for bassoonists; it is an option that may be chosen by the performer for fast passages in the middle and high registers.",
  20: "Performer: Matthew Hogan\n\n" +
    "This kind of staccato articulation is possibly more naturally effective on the bassoon than on any other instrument of the orchestra. It is consistent throughout the range of the instrument.",
  23: "Performer: Matthew Hogan\n\n" +
    "This kind of staccato articulation is possibly more naturally effective on the bassoon than on any other instrument of the orchestra. It is consistent throughout the range of the instrument.",
  27: "Performer: Matthew Hogan\n\n" +
    "Some vibrato is almost always used on the bassoon, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  32: "Performer: Matthew Hogan\n\n" +
    "Some vibrato is almost always used on the bassoon, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  37: "Performer: Matthew Hogan\n\n" +
    "Some vibrato is almost always used on the bassoon, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato, and can expect a significant change of color.",
  43: "Performer: Matthew Hogan\n\n" +
    "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  52: "Performer: Matthew Hogan\n\n" +
    "Downward pitch-bend of no more than a half-step can be accomplished with an adjustment of the embouchure.",
  60: "Performer: Matthew Hogan\n\n" +
    "The bassoon is capable of a variety of multiphonics, although the results can be unpredictable."
}

const morePages = [["/BassoonRRT","Range, Registers, & Tremolo"],
["/BassoonRC","Register Colors"],
["/BassoonP","Excerpts"]]

const gridHeights = [110, 80, 90, 110, 96]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 240, 240], [40, 60, 90, 90, 70, 60, 110]]
const gridTimes = [[0], [7], [13], [20, 23], [27, 32, 37, 43, 52, 60]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bassoon"
        title="Articulations & Vibrato Colors"
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
