import React from 'react';
import Instrument from "./../../instrument";
import vid from './triggersGlissandosTbn.mp4'
import score from './triggersGlissandosTbn.png'

const instrumentText = {
  0: "Performer: Bryan Heath\n\n" +
    "Pedal tones (fundamentals in the harmonic series) are very effective in the first three positions. Pedal tones lower than G can be problematic on a tenor trombone.",
  16: "Performer: Bryan Heath\n\n" +
    "Almost all orchestral trombones now have at least one \"attachment,\" extra tubing brought into play by a \"trigger\" operated by the left thumb. The common F attachment (or \"F trigger\") increases the tubing's total length by a third, so that the instrument's fundamental in first position is lowered to the F an octave below the bass clef. The pitches played here are 2nd partials (not pedal tones).",
  30: "Performer: Bryan Heath\n\n" +
    "Since the trigger adds 33% to the length of the tubing, the slide has to move 33% farther to create a half-step, so only 6 slide positions are possible with the trigger engaged, covering a perfect 4th instead of a tritone. The F trigger fills in the gap between E (the non-trigger VII position 2nd partial) and pedal B-flat, EXCEPT for the B-natural.\n\n" +
    "The six trigger positions are numbered I through VII, with V omitted; this numbering allows the numbers for the positions to be close to where they would be without the trigger.",
  35: "Performer: Bryan Heath\n\n" +
    "The trigger effectively doubles the number of harmonic series from which any pitch can be selected, making otherwise awkward passages easier and making allowing for trigger-trills. Triggers are most often used in the lowest register, where partials are further apart.",
  41: "Performer: Bryan Heath\n\n" +
    "The trigger effectively doubles the number of harmonic series from which any pitch can be selected, making otherwise awkward passages easier and making allowing for trigger-trills. Triggers are most often used in the lowest register, where partials are further apart.",
  47: "Performer: Bryan Heath\n\n" +
    "The F trigger is operated by the left-hand thumb. Here the same pitch is played as the 6th partial of the open B-flat trombone and as the 8th partial of the F fundamental created by the trigger. Note that the embouchure is set for the region of the pitch and does not need to adjust to the changing partial. The inertia of sound wave automatically \"finds\" that pitch. Articulation is created not by the tongue, but by a bump in the sound wave as it adjusts to the new partial/fundamental relationship.",
  56: "Performer: Bryan Heath\n\n" +
    "These are the only tritone slide-glissandos available without using the trigger in the range employing the 2nd through 6th partials.  Of course, smaller interval slide-glissandos within the limits of these are possible.",
  71: "Performer: Bryan Heath\n\n" +
    "Glissandos work equally well in either direction.",
  77: "Performer: Bryan Heath\n\n" +
    "The trigger makes more slide-glissandos possible; note that the largest glissando interval possible while using the trigger is a perfect 4th. The third and fourth glissandos in this set are also available without the trigger (see previous line)."
}

const gridHeights = [100, 70, 80, 75, 75, 90]
const gridWidths = [[40, 480], [40, 270, 210], [40, 230, 250], [40, 480], [40, 350, 130], [40, 480]]
const gridTimes = [[0], [16, 30], [35, 41], [47], [56, 71], [77]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Trombone"
        title="Triggers & Glissandi"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


