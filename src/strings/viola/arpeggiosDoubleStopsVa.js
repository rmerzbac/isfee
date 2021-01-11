import React from 'react';
import Instrument from "./../../instrument";
import vid from './arpeggiosDoubleStopsVa.mp4';
import score from './arpeggiosDoubleStopsVa.png';

const instrumentText = {
  0:"Arpeggios are accomplished through a combination of string crossings and/or shifts.",
  9: "Arpeggios are accomplished through a combination of string crossings and shifts. \n\n" +
   "This alternate ending employs three natural harmonics and ends with a \"touch 4\" artificial harmonic. A more detailed look at harmonics is on the next page.",
18  :
   " Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
"Parallel perfect fifths can be played in the lower positions by stopping two strings with one finger.",
23  :"Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
"As one plays in higher positions, the adjacent strings get farther and farther apart, and also farther from the fingerboard. This makes perfect 5ths in the higher positions awkward and difficult to play in tune. When a perfect 5th is played as harmonics, the problems created by having to press the strings down are no longer present.",35  :
   "Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
"Two independent lines can generally be played comfortably on the viola if the harmonic intervals remain between a third and a seventh. (The detailed fingerings are given here as a study guide.)",
36  :
   "Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
"Two independent lines can generally be played comfortably on the viola if the harmonic intervals remain between a third and a seventh. (The detailed fingerings are given here as a study guide.)",
39  :
   "Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
"Two independent lines can generally be played comfortably on the viola if the harmonic intervals remain between a third and a seventh. (The detailed fingerings are given here as a study guide.)",
41  :
   "Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
"Two independent lines can generally be played comfortably on the viola if the harmonic intervals remain between a third and a seventh. (The detailed fingerings are given here as a study guide.)",
43  :
   "Please note: An extended demonstration of string multiple-stop chords can be found in the section on the cello.\n\n" +
"Two independent lines can generally be played comfortably on the viola if the harmonic intervals remain between a third and a seventh. (The detailed fingerings are given here as a study guide.)",
49  :
   "This example displays a harmonic glissando, using the 2nd through 8th partials of the G string. Note that it begins on the second partial, halfway between the nut and the bridge.\n\n" +
"For an extended demonstration of natural harmonics and string length please see the section on the cello.",

  }

const gridHeights = [120, 80, 100, 80, 140]
const gridWidths = [[40, 420],
                    [40, 440],
                    [40, 190, 240],
                    [40, 100, 60, 60, 180],
                    [40, 400]]
const gridTimes = [[0],
                  [9],
                  [18, 23],
                  [36, 39, 41, 43],
                  [49]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Viola"
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
