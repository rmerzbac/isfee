import React from 'react';
import Instrument from "./../../instrument";
import vid from './scaleFingering.mp4';
import score from './scaleFingering.png';

const instrumentText = {
  0: "Performer: Makito Nishiya. \n\n" +
    "Open strings: The lowest open string is closest to the bow arm on the cello and contrabass. \n\n" +
    "(The highest string is closest to the bow arm on the violin and viola.) \n\n" +
    "Listen how the open strings will ring slightly after the bow is released.",
  22: "On the cello in the low positions, the fingers are normally placed a half-step apart. \n\n" +
    "Note that in strings, the index finger is number 1. (The thumb is 0.)",
  33: "To cover a major 3rd between the stopped notes in one position requires an extended position between two of the fingers. Here the gap between 1 and 2 is extended to a major second.",
  42:"To play E-flat in this context, the 1st finger must extend back a whole-step from the 2nd finger's F.",
  54:"In thumb position the thumb rests on the fingerboard. Here the thumb is placed an octave above the open A string (halfway up the string); the intervals are twice as close together as in first position. In this range whole steps can be played between adjacent fingers without extension.",
	66: "In this range, half-steps require that the fingers be placed closely together.",
	83: "The whole-step is between the 1st and 3rd fingers.",
	94: "The whole-step is between the 1st and 3rd fingers. ",
	104: "The whole-step is between the 2nd and 4th fingers.",
	113: "The whole-step is between the 2nd and 4th fingers.",
	122: "To continue playing on one string, the player must shift into higher positions.",
	129: "Shifting into thumb position, the player now uses adjacent fingers for both whole-steps and half-steps. ",
	135: "Shifting into thumb position, the player now uses adjacent fingers for both whole-steps and half-steps. ",
	142: "Pitches in this region are very close together. While they are not difficult to play, they are difficult to find, particularly if approached by a large shift. Notes above the treble staff are rarely written for an orchestral section of cellos.",

}

const gridHeights = [110, 90, 80, 110, 110]
const gridWidths = [[40, 400],
                    [40, 150, 130, 160],
                    [40, 160, 230],
                    [40, 100, 90, 90, 110],
                    [55, 90, 70, 90, 110]]
const gridTimes = [[0],
                  [22, 33, 42],
                  [54, 66],
                  [83, 94, 104, 113],
                  [122, 129, 135, 142]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Cello"
        title="Scale Fingering"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
