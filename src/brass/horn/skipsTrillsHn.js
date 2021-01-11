import React from 'react';
import Instrument from "./../../instrument";
import vid from './skipsTrillsHn.mp4';
import score from './skipsTrillsHn.png';

const instrumentText = {
  0: "Performer: Elizabeth Pfaffle \n\n" +
    "Composers may ask the performer to use open horn to evoke the tuning of the natural horn. \n\n" +
    "In this first version, the performer uses the trigger and first valve to provide a standard intonation concert E-flat. \n\n",
  5: "Performer: Elizabeth Pfaffle \n\n" +
    "Composers may ask the performer to use open horn to evoke the tuning of the natural horn. \n\n" +
    "In this second version, the performer uses the open F horn, using the slightly flat 7th partial E-flat. ",
  11: "Performer: Elizabeth Pfaffle \n\n" +
    "The horn is capable of responding to leaps with surprising agility. \n\n" +
    "  Intervals which are easier to hear are also easier to play. ",
  14: "Performer: Elizabeth Pfaffle \n\n" +
    "The horn is capable of responding to leaps with surprising agility. \n\n" +
    "  Intervals which are easier to hear are also easier to play. ",
  18: "Performer: Elizabeth Pfaffle \n\n" +
    "As the pitches get higher, the partials are closer together and more fingerings are possible for any given pitch. \n\n" +
    "  The change in color is slight, but it is interesting to hear the intonation variety and articulation created by the change of fundamentals (although in this performance these are slightly tongued). \n\n" +
    "  Here concert D is played as the 12th partial of G, the 10th partial of B-flat, and the 16th partial of D. ",
  24: "Performer: Elizabeth Pfaffle \n\n" +
    "Half-step trills are effectively performed using the 2nd valve. ",
  28: "Performer: Elizabeth Pfaffle \n\n" +
    "Whole-step trills may be performed as lip trills in the higher range where adjacent whole-step partials can be found. \n\n",
  34: "Performer: Elizabeth Pfaffle \n\n" +
    "Tremolos generally require that the embouchure alternate partials. ",
  37: "Performer: Elizabeth Pfaffle \n\n" +
    "Tremolos generally require that the embouchure alternate partials. ",
  40: "Performer: Elizabeth Pfaffle \n\n" +
    "Tremolos generally require that the embouchure alternate partials. \n\n" +
    "  This may also need to be coordinated with valve trill. \n\n"
}

const gridHeights = [160, 180, 170]
const gridWidths = [[40, 210, 270], [40, 160, 160, 160], [40, 100, 100, 90, 100, 132]]
const gridTimes = [[0, 5], [11, 14, 18], [24, 28, 34, 37, 40],]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Horn"
        title="Skips & Trills"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}
