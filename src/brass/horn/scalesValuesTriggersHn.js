import React from 'react';
import Instrument from "./../../instrument";
import vid from './scalesValuesTriggersHn.mp4';
import score from './scalesValuesTriggersHn.png';

const instrumentText = {
  0: "Performer: Elizabeth Pfaffle \n\n" +
    "The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. \n\n" +
    "  The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. \n\n" +
    "  The 3rd valve lowers the fundamental an additional minor 3rd. \n\n" +
    "  This allows for a chromatic scale of seven different fundamentals, enough to fill in the perfect-5th gap between the 2nd and 3rd partials. ",
  11: "Performer: Elizabeth Pfaffle \n\n" +
    "The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step.\n\n" +
    "  The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. \n\n" +
    "  The 3rd valve lowers the fundamental an additional minor 3rd. \n\n" +
    "  This allows for a chromatic scale of seven different fundamentals, enough to fill in the perfect 5th gap between the 2nd and 3rd partials. ",
  22: "Performer: Elizabeth Pfaffle \n\n" +
    "Advanced players use the double horn, two complete sets of horn tubing joined at the mouthpiece and the bell.\n\n" +
    "  As an alternative to the \"F side,\" a trigger operated by the left thumb routes the air through the \"B-flat side,\" whose open fundamental is a perfect 4th higher. \n\n" +
    "The shorter tubing of the B - flat side allows the fundamental to be played as a pedal tone. ",
  24: "Performer: Elizabeth Pfaffle \n\n" +
    "Advanced players use the double horn, two complete sets of horn tubing joined at the mouthpiece and the bell.\n\n" +
    "  As an alternative to the \"F side,\" a trigger operated by the left thumb routes the air through the \"B-flat side,\" whose open fundamental is a perfect 4th higher. \n\n" +
    "The shorter tubing of the B - flat side allows high notes to speak more consistently. ",
  27: "Performer: Elizabeth Pfaffle \n\n" +
    "Advanced players use the double horn, two complete sets of horn tubing joined at the mouthpiece and the bell.\n\n" +
    "  As an alternative to the \"F side,\" a trigger operated by the left thumb routes the air through the \"B-flat side,\" whose open fundamental is a perfect 4th higher. \n\n" +
    "The shorter tubing of the B - flat side allows high notes to speak more consistently.\n\n" +
    "Note that the 8th partial on the B - flat side is the same pitch as the 12th partial on the F - side.\n\n" +
    "  Lower partials are more reliable. \n\n",
  32: "Performer: Elizabeth Pfaffle \n\n" +
    "This range of the horn is solid and very flexible. ",
  38: "Performer: Elizabeth Pfaffle \n\n" +
    "As the horn ascends through the written treble staff, the tone becomes brighter and more heroic.\n\n" +
    "  Note that the performer's thumb has engaged the trigger, utilizing the B-flat horn. \n\n" +
    "  Fingering may be observed in relationship to the B-flat harmonic series. ",
  43: "Performer: Elizabeth Pfaffle \n\n" +
    "Notes at the very top of the horn's range may not be as robust as expected; players need to exercise some caution in this range. \n\n",
  48: "Performer: Elizabeth Pfaffle \n\n" +
    "Although the B - flat side of the horn is a smaller, higher horn than the F - side, it makes available low pitches that are not possible without a double horn.\n\n" +
    "  Depending on the performer, 3 to 5 pedal tones are possible. \n\n"
}

const gridHeights = [140, 115, 115, 175]
const gridWidths = [[40, 480], [40, 480], [40, 90, 150, 240], [40, 140, 100, 60, 190]]
const gridTimes = [[0], [11], [22, 24, 27], [32, 38, 43, 48]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Horn"
        title="Scales, Valves & Triggers"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}
