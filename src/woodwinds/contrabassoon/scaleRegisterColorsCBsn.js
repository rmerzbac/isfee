import React from 'react';
import Instrument from "./../../instrument";
import vid from './scaleRegisterColorsCBsn.mp4'
import score from './scaleRegisterColorsCBsn.png'

const instrumentText = {
  0: "Performer: Matthew Hogan\n\n" +
    "The contrabassoon's richest and most characteristic color can be heard in notes written below and inside the bass clef staff.",
  8: "Performer: Matthew Hogan\n\n" +
    "The contrabassoon's richest and most characteristic color can be heard in notes written below and inside the bass clef staff. Notes above the staff have are somewhat pale compared to bassoon pitches in the same concert range.",
  16: "Performer: Matthew Hogan\n\n" +
    "The timbre of the contrabassoon extends smoothly down to its lowest note, B-flat. Note that this note corresponds to the second-to-lowest note on the piano.",
  26: "Performer: Matthew Hogan\n\n" +
    "The contrabassoon is twice as long as the bassoon, resulting in a noticeably slower response as the sound wave passes through the twists and turns of its bore.",
  30: "Performer: Matthew Hogan\n\n" +
    "The contrabassoon is twice as long as the bassoon, resulting in a noticeably slower response as the sound wave passes through the twists and turns of its bore.",
  33: "Performer: Matthew Hogan\n\n" +
    "The contrabassoon is twice as long as the bassoon, resulting in a noticeably slower response as the sound wave passes through the twists and turns of its bore.",
  37: "Performer: Matthew Hogan\n\n" +
    "The contrabassoon is twice as long as the bassoon, resulting in a noticeably slower response as the sound wave passes through the twists and turns of its bore.",
  43: "Performer: Matthew Hogan\n\n" +
    "Considering the length of the sound-waves being set into motion, the middle-low register of the contrabass is remarkably responsive.",
  47: "Performer: Matthew Hogan\n\n" +
    "Considering the length of the sound-waves being set into motion, the middle-low register of the contrabass is remarkably responsive.",
  50: "Performer: Matthew Hogan\n\n" +
    "Considering the length of the sound-waves being set into motion, the middle-low register of the contrabass is remarkably responsive.",
  54: "Performer: Matthew Hogan\n\n" +
    "Considering the length of the sound-waves being set into motion, the middle-low register of the contrabass is remarkably responsive.",
  59: "Performer: Matthew Hogan\n\n" +
    "The high register of the contrabass can add strength when doubling a bass line, or provide a very distinctive somewhat grotesque solo sound.",
  63: "Performer: Matthew Hogan\n\n" +
    "The high register of the contrabass can add strength when doubling a bass line, or provide a very distinctive somewhat grotesque solo sound.",
  67: "Performer: Matthew Hogan\n\n" +
    "The high register of the contrabass can add strength when doubling a bass line, or provide a very distinctive somewhat grotesque solo sound.",
  70: "Performer: Matthew Hogan\n\n" +
    "The high register of the contrabass can add strength when doubling a bass line, or provide a very distinctive somewhat grotesque solo sound."
}

const morePages = [["/ContrabassoonAC","Articulation Colors"],
["/ContrabassoonP","Excerpts"]]

const gridHeights = [120, 96, 80, 65, 80]
const gridWidths = [[40, 240, 240], [40, 480], [40, 110, 110, 110, 150], [40, 110, 110, 110, 150], [40, 110, 110, 110, 150]]
const gridTimes = [[0, 8], [16], [26, 30, 33, 37], [43, 47, 50, 54], [59, 63, 67, 70]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contrabassoon"
        title="Scales & Register Colors"
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
