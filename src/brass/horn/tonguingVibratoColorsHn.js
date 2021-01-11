import React from 'react';
import Instrument from "./../../instrument";
import vid from './tonguingVibratoColorsHn.mp4';
import score from './tonguingVibratoColorsHn.png';

const instrumentText = {
  0: "Performer: Elizabeth Pfaffle \n\n" +
  "Staccato articulation is effective in all but the highest and lowest registers of the horn, although it projects most clearly in the middle-high register. ",
  4: "Performer: Elizabeth Pfaffle \n\n" +
  "Staccato articulation is effective in all but the highest and lowest registers of the horn, although it projects most clearly in the middle-high register. ",
  8: "Performer: Elizabeth Pfaffle \n\n" +
  "Triple-tonguing can be very effective on all brass instruments. \n\n" +
    "  It must be remembered that when triple-tonguing skips (as in this example) the amount of preparation time moving into the new note is considerably shortened, making the attacks less secure. ",
  13: "Performer: Elizabeth Pfaffle \n\n" +
  "Flutter-tonguing is effective in the middle and middle-high range of all brass instruments. ",
  22: "Performer: Elizabeth Pfaffle \n\n" +
  "A slight amount of vibrato is normal on the horn, applied according to the taste and discretion of the performer. \n\n" +
    "  Composers may specify varying amounts of vibrato. ",
  27: "Performer: Elizabeth Pfaffle \n\n" +
  "A slight amount of vibrato is normal on the horn, applied according to the taste and discretion of the performer. \n\n" +
    "  Composers may specify varying amounts of vibrato. ",
  44: "Performer: Elizabeth Pfaffle \n\n" +
  "A small amount of pitch-bend can be created by the embouchure or the right hand in the bell. "
}

const gridHeights = [120, 190, 105, 105]
const gridWidths = [[40, 210, 270], [40, 480], [40, 480], [40, 280, 100, 100]]
const gridTimes = [[0, 4], [8], [13], [22, 27, 44]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Horn"
        title="Tonguing & Vibrato Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}
