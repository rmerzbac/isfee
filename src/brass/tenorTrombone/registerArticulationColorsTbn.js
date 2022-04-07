import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerArticulationColorsTbn.mp4'
import score from './registerArticulationColorsTbn.png'

const instrumentText = {
  0: "Performer: Bryan Heath\n\n" +
  "The trombone is full, dark and rich in its lowest register.",
  4: "Performer: Bryan Heath\n\n" +
  "The trombone is full, dark and rich in its lowest register.",
  8: "Performer: Bryan Heath\n\n" +
  "The trombone is full, dark and rich in its lowest register.",
  11: "Performer: Bryan Heath\n\n" +
  "The trombone is full, dark and rich in its lowest register.",
  15: "Performer: Bryan Heath\n\n" +
  "The trombone's middle range is singing and clear, and very responsive to dynamic and articulation variation.",
  18: "Performer: Bryan Heath\n\n" +
  "The trombone's middle range is singing and clear, and very responsive to dynamic and articulation variation.",
  21: "Performer: Bryan Heath\n\n" +
  "The trombone's middle range is singing and clear, and very responsive to dynamic and articulation variation.",
  24: "Performer: Bryan Heath\n\n" +
  "The trombone's middle range is singing and clear, and very responsive to dynamic and articulation variation.",
  28: "Performer: Bryan Heath\n\n" +
  "This middle high register is arguably the most powerful and characteristically colorful register of the tenor trombone.",
  32: "Performer: Bryan Heath\n\n" +
  "This middle high register is arguably the most powerful and characteristically colorful register of the tenor trombone.",
  35: "Performer: Bryan Heath\n\n" +
  "This middle high register is arguably the most powerful and characteristically colorful register of the tenor trombone.",
  38: "Performer: Bryan Heath\n\n" +
  "This middle high register is arguably the most powerful and characteristically colorful register of the tenor trombone.",
  42: "Performer: Bryan Heath\n\n" +
  "The high register can be brilliant and thrilling, and also sweet and nuanced. This phrase could be notated in any of the three clefs shown here, but tenor clef is most commonly used for this range.",
  45: "Performer: Bryan Heath\n\n" +
  "The high register can be brilliant and thrilling, and also sweet and nuanced. This phrase could be notated in any of the three clefs shown here, but tenor clef is most commonly used for this range.",
  49: "Performer: Bryan Heath\n\n" +
  "The high register can be brilliant and thrilling, and also sweet and nuanced. This phrase could be notated in any of the three clefs shown here, but tenor clef is most commonly used for this range.",
  52: "Performer: Bryan Heath\n\n" +
  "The high register can be brilliant and thrilling, and also sweet and nuanced. This phrase could be notated in any of the three clefs shown here, but tenor clef is most commonly used for this range.",
  56: "Performer: Bryan Heath\n\n" +
  "Legato articulation is fundamentally different on the trombone from any other brass instrument since some degree of tonguing must be used to hide the movement of the slide between pitches (unless adjacent notes can be played as different partials in the same slide position). Amazing coordination is displayed in providing the illusion of a legato articulation as its heard on valve instruments.",
  62: "Performer: Bryan Heath\n\n" +
  "The slur-two-tongue-two articulation so common and intuitively natural on other wind instruments must be imitated on the trombone with varying degrees of articulation, since many of the \"slurred\" the notes must be tongued because of slide movement.",
  68: "Performer: Bryan Heath\n\n" +
  "Single tonguing is generally slower than the other articulation options demonstrated here, but is also the most deliberate and forceful.",
  74: "Performer: Bryan Heath\n\n" +
  "Double-tonguing is very effective for fast passages on brass instruments, although the slide of the trombone does not naturally move as quickly as valves would allow.",
  76: "Performer: Bryan Heath\n\n" +
  "Double-tonguing is very effective for fast passages on brass instruments, although the slide of the trombone does not naturally move as quickly as valves would allow."
}

const morePages = [["/TenorTrombonePHS","Positions & Harmonic Scale"],
["/TenorTromboneMAV","More Articulations & Vibrato"],
["/TenorTromboneM","Mutes"],
["/TenorTromboneTG","Triggers & Glissandi"],
["/TenorTromboneP","Passages I"],
["/TenorTromboneP2","Passages II"]]

const gridHeights = [90, 55, 55, 60, 65, 50, 60, 60]
const gridWidths = [[40, 110, 110, 110, 140], [40, 110, 110, 110, 140], [40, 110, 110, 110, 140], [40, 110, 110, 110, 140], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0, 4, 8, 11], [15, 18, 21, 24], [28, 32, 35, 38], [42, 45, 49, 52], [56], [62], [68], [74]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Trombone"
        title="Registers, Articulations & Colors"
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
