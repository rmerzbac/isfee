import React from 'react';
import Instrument from "./../../instrument";
import vid from './rangeRegistersTremoloBsn.mp4'
import score from './rangeRegistersTremoloBsn.png'

const instrumentText = {
  0: "Performer: Matthew Hogan\n\n" +
  "The bassoon's richest and most characteristic color can be heard in notes written inside the bass clef staff.",
  10: "Performer: Matthew Hogan\n\n" +
  "The bassoon's richest and most characteristic color can be heard in notes written inside the bass clef staff. As the bassoon ascends above the bass clef range the tone becomes very clear but less robust.",
  16: "Performer: Matthew Hogan\n\n" +
  "The bassoon's richest and most characteristic color can be heard in notes written inside the bass clef staff. As the bassoon ascends above the bass clef range the tone becomes very clear but less robust.\n\n" +
  "PLEASE NOTE: These pitches would normally be notated in tenor clef. Bass clef is used here to emphasize range relationships.",
  23: "Performer: Matthew Hogan\n\n" +
  "The timbre of the bassoon extends smoothly down to its lowest note, B-flat. At the bottom of the bassoon's range, it is difficult to play very softly.",
  36: "Performer: Matthew Hogan\n\n" +
  "The extreme high register can sound thin and a bit strained, but this can be an evocative if somewhat unearthly color. The high E is more reliable when approached from a slur.\n\n" +
  "Treble clef is appropriate for passages which lie in this tessitura.",
  46: "Performer: Matthew Hogan\n\n" +
  "Register skips can be executed with great clarity and agility.",
  54: "Performer: Matthew Hogan\n\n" +
  "Register skips can be executed with great clarity and agility. Note how these downward slurs encounter slightly more resistance as the octave breaks downward.",
  62: "Performer: Matthew Hogan\n\n" +
  "This example illustrates one use of \"harmonics\" on the bassoon. Alternate fingerings are available for most pitches. If the fingering is not notated, the performer will find an alternate fingering that will provide a change in color.",
  70: "Performer: Matthew Hogan\n\n" +
  "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  72: "Performer: Matthew Hogan\n\n" +
  "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  75: "Performer: Matthew Hogan\n\n" +
  "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  77: "Performer: Matthew Hogan\n\n" +
  "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  80: "Performer: Matthew Hogan\n\n" +
  "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  83: "Performer: Matthew Hogan\n\n" +
  "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  85: "Performer: Matthew Hogan\n\n" +
  "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  88: "Performer: Matthew Hogan\n\n" +
  "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  91: "Performer: Matthew Hogan\n\n" +
  "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  93: "Performer: Matthew Hogan\n\n" +
  "As these trills become tremolos, and as the tremolos get wider, note how more fingers are involved in motion. Notice also how the sound wave becomes more resistant to change as the interval grows.",
  97: "Performer: Matthew Hogan\n\n" +
  "The bassoon has nine keys that are operated by the left thumb. Several of these are used in the range below the bass clef.",
  100: "Performer: Matthew Hogan\n\n" +
  "The bassoon has nine keys that are operated by the left thumb. Several of these are used in the range below the bass clef.",
  102: "Performer: Matthew Hogan\n\n" +
  "The bassoon has nine keys that are operated by the left thumb. Several of these are used in the range below the bass clef.",
  104: "Performer: Matthew Hogan\n\n" +
  "The bassoon has nine keys that are operated by the left thumb. Several of these are used in the range below the bass clef.",
  106: "Performer: Matthew Hogan\n\n" +
  "The bassoon has nine keys that are operated by the left thumb. Several of these are used in the range below the bass clef. Here both the back and the front of the l.h. thumb are employed.",
  107: "Performer: Matthew Hogan\n\n" +
  "The bassoon has nine keys that are operated by the left thumb. Several of these are used in the range below the bass clef. Here both the back and the front of the l.h. thumb are employed.",
  109: "Performer: Matthew Hogan\n\n" +
  "The bassoon has nine keys that are operated by the left thumb. Several of these are used in the range below the bass clef. Here both the back and the front of the l.h. thumb are employed.",
  111: "Performer: Matthew Hogan\n\n" +
  "The bassoon has nine keys that are operated by the left thumb. Several of these are used in the range below the bass clef. Here both the back and the front of the l.h. thumb are employed.",
}

const morePages = [["/BassoonRC","Register Colors"],
["/BassoonAVC","Articulations & Vibrato Colors"],
["/BassoonP","Excerpts"]]

const gridHeights = [135, 70, 80, 80, 80]
const gridWidths = [[40, 200, 130, 130], [40, 240, 240], [40, 160, 140, 180], [40, 48, 48, 48, 40, 48, 44, 40, 48, 40, 76], [40, 70, 65, 60, 55, 55, 50, 55, 75]]
const gridTimes = [[0, 10, 16], [23, 36], [46, 54, 62], [70, 72, 75, 77, 80, 83, 85, 88, 91, 93], [97, 100, 102, 104, 106, 107, 109, 111]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bassoon"
        title="Range, Registers, & Tremolo"
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
