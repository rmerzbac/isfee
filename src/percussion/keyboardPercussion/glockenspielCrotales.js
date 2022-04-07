import React from 'react';
import Instrument from "./../../instrument";
import vid from './glockenspielCrotales.mp4'
import score from './glockenspielCrotales.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "The glockenspiel sounds 2 octaves higher than written; this can be indicated by the use of a treble clef with a \"15\" over it. This low G is the standard bottom note of the glockenspiel's range.\n\n" +
  "The bars of the glockenspiel are much closer together than one finds on other keyboard percussion, which makes fast complex passages somewhat unidiomatic.",
  18: "Performer: Eric Guinivan\n\n" +
  "The glockenspiel sounds 2 octaves higher than written; this can be indicated by the use of a treble clef with a \"15\" over it. This low G is the standard bottom note of the glockenspiel's range.\n\n" +
  "The bars of the glockenspiel are much closer together than one finds on other keyboard percussion, which makes fast complex passages unidiomatic.",
  36: "Performer: Eric Guinivan\n\n" +
  "The glockenspiel sounds 2 octaves higher than written; this can be indicated by the use of a treble clef with a \"15\" over it.\n\n" +
  "Note how long the tone of the glockenspiel sustains.\n\n" +
  "Hard plastic mallets are generally the softest mallets used on a glockenspiel.",
  54: "Performer: Eric Guinivan\n\n" +
  "The glockenspiel sounds 2 octaves higher than written; this can be indicated by the use of a treble clef with a \"15\" over it.\n\n" +
  "Note how long the tone of the glockenspiel sustains.\n\n" +
  "Brass mallets are the most commonly used mallets on a glockenspiel.",
  69: "Performer: Eric Guinivan\n\n" +
  "The glockenspiel sounds 2 octaves higher than written; this can be indicated by the use of a treble clef with a \"15\" over it. This high C (which is the top pitch of the piano keyboard) is the standard top note of the glockenspiel's range.\n\n" +
  "Note how long the tone of the glockenspiel sustains, even in its highest range.\n\n" +
  "Hard plastic mallets are generally the softest mallets used on a glockenspiel.",
  83: "Performer: Eric Guinivan\n\n" +
  "The glockenspiel sounds 2 octaves higher than written; this can be indicated by the use of a treble clef with a \"15\" over it. This high C (which is the top pitch of the piano keyboard) is the standard top note of the glockenspiel's range.\n\n" +
  "Note how long the tone of the glockenspiel sustains, even in its highest range.\n\n" +
  "Brass mallets are the most commonly used mallets on a glockenspiel.",
  94: "Performer: Eric Guinivan\n\n" +
  "Four-voice chords can be played on a glockenspiel, using 2 mallets in each hand.",
  97: "Performer: Eric Guinivan\n\n" +
  "Four-voice chords can be played on a glockenspiel, using 2 mallets in each hand.",
  99: "Performer: Eric Guinivan\n\n" +
  "Four-voice chords can be played on a glockenspiel, using 2 mallets in each hand.",
  101: "Performer: Eric Guinivan\n\n" +
  "Four-voice chords can be played on a glockenspiel, using 2 mallets in each hand.",
  103: "Performer: Eric Guinivan\n\n" +
  "Four-voice chords can be played on a glockenspiel, using 2 mallets in each hand.",
  110: "Performer: Eric Guinivan\n\n" +
  "Crotales are heavy metal discs that are richer in color and longer-lasting in tone than the metal bars of the glockenspiel. The octave shown here is the higher octave available, but a lower octave is not rare. The pitches are written using the same convention as the glockenspiel, that is, sounding 2 octaves higher than written.",
  152: "Performer: Eric Guinivan\n\n" +
  "Crotales are heavy metal discs that are richer in color and longer-lasting in tone than the metal bars of the glockenspiel. The octave shown here is the higher octave available, but a lower octave is not rare. The pitches are written using the same convention as the glockenspiel, that is, sounding 2 octaves higher than written.",
  190: "Performer: Eric Guinivan\n\n" +
  "Hard rubber mallets are relatively soft for crotales, providing a duller, muted sound quality.",
  227: "Performer: Eric Guinivan\n\n" +
  "A metal rod or triangle beater produces a light but percussive attack.",
  235: "Performer: Eric Guinivan\n\n" +
  "Crotales are very well-suited for bowing with a bass bow."
}

const morePages = [["/KeyboardPercussionMCB","Marimba: Chords & Bass"],
["/KeyboardPercussionMMT","Marimba: Mallet Techniques"],
["/KeyboardPercussionMRLR","Marimba: Range & Low Register"],
["/KeyboardPercussionMRM","Marimba: Register & Mallets"],
["/KeyboardPercussionVRM","Vibraphone: Range Mallets"],
["/KeyboardPercussionVDB","Vibraphone: Damping & Bowing"],
["/KeyboardPercussionXRM","Xylophone: Range & Mallets"],
["/KeyboardPercussionXHRM","Xylophone: High Register & Mallets"],
["/KeyboardPercussionAC","Almglocken & Chimes"]]

const gridHeights = [110, 78, 68, 60, 90, 60, 60]
const gridWidths = [[40, 230, 250], [40, 230, 250], [40, 220, 260], [40, 70, 70, 70, 70, 200], [40, 230, 250], [40, 330, 150], [40, 480]]
const gridTimes = [[0, 18], [36, 54], [69, 83], [94, 97, 99, 101, 103], [110, 152], [190, 227], [235]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Keyboard Percussion"
        title="Glockenspiel & Crotales"
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
