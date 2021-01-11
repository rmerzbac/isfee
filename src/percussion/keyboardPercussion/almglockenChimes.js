import React from 'react';
import Instrument from "./../../instrument";
import vid from './almglockenChimes.mp4'
import score from './almglockenChimes.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
    "Almglocken are essentially tuned cowbells. The are generally available in an octave chromatic set in the range displayed here and an octave higher, and can be mounted in traditional configuration of \"white\" and \"black\" keys. They can be effectively played with a variety of mallets.\n\n" +
    "Larger almglocken in the octave from middle C are available but rare.",
  17: "Performer: Eric Guinivan\n\n" +
    "Almglocken are essentially tuned cowbells. The are generally available in an octave chromatic set in the range displayed here and an octave higher, and can be mounted in traditional configuration of \"white\" and \"black\" keys. They can be effectively played with a variety of mallets.\n\n" +
    "Larger almglocken in the octave from middle C are available but rare.",
  28: "Performer: Eric Guinivan\n\n" +
    "Almglocken are essentially tuned cowbells. The are generally available in an octave chromatic set in the range displayed here and an octave higher, and can be mounted in traditional configuration of \"white\" and \"black\" keys. They can be effectively played with a variety of mallets.\n\n" +
    "Larger almglocken in the octave from middle C are available but rare.",
  36: "Performer: Eric Guinivan\n\n" +
    "Almglocken may be bowed with a bass bow, although a consistent sound is difficult to maintain.",
  45: "Performer: Eric Guinivan\n\n" +
    "The range of chimes (also called \"tubular bells\") extends from middle C to the F at the top of the treble staff. Because of the position needed to play them, chime parts need to be temporarily memorized by the player.\n\n" +
    "When depressed, the pedal allows the chimes to ring indefinitely; when released, the pedal will damp all the chimes.\n\n" +
    "The most typical chime mallets are fiberglass and rawhide.",
  54: "Performer: Eric Guinivan\n\n" +
    "The range of chimes (also called \"tubular bells\") extends from middle C to the F at the top of the treble staff. Because of the position needed to play them, chime parts need to be temporarily memorized by the player.\n\n" +
    "When depressed, the pedal allows the chimes to ring indefinitely; when released, the pedal will damp all the chimes.\n\n" +
    "The most typical chime mallets are fiberglass and rawhide.",
  68: "Performer: Eric Guinivan\n\n" +
    "The range of chimes (also called \"tubular bells\") extends from middle C to the F at the top of the treble staff. Because of the position needed to play them, chime parts need to be temporarily memorized by the player.\n\n" +
    "When depressed, the pedal allows the chimes to ring indefinitely; when released, the pedal will damp all the chimes.\n\n" +
    "The most typical chime mallets are fiberglass and rawhide.",
  79: "Performer: Eric Guinivan\n\n" +
    "The range of chimes (also called \"tubular bells\") extends from middle C to the F at the top of the treble staff. Because of the position needed to play them, chime parts need to be temporarily memorized by the player.\n\n" +
    "When depressed, the pedal allows the chimes to ring indefinitely; when released, the pedal will damp all the chimes.\n\n" +
    "The most typical chime mallets are fiberglass and rawhide.",
  96: "Performer: Eric Guinivan\n\n" +
    "The range of chimes (also called \"tubular bells\") extends from middle C to the F at the top of the treble staff. Because of the position needed to play them, chime parts need to be temporarily memorized by the player. \n\n" +
    "When depressed, the pedal allows the chimes to ring indefinitely; when released, the pedal will damp all the chimes.\n\n" +
    "The most typical chime mallets are fiberglass and rawhide.",
  106: "Performer: Eric Guinivan\n\n" +
    "The range of chimes (also called \"tubular bells\") extends from middle C to the F at the top of the treble staff. Because of the position needed to play them, chime parts need to be temporarily memorized by the player.\n\n" +
    "When depressed, the pedal allows the chimes to ring indefinitely; when released, the pedal will damp all the chimes.\n\n" +
    "The most typical chime mallets are fiberglass and rawhide.",
  120: "Performer: Eric Guinivan\n\n" +
    "The range of chimes (also called \"tubular bells\") extends from middle C to the F at the top of the treble staff. Because of the position needed to play them, chime parts need to be temporarily memorized by the player.\n\n" +
    "When depressed, the pedal allows the chimes to ring indefinitely; when released, the pedal will damp all the chimes.\n\n" +
    "The most typical chime mallets are fiberglass and rawhide.",
  131: "Performer: Eric Guinivan\n\n" +
    "The range of chimes (also called \"tubular bells\") extends from middle C to the F at the top of the treble staff. Because of the position needed to play them, chime parts need to be temporarily memorized by the player.\n\n" +
    "When depressed, the pedal allows the chimes to ring indefinitely; when released, the pedal will damp all the chimes.\n\n" +
    "The most typical chime mallets are fiberglass and rawhide.",
  146: "Performer: Eric Guinivan\n\n" +
    "Tremolos can be very effective on chimes.",
  160: "Performer: Eric Guinivan\n\n" +
    "Tremolos can be very effective on chimes.",
  175: "Performer: Eric Guinivan\n\n" +
    "Tremolos can be very effective on chimes. Yarn mallets suppress the noise of the attacks inside the tremolo.",
  189: "Performer: Eric Guinivan\n\n" +
    "Tremolos can be very effective on chimes. Yarn mallets suppress the noise of the attacks inside the tremolo.",
  207: "Performer: Eric Guinivan\n\n" +
    "Raking the \"white\" notes of the chimes can provide a startling burst of colored sound.",
  220: "Performer: Eric Guinivan\n\n" +
    "Chimes may be played without pedal to create a very different quality of sound.",
  226: "Performer: Eric Guinivan\n\n" +
    "Chimes may be played without pedal to create a very different quality of sound."
}

const gridHeights = [95, 60, 60, 90, 68, 80, 70]
const gridWidths = [[40, 480], [40, 480], [40, 290, 190], [40, 110, 120, 110, 140], [40, 110, 120, 110, 140], [40, 70, 90, 70, 130, 120], [40, 140, 340]]
const gridTimes = [[0], [17], [28, 36], [45, 54, 68, 79], [96, 106, 120, 131], [146, 160, 175, 189, 207], [220, 226]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Keyboard Percussion"
        title="Almglocken & Chimes"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


