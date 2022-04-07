import React from 'react';
import Instrument from "./../../instrument";
import vid from './passagesTbn.mp4'
import score from './passagesTbn.png'

const instrumentText = {
  0: "Performer: Bryan Heath\n\n" +
  "The \"Tuba Mirum\" from Mozart's Requiem, a lyric obbligato to a bass arioso, is the earliest famous trombone excerpt. It remains one of the best examples of cantabile trombone style. The use of the high singing register is particularly appropriate to the flowing legato line.",
  14: "Performer: Bryan Heath\n\n" +
  "The \"Tuba Mirum\" from Mozart's Requiem, a lyric obbligato to a bass arioso, is the earliest famous trombone excerpt. It remains one of the best examples of cantabile trombone style. The use of the high singing register is particularly appropriate to the flowing legato line.",
  25: "Performer: Bryan Heath\n\n" +
  "The \"Tuba Mirum\" from Mozart's Requiem, a lyric obbligato to a bass arioso, is the earliest famous trombone excerpt. It remains one of the best examples of cantabile trombone style. The use of the high singing register is particularly appropriate to the flowing legato line.",
  37: "Performer: Bryan Heath\n\n" +
  "The \"Tuba Mirum\" from Mozart's Requiem, a lyric obbligato to a bass arioso, is the earliest famous trombone excerpt. It remains one of the best examples of cantabile trombone style. The use of the high singing register is particularly appropriate to the flowing legato line.",
}

const morePages = [["/TenorTrombonePHS","Positions & Harmonic Scale"],
["/TenorTromboneRAC","Registers, Articulations & Colors"],
["/TenorTromboneMAV","More Articulations & Vibrato"],
["/TenorTromboneM","Mutes"],
["/TenorTromboneTG","Triggers & Glissandi"],
["/TenorTromboneP2","Passages II"]]

const gridHeights = [160, 90, 100, 100]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [14], [25], [37]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Trombone"
        title="Passages I"
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
