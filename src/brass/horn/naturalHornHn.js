import React from 'react';
import Instrument from "./../../instrument";
import vid from './naturalHornHn.mp4';
import score from './naturalHornHn.png';

const instrumentText = {
  0: "The natural horn is the valveless forefather of the modern valved horn. \n\n" +
    "  The fundamental can be changed by employing interchangeable crooks of various lengths. \n\n" +
    "  Once the horn has been thus placed in its \"key,\" the only pitches available are those of its harmonic series, although intonation may be adjusted by the right hand placement. \n\n" +
    "Baroque tuning is approximately a half-step lower than modern concert pitch; the concert pitch the fundamental here is the E an octave below the bass clef. ",
  3: "The F and B are not available as natural partials. \n\n" +
    "  F may be played as a sharp E, by \"stopping\" the horn with the right hand in the bell. \n\n" +
    "  \"A\" may be played as a flat B-flat by removing the hand from the bell. \n\n" +
    "  (this 14th partial is an octave higher than the 7th partial, which is already a bit flat. \n\n",
  10: "The F and B are not available as natural partials. \n\n" +
    "  F may be played as a sharp E, by \"stopping\" the horn with the right hand in the bell. \n\n" +
    "  \"A\" may be played as a flat B-flat by removing the hand from the bell. \n\n" +
    "  (this 14th partial is an octave higher than the 7th partial, which is already a bit flat. \n\n",
  14: "This passage from Handel's \"Water Music\" is in Baroque F major, so the concert pitch is E major, a minor 6th lower than written. \n\n" +
    "  The partials used and tuning adjustments are given above the staff. ",
  18: "This passage from Handel's \"Water Music\" is in Baroque F major, so the concert pitch is E major, a minor 6th lower than written. \n\n" +
    "  The partials used and tuning adjustments are given above the staff. ",
  22: "This passage from Handel's \"Water Music\" is in Baroque F major, so the concert pitch is E major, a minor 6th lower than written. \n\n" +
    "  The partials used and tuning adjustments are given above the staff. ",
  26: "This passage from Handel's \"Water Music\" is in Baroque F major, so the concert pitch is E major, a minor 6th lower than written. \n\n" +
    "  The partials used and tuning adjustments are given above the staff. \n\n"
}

const gridHeights = [140, 100, 80, 80, 90]
const gridWidths = [[40, 145, 255, 100], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0, 3, 10], [14], [18], [22], [26]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Horn"
        title="Natural Horn"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}
