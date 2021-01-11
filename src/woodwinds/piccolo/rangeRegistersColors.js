import React from 'react';
import Instrument from "./../../instrument";
import vid from './rangeRegistersColors.mp4';
import score from './rangeRegistersColors.png';

const instrumentText = {
  0: "Performer: Qiao Zhang. \n\n" +
    "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "The tone color of the piccolo is more consistent in its various registers that the flute. \n\n" +
    "Its lowest range has none of the dark richness one hears in the flute's lowest range.",
  9: "Performer: Qiao Zhang. \n\n" +
    "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "The tone color of the piccolo is more consistent in its various registers that the flute. \n\n" +
    "This middle range of the piccolo is higher than almost all the other sounds of the orchestra, but it can sound free and clear and not forced.",
  15: "Performer: Qiao Zhang. \n\n" +
    "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "The tone color of the piccolo is more consistent in its various registers that the flute. \n\n" +
    "This highest region of the piccolo corresponds to the highest notes of the piano. Because of the extreme height, the piccolo can always be easily heard in this range.",
  21: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "The lowest notes of the piccolo sound rather hollow and pale. Note that D sounding a 9th above middle C is the lowest available pitch.",
  31: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "These extreme high notes correspond to the very highest notes on the piano.  Although they may be played with clarity and some flexibility, their effectiveness is questionable due to the limits of human hearing.",
  35: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "The lowest octave of the piccolo has a woody, hollow sound, resembling the recorder or ethnic flutes, and providing a unique and seldom heard color resource to the wind section.",
  39: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "The lowest octave of the piccolo has a woody, hollow sound, resembling the recorder or ethnic flutes, and providing a unique and seldom heard color resource to the wind section.",
  44: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "The lowest octave of the piccolo has a woody, hollow sound, resembling the recorder or ethnic flutes, and providing a unique and seldom heard color resource to the wind section.",
  48: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "The lowest octave of the piccolo has a woody, hollow sound, resembling the recorder or ethnic flutes, and providing a unique and seldom heard color resource to the wind section.",
  53: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "Although this range looks high in the treble clef, it is actually the lower midrange of the piccolo. Similar to lower midrange the flute (but sounding an octave higher), this range has a natural sweetness and directness.",
  58: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "Although this range looks high in the treble clef, it is actually the lower midrange of the piccolo. Similar to lower midrange the flute (but sounding an octave higher), this range has a natural sweetness and directness.",
  62: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "Although this range looks high in the treble clef, it is actually the lower midrange of the piccolo. Similar to lower midrange the flute (but sounding an octave higher), this range has a natural sweetness and directness.",
  66: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "Although this range looks high in the treble clef, it is actually the lower midrange of the piccolo. Similar to lower midrange the flute (but sounding an octave higher), this range has a natural sweetness and directness.",
  71: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "This is the heart of the piccolo range.",
  76: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "This is the heart of the piccolo range.",
  80: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "This is the heart of the piccolo range.",
  84: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "This is the heart of the piccolo range.",
  89: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "This register corresponds to the top octave of the piano. In this range the piccolo can provide shimmering brilliance as well as ear-splitting power to the orchestra.",
  93: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "This register corresponds to the top octave of the piano. In this range the piccolo can provide shimmering brilliance as well as ear-splitting power to the orchestra.",
  98: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "This register corresponds to the top octave of the piano. In this range the piccolo can provide shimmering brilliance as well as ear-splitting power to the orchestra.",
  102: "Please remember when looking at these scores that the piccolo sounds an octave higher than written. \n\n" +
    "This register corresponds to the top octave of the piano. In this range the piccolo can provide shimmering brilliance as well as ear-splitting power to the orchestra.",
}

const gridHeights = [100, 80, 70, 70, 70, 70]
const gridWidths = [[90, 150, 125, 75],
                    [55, 185, 160],
                    [55, 90, 90, 90, 90],
                    [55, 90, 90, 90, 90],
                    [55, 90, 90, 90, 90],
                    [55, 90, 90, 90, 90]]
const gridTimes = [[0, 9, 15],
                  [21, 31],
                  [35, 39, 44, 48],
                  [53, 58, 62, 66],
                  [71, 76, 80, 84],
                  [89, 93, 98, 102]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piccolo"
        title="Ranges, Registers, & Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
