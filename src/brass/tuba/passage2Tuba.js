import React from 'react';
import Instrument from "./../../instrument";
import vid from './passage2Tuba.mp4'
import score from './passage2Tuba.png'

const instrumentText = {
  0: "Performer: James Saliers\n\n" +
  "This passage from Wagner's \"The Ride of the Valkyries\" projects the immense power and energy of the lower range of the tuba.",
  6: "Performer: James Saliers\n\n" +
  "This passage from Wagner's \"The Ride of the Valkyries\" projects the immense power and energy of the lower range of the tuba.",
  13: "Performer: James Saliers\n\n" +
  "This passage from Wagner's \"The Ride of the Valkyries\" projects the immense power and energy of the lower range of the tuba.",
  20: "Performer: James Saliers\n\n" +
  "This passage from Wagner's \"The Ride of the Valkyries\" projects the immense power and energy of the lower range of the tuba.",
  27: "Performer: James Saliers\n\n" +
  "This passage from Wagner's \"The Ride of the Valkyries\" projects the immense power and energy of the lower range of the tuba.",
  33: "Performer: James Saliers\n\n" +
  "This passage from Wagner's \"The Ride of the Valkyries\" projects the immense power and energy of the lower range of the tuba.",
}

const morePages = [["/TubaHSST","Harmonic Series, Scales & Trills"],
["/TubaRC","Register Colors"],
["/TubaAC","Articulation Colors"],
["/TubaAVM","Articulations, Vibrato & Mutes"],
["/TubaP","Passages I"]]

const gridHeights = [100, 80, 70, 80, 75, 80]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [6], [13], [20], [27], [33]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tuba"
        title="Passages II"
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
