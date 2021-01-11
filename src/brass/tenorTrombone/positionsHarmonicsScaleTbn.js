import React from 'react';
import Instrument from "./../../instrument";
import vid from './positionsHarmonicsScaleTbn.mp4'
import score from './positionsHarmonicsScaleTbn.png'

const instrumentText = {
  0: "Performer: Bryan Heath\n\n" +  
  "The trombone's slide distinguishes it from any other instrument. The slide provides 7 positions, a tritone's worth of fundamentals allowing for complete control over intonation and making glissandos of up to a tritone playable.\n\n" +  
  "Note that the distance between positions increases as more of the slide tubing is used.",
  20: "Performer: Bryan Heath\n\n" + 
  "The first order of pitch selection for all brass instruments is producing a partial from the harmonic series. When the tenor trombone is played with the slide in first position and no triggers invoked, the concert pitch of the fundamental is the B-flat below the bass clef, an octave lower than the B-flat trumpet's fundamental.\n\n" +  
  "Note that the partials are successively closer together, and that the 7th partial is \"out of tune.\"",
  41: "Performer: Bryan Heath\n\n" + 
  "As the slide provides different fundamentals, seven arrays of harmonic series partials are available. These arpeggios range from the 2nd to the 6th partial in the seven slide positions.",
  59: "Performer: Bryan Heath\n\n" + 
  "Predicting the slide position for a note is a simple matter of observing that note's position in the arrays in the line above.\n\n" +  
  "Here the F trigger (which is demonstrated on the following page) is used to play the low F and C in first position. Without the trigger these pitches would have to be played in VI position. When the trigger is used no slide position greater than IV is needed to play this entire scale.",
  66: "Performer: Bryan Heath\n\n" + 
  "Predicting the slide position for a note is a simple matter of observing that note's position in the arrays in the line above.\n\n" +  
  "From this A upward, all the pitches are playable in I, II, or III position, and are playable in at least 2 different positions.",
  71: "Performer: Bryan Heath\n\n" + 
  "Predicting the slide position for a note is a simple matter of observing that note's position in the arrays in the line above.\n\n" +  
  "The highest three notes shown here are played using the 9th and 10th partials, and can be difficult to attack accurately on the tenor trombone. Many late 18th- and early 19th-century 1st trombone parts were composed for alto trombone, a smaller instrument more reliable in this register.",
  78: "Performer: Bryan Heath\n\n" + 
  "Skips require non-adjacent partial selection by the embouchure.\n\n" +  
  "Here the skips are from the 3rd to 6th partial.",
  84: "Performer: Bryan Heath\n\n" + 
  "Skips require non-adjacent partial selection by the embouchure.\n\n" +  
  "Here the skips are from the 6th to 3rd partial. Downward skips are slightly less immediate in their response."
}

const gridHeights = [110, 80, 96, 96, 96]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 150, 140, 190], [40, 220, 260]]
const gridTimes = [[0], [20], [41], [59, 66, 71], [78, 84]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Trombone"
        title="Positions, Harmonics, & Scales"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


