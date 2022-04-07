import React from 'react';
import Instrument from "./../../instrument";
import vid from './harmonicSeriesHn.mp4';
import score from './harmonicSeriesHn.png';

const instrumentText = {

  0: "Performer: Elizabeth Pfaffle\n\n" +
    "The first order of pitch selection for all brass instruments is producing a partial from the harmonic series. \n\n" +
    "  When the modern horn is played open (no keys or triggers depressed), the concert pitch of the fundamental is the F an octave below the bass clef. \n\n" +
    "  The lowest playable partial is the 2nd partial. \n\n" +
    "Note that the partials are successively closer together, and that the 7th and 11th partials are \"out of tune.\" ",
  11: "Performer: Elizabeth Pfaffle\n\n" +
    "The valves lower the pitch of the fundamental by adding tubing to the air column. \n\n" +
    "  The horn uses rotary valves played by the left hand. \n\n" +
    "The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. ",
  20: "Performer: Elizabeth Pfaffle\n\n" +
    "The valves lower the pitch of the fundamental by adding tubing to the air column. \n\n" +
    "The horn uses rotary valves played by the left hand. \n\n" +
    "The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step.",


}

const morePages = [["/HornAC","Articulation Colors"],
["/HornSVT","Scales, Valves, & Triggers"],
["/HornST","Skips & Trills "],
["/HornTVC","Tonguing, & Vibrato Colors"],
["/HornSM","Stopping & Muting"],
["/HornP","Passages"],
["/HornNH","Natural Horn"],
["/HornBH","Baroque Horn"]]

const gridHeights = [230, 120, 170]
const gridWidths = [[40, 480],
[40, 480],
[40, 480]]
const gridTimes = [[0],
[11],
[20],]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Horn"
        title="Harmonic Series"
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
