import React from 'react';
import Instrument from "./../../instrument";
import vid from './Harp 006 harmonicsEffects.mp4';
import score from './Harp 006 harmonicsEffects.png';

const instrumentText = {
  0: "When possible, harp trills are played by alternating two-note groups between hands.",
  11: "Harp harmonics sound an octave above where they are written and played. They are 2nd-partial harmonics create by touching the string at its midpoint node with part of the hand while plucking above it.\n\n" +
    "Right hand harmonics are produced by plucking with the thumb while stopping the string with the index finger. The right hand can only play single note harmonics.",
  20: "Harp harmonics sound an octave above where they are written and played. They are 2nd-partial harmonics create by touching the string at its midpoint node with part of the hand while plucking above it.\n\n" +
    "Left hand harmonics are produced by plucking with the thumb or finger while stopping the string with the heel of the hand.",
  29: "Harp harmonics sound an octave above where they are written and played. They are 2nd-partial harmonics create by touching the string at its midpoint node with part of the hand while plucking above it.\n\n" +
    "Left hand harmonics are produced by plucking with the thumb or finger while stopping the string with the heel of the hand. This technique allows for double-note harmonics with the left hand (not possible with the right hand).",
  36: "In the following passage, a low D-sharp is needed. There are no pedal tuning discs for the lowest D, so that string is disassociated from pedal tuning. The harpist tunes this string (with a tuning key) prior to the performance.",
  47: "This fragment asked the harpist to play the lowest strings with a backhanded fingernail glissando, followed a \"pedal glissando,\" changing the tuning of a pitch class while the strings are ringing.",
  54: "A \"thunder effect\" is heard when 2 large low strings are played in such a way that they vibrate against each other.",
  61: "A \"pedal buzz\" occurs when the pedal is held between notches, causing the string to vibrate noisily against the tuning discs. This is only effective on the lower strings. Here the E pedal is held in a position between E-flat and E-natural, then glisses to E-natural, resolving the buzz into a pure pitch. This is mechanically coordinated through all 3 octaves of E strings played.",
  67: "Here a slow alternation accelerates into a cluster tremolo.",
  78: "This passage (written by Henriette Renie, a harpist) asks the harpist to change 2 pedals  (F-sharp to F-natural and G-natural to G-sharp) on the same side of the instrument simultaneously, requiring the use of both feet on the right side, a very awkward position. While it can be done, it is decidedly not recommended.",
}


const gridHeights = [80, 120, 30, 150, 150];
const gridWidths = [[35, 440], [35, 150, 170, 110], [0, 220], [35, 120, 35, 60, 205], [35, 440]];
const gridTimes = [[0], [11, 20, 29], [36], [47, 54, 61, 67], [78]];


export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Harp"
        title="Harmonics & Effects"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
