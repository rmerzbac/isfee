import React from 'react';
import Instrument from "./../../instrument";
import vid from './arpeggiosDoubleStops.mp4';
import score from './arpeggiosDoubleStops.png';

const instrumentText = {
  0:  "Arpeggios are accomplished through a combination of string crossings and/or shifts.",
  7:  "Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
    "Parallel perfect fifths can be played in the lower positions by stopping two strings with one finger.",
  12:  "Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
    "As one plays in higher positions, the adjacent strings get farther and farther apart, and also farther from the fingerboard. This makes perfect 5ths in the higher positions awkward and difficult to play in tune. When a perfect 5th is played as harmonics, the problems created by having to press the strings down are no longer present.",
  22:  "Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
    "Two independent lines can generally be played comfortably on the violin if the harmonic intervals remain between a second and an octave. (The detailed fingerings are given here as a study guide.)",
  33:  "Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
    "Two-voice passages that would have independent bowings if performed by two players may have their note values compromised in order to work under one bowing.",
  44:  "This example displays a harmonic glissando, using the 2nd through 8th partials of the D string. Note that it begins on the second partial, halfway between the nut and the bridge.\n\n" +
    "For an extended demonstration of natural harmonics and string length please see the section on the cello.",
  }

const gridHeights = [120, 80, 100, 80, 140]
const gridWidths = [[40, 420],
                    [40, 250, 440],
                    [40, 420],
                    [40, 420],
                    [40, 4]]
const gridTimes = [[0],
                  [7, 12],
                  [22],
                  [33],
                  [44]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Violin"
        title="Arpeggios & Double Stops "
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
