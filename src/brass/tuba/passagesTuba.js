import React from 'react';
import Instrument from "./../../instrument";
import vid from './passagesTuba.mp4'
import score from './passagesTuba.png'

const instrumentText = {
  0: "Performer: James Saliers\n\n" +
  "This passage from Wagner's Prelude to \"Die Meistersinger\" exhibits the singing high range of the tuba, including music literature's most recognized tuba trill.\n\n" +
  "Note the color change created by articulation from non-legato to molto legato. Notice also that breaths need to be taken in spite of the composer's seeming indifference to that need.",
  7: "Performer: James Saliers\n\n" +
  "This passage from Wagner's Prelude to \"Die Meistersinger\" exhibits the singing high range of the tuba, including music literature's most recognized tuba trill.\n\n" +
  "Note the color change created by articulation from non-legato to molto legato. Notice also that breaths need to be taken in spite of the composer's seeming indifference to that need.",
  18: "Performer: James Saliers\n\n" +
  "This passage from Wagner's Prelude to \"Die Meistersinger\" exhibits the singing high range of the tuba, including music literature's most recognized tuba trill.\n\n" +
  "Note the color change created by articulation from non-legato to molto legato. Notice also that breaths need to be taken in spite of the composer's seeming indifference to that need.",
  25: "Performer: James Saliers\n\n" +
  "This passage from Wagner's Prelude to \"Die Meistersinger\" exhibits the singing high range of the tuba, including music literature's most recognized tuba trill.\n\n" +
  "Note the color change created by articulation from non-legato to molto legato. Notice also that breaths need to be taken in spite of the composer's seeming indifference to that need.",
  32: "Performer: James Saliers\n\n" +
  "This passage from Wagner's Prelude to \"Die Meistersinger\" exhibits the singing high range of the tuba, including music literature's most recognized tuba trill.\n\n" +
  "Note the color change created by articulation from non-legato to molto legato. Notice also that breaths need to be taken in spite of the composer's seeming indifference to that need.",
  40: "Performer: James Saliers\n\n" +
  "This passage from Wagner's Prelude to \"Die Meistersinger\" exhibits the singing high range of the tuba, including music literature's most recognized tuba trill.\n\n" +
  "Note the color change created by articulation from non-legato to molto legato. Notice also that breaths need to be taken in spite of the composer's seeming indifference to that need.",
  47: "Performer: James Saliers\n\n" +
  "This passage from Wagner's Prelude to \"Die Meistersinger\" exhibits the singing high range of the tuba, including music literature's most recognized tuba trill.\n\n" +
  "Note the color change created by articulation from non-legato to molto legato. Notice also that breaths need to be taken in spite of the composer's seeming indifference to that need.",
}

const gridHeights = [100, 68, 70, 70, 70, 60, 70]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [7], [18], [25], [32], [40], [47]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tuba"
        title="Passages I"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


