import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerStringColorsB.mp4';
import score from './registerStringColorsB.png';

const instrumentText = {
  0: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		5: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		9: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		13: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		18: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		22: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		26: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		29: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		33: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		38: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		42: "Please note: All pitches sound an octave lower than written.\n\n" +
"A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments. On the contrabass, playing this phrase using only one string requires a shift; playing it on adjacent strings is less dramatic and more poised.",
		47: "Please note: All pitches sound an octave lower than written.\n\n" +
"This passage demonstrates the stopped fundamentals (played by the thumb) for the series of artificial harmonics shown in the next frame.",
		55: "Please note: All pitches sound an octave lower than written.\n\n" +
"These are artificial 3rd-partial \"touch 5\" harmonics; the sounding pitch is an octave and a 5th above the stopped note. On the contrabass, these are more common and reliable than the \"touch 4\" 4th-partial harmonics favored on other members of the string family.\n\n" +
"For an extended demonstration of artificial harmonics, natural harmonics and string length please see the section on the cello.",
  }

const gridHeights = [120, 100, 100, 100, 100]
const gridWidths = [[40, 170, 220],
                    [40, 140, 140, 140],
                    [40, 140, 140, 140],
                    [40, 140, 140, 140],
                    [40, 160, 240]]
const gridTimes = [[0, 5],
                  [9, 13, 18],
                  [22, 26, 29],
                  [33, 38, 42],
                  [47, 55]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contrabass"
        title="Register & String Colors "
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
