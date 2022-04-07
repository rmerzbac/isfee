import React from 'react';
import Instrument from "./../../instrument";
import vid from './scalesTriggersBTbn.mp4'
import score from './scalesTriggersBTbn.png'

const instrumentText = {
  0: "Performer: Bryan Heath\n\n" +
    "The bass trombone has a wider bore, more flare to the bell, and a larger mouthpiece than the tenor trombone. All of this gives a commanding authority to the lower half of the range and favors the playing of lower pedal tones.",
  7: "Performer: Bryan Heath\n\n" +
    "The bass trombone has a wider bore, more flare to the bell, and a larger mouthpiece than the tenor trombone. All of this gives a commanding authority to the lower half of the range and favors the playing of lower pedal tones.\n\n" +
    "In the higher middle register the bass trombone is darker and heavier than the tenor trombone.",
  12: "Performer: Bryan Heath\n\n" +
    "The bass trombone has a wider bore, more flare to the bell, and a larger mouthpiece than the tenor trombone. All of this gives a commanding authority to the lower half of the range and favors the playing of lower pedal tones.\n\n" +
    "Although the bass trombone can cover the octave above middle C, it is not the range in which to show the strengths of the instrument.",
  20: "Performer: Bryan Heath\n\n" +
    "Even without use of extra tubing provided by the attachments. the bass trombone range exceeds the tenor because of its ability to play a full range of pedal tones, including VI and VII positions.",
  39: "Performer: Bryan Heath\n\n" +
    "There are several possibilities for the triggers one might have on a bass trombone. The configuration here is guite common: two attachments, one which adds tubing to create an F fundamental (the F trigger commonly found on tenor trombones), and a second which creates a G-flat fundamental.\n\n" +
    "The B-flat played here is the second partial, sounding an octave above the open B-flat fundamental of the instrument.",
  41: "Performer: Bryan Heath\n\n" +
    "There are several possibilities for the triggers one might have on a bass trombone. The configuration here is guite common: two attachments, one which adds tubing to create an F fundamental (the F trigger commonly found on tenor trombones), and a second which creates a G-flat fundamental.\n\n" +
    "Here the F attachment (played by the left-hand thumb) provides an F fundamental. The F played here is the 2nd partial, an octave above that fundamental. (For more on the F trigger, see Tenor Trombone, page 2.)",
  42: "Performer: Bryan Heath\n\n" +
    "There are several possibilities for the triggers one might have on a bass trombone. The configuration here is guite common: two attachments, one which adds tubing to create an F fundamental (the F trigger commonly found on tenor trombones), and a second which creates a G-flat fundamental.\n\n" +
    "Here the G-flat attachment (played by the left-hand index finger) provides a G-flat fundamental. The G-flat played here is the 2nd partial, an octave above that fundamental.",
  43: "Performer: Bryan Heath\n\n" +
    "Here the F attachment is added to the G-flat attachment to provide a D fundamental.\n\n" +
    "You might have expected the F attachment to add a perfect to the G-flat attachment, producing a D-flat. However, the length of tubing which adds a perfect 4th to the B-flat length (33% of the B-flat length), adds only a major 3rd to the G-flat length (25% of the G-flat length). The same principle explains why there are only 6 half-steps possible with the F trigger, and only 5 half-steps when T1&2 are combined.",
  45: "Performer: Bryan Heath\n\n" +
    "All triggers are released to produce this fundamental B-flat pedal tone of the open B-flat instrument.",
  48: "Performer: Bryan Heath\n\n" +
    "Six pedal tones are possible when using the F trigger by itself. Since the trigger adds 33% to the length of the tubing, the slide has to move 33% farther to create a half-step, so only 6 slide positions are possible with the trigger engaged, covering a perfect 4th instead of a tritone. The six F-trigger positions are numbered I through VII, with V omitted; this numbering allows the numbers for the positions to be close to where they would be without the trigger.",
  64: "Performer: Bryan Heath\n\n" +
    "Five pedal tones are possible when using the F trigger and G-flat trigger in combination. Since the combined triggers add 60% to the length of the tubing, the slide has to move 60% farther to create a half-step, so only 5 slide positions are possible with the combined triggers engaged, covering a major 3rd instead of a tritone. The five combined-trigger positions are numbered I through VII, with III and V omitted; this numbering allows the numbers for the positions to be close to where they would be without the trigger.",
  79: "Performer: Bryan Heath\n\n" +
    "The bass trombone can handle skips in the low register with relative agility.",
  85: "Performer: Bryan Heath\n\n" +
    "The bass trombone can handle skips in the low register with relative agility."
}

const morePages = [["/BassTromboneRC","Register Colors"],
["/BassTromboneP","Passages"]]

const gridHeights = [120, 120, 120, 120]
const gridWidths = [[40, 180, 100, 200], [40, 330, 30, 20, 20, 30, 50], [40, 240, 240], [40, 240, 240]]
const gridTimes = [[0, 7, 12], [20, 39, 41, 42, 43, 45], [48, 64], [79, 85]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bass Trombone"
        title="Scales & Triggers"
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
