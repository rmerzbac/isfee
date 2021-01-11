import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 007 handCombinationSpan.mp4';
import score from './Piano 007 handCombinationSpan.png';

const instrumentText = {
  0: "Combining the hands into one single-line texture insures maximum brilliance and clarity; it helps if the individual patterns are not complicated and the hands can stay out of each other's way. One common approach is to assign white-notes to one hand and black notes to the other.",
  7: "Alternating hands on trills and tremolos gives the greatest strength and control.",
  11: "Alternating hands on trills and tremolos gives the greatest strength and control.",
  13: "Alternating hands on trills and tremolos gives the greatest strength and control.",
  26: "A single-voice trill played with alternating hands can match or surpass the power of a trill in octaves.",
  31: "A single-voice trill played with alternating hands can match or surpass the power of a trill in octaves.",
  39: "A single-voice trill played with alternating hands can match or surpass the power of a trill in octaves.",
  46: "A single-voice trill played with alternating hands can match or surpass the power of a trill in octaves.",
  56: "White key 10ths, major or minor, are all the same size. 10ths are at the limit of the average-sized hand, and are beyond the span of many pianists.",
  60: "A close inspection of the keyboard shows that the black keys are not placed directly in the middle of two white-keys (with the exception of the A-flats).\n\n" +
    "The 10th of G-flat to B-flat is the largest 10th on the keyboard because of the spread position of the black keys. Although it is larger than the white-key 10ths, it is easier to play cleanly, because the high level of the black keys makes them stand out. (For the same reason, a leap to a black key is always less treacherous than to a white key.)",
  64: "A close inspection of the keyboard shows that the black keys are not placed directly in the middle of two white-keys (with the exception of the A-flats).\n\n" +
    "The 10th of B-flat to D-flat is the smallest 10th on the keyboard because of the spread position of the black keys.",
  69: "This major 10th of D-flat to F is larger than a white-key 10th, and too large for the average pianist. This span is made even larger because the black key is inside and the white key is outside.",
  76: "This opening chord of Stravinsky's Symphony of Psalms is perfectly designed to fit the hand of a pianist with fairly large hands. Note that the hands mirror each other, and that the fingers are close together with a gap between the fingers and thumb.",
  84: "This chord spans a 9th -- smaller than Stravinsky's, but barely playable because of the spread between the fingers.",
  91: "The thumb is often called upon to play white-key or black-key 2nds (but not a white/black mixture). The first two transpositions of this chord can be played by pianists with relatively small hands, but the third transposition is unplayable, even for pianists with very large hands.",
  96: "The thumb is often called upon to play white-key or black-key 2nds (but not a white/black mixture). The first two transpositions of this chord can be played by pianists with relatively small hands, but the third transposition is unplayable, even for pianists with very large hands.",
  102: "The thumb is often called upon to play white-key or black-key 2nds (but not a white/black mixture). The first two transpositions of this chord can be played by pianists with relatively small hands, but the third transposition is unplayable, even for pianists with very large hands."
}

const gridHeights = [125, 130, 140, 120];
const gridWidths = [[35, 440], [35, 131, 140, 155], [35, 90, 100, 110, 125], [40, 20, 30, 30, 35, 25, 35, 55, 75, 80]];
const gridTimes = [[0], [7, 11, 13], [26, 31, 39, 46], [56, 60, 64, 69, 76, 84, 91, 96, 102]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Hand Combination, Span"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
