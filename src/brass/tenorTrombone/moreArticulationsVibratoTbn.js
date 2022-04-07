import React from 'react';
import Instrument from "./../../instrument";
import vid from './moreArticulationsVibratoTbn.mp4'
import score from './moreArticulationsVibratoTbn.png'

const instrumentText = {
  0: "Performer: Bryan Heath\n\n" +
  "Staccato articulation is effective in all registers of the trombone.",
  3: "Performer: Bryan Heath\n\n" +
  "Staccato articulation is effective in all registers of the trombone.",
  7: "Performer: Bryan Heath\n\n" +
  "Triple-tonguing can be very effective on all brass instruments. It must be remembered that when triple-tonguing skips (as in this example) the amount of preparation time moving into the new note is considerably shortened, making the attacks less secure.",
  11: "Performer: Bryan Heath\n\n" +
  "Flutter-tonguing is effective throughout the range of the trombone.",
  17: "Performer: Bryan Heath\n\n" +
  "A slight amount of vibrato is normal on the trumpet, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato.",
  24: "Performer: Bryan Heath\n\n" +
  "A slight amount of vibrato is normal on the trumpet, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato.",
  32: "Performer: Bryan Heath\n\n" +
  "A slight amount of vibrato is normal on the trumpet, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato. The slide makes possible a degree of vibrato not available on other wind instruments."
}

const morePages = [["/TenorTrombonePHS","Positions & Harmonic Scale"],
["/TenorTromboneRAC","Registers, Articulations & Colors"],
["/TenorTromboneM","Mutes"],
["/TenorTromboneTG","Triggers & Glissandi"],
["/TenorTromboneP","Passages I"],
["/TenorTromboneP2","Passages II"]]

const gridHeights = [130, 120, 110, 100]
const gridWidths = [[40, 240, 240], [40, 480], [40, 480], [40, 110, 140, 230]]
const gridTimes = [[0, 3], [7], [11], [17, 24, 32]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Trombone"
        title="More Articulations & Vibrato"
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
