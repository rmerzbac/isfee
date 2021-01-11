import React from 'react';
import Instrument from "./../../instrument";
import vid from './skipsTrillsRegisterColorsEuph.mp4'
import score from './skipsTrillsRegisterColorsEuph.png'

const instrumentText = {
  0: "Performer: Matt Maslanka\n\n" + 
  "Skips require non-adjacent partial selection by the embouchure.\n\n" +
    "Here the skips are from the 3rd to 6th partial.",
  4: "Performer: Matt Maslanka\n\n" + 
  "Skips require non-adjacent partial selection by the embouchure.\n\n" +
    "Here the skips are from the 6th to 3rd partial. Downward skips are slightly less immediate in their response.",
  7: "Performer: Matt Maslanka\n\n" + 
  "As the pitches get higher, the partials are closer together and more fingerings are possible for any given pitch. The change in color is slight, but it is interesting to hear the intonation variety and articulation created by the change of fundamentals (note that this example is slurred). Here D is played as the 5th partial of B-flat, the 6th partial of G, the 7th partial of E and the 8th partial D (using the 4th valve).",
  13: "Performer: Matt Maslanka\n\n" + 
  "Trills and tremolos on the euphonium are executed with valve fingering alternation.",
  19: "Performer: Matt Maslanka\n\n" + 
  "Trills and tremolos on the euphonium are executed with valve fingering alternation. Here the 4th valve is used to create a whole-step trill. Note that even though the fingering here is exactly the same as demonstrated at the of the first line of the previous page, the speed of the trill and the inertia of the sound wave combine to a rising 2nd rather than a falling 4th.",
  25: "Performer: Matt Maslanka\n\n" + 
  "Trills and tremolos on the euphonium are executed with valve fingering alternation. As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column.",
  31: "Performer: Matt Maslanka\n\n" + 
  "Trills and tremolos on the euphonium are executed with valve fingering alternation. As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column.",
  36: "Performer: Matt Maslanka\n\n" + 
  "Trills and tremolos on the euphonium are executed with valve fingering alternation. As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column.",
  41: "Performer: Matt Maslanka\n\n" + 
  "Trills and tremolos on the euphonium are executed with valve fingering alternation. As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column.",
  46: "Performer: Matt Maslanka\n\n" + 
  "Trills and tremolos on the euphonium are executed with valve fingering alternation. As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column.",
  52: "Performer: Matt Maslanka\n\n" + 
  "In its low register the euphonium offers a brighter, more sharply focused sound quality as an alternative to tuba.",
  55: "Performer: Matt Maslanka\n\n" + 
  "In its low register the euphonium offers a brighter, more sharply focused sound quality as an alternative to tuba.",
  57: "Performer: Matt Maslanka\n\n" + 
  "In its low register the euphonium offers a brighter, more sharply focused sound quality as an alternative to tuba.",
  60: "Performer: Matt Maslanka\n\n" + 
  "In its low register the euphonium offers a brighter, more sharply focused sound quality as an alternative to tuba.",
  63: "Performer: Matt Maslanka\n\n" + 
  "In this middle range the euphonium is very clear and responsive.",
  65: "Performer: Matt Maslanka\n\n" + 
  "In this middle range the euphonium is very clear and responsive.",
  68: "Performer: Matt Maslanka\n\n" + 
  "In this middle range the euphonium is very clear and responsive.",
  71: "Performer: Matt Maslanka\n\n" + 
  "In this middle range the euphonium is very clear and responsive.",
  73: "Performer: Matt Maslanka\n\n" + 
  "In this middle high range, the euphonium projects with authority and agility.",
  76: "Performer: Matt Maslanka\n\n" + 
  "In this middle high range, the euphonium projects with authority and agility.",
  78: "Performer: Matt Maslanka\n\n" + 
  "In this middle high range, the euphonium projects with authority and agility.",
  81: "Performer: Matt Maslanka\n\n" + 
  "In this middle high range, the euphonium projects with authority and agility.",
  84: "Performer: Matt Maslanka\n\n" + 
  "In this concert range, the euphonium can provide a roundness and openness of timbre unique in the brass family.",
  87: "Performer: Matt Maslanka\n\n" + 
  "In this concert range, the euphonium can provide a roundness and openness of timbre unique in the brass family.",
  89: "Performer: Matt Maslanka\n\n" + 
  "In this concert range, the euphonium can provide a roundness and openness of timbre unique in the brass family.",
  92: "Performer: Matt Maslanka\n\n" + 
  "In this concert range, the euphonium can provide a roundness and openness of timbre unique in the brass family."
}

const gridHeights = [110, 80, 65, 65, 70, 80]
const gridWidths = [[40, 150, 150, 180], [40, 50, 50, 50, 50, 50, 50, 140], [40, 110, 110, 120, 140], [40, 110, 110, 120, 140], [40, 110, 110, 120, 140], [40, 110, 110, 120, 140], [40, 110, 110, 120, 140]]
const gridTimes = [[0, 4, 7], [13, 19, 25, 31, 36, 41, 46], [52, 55, 57, 60], [63, 65, 68, 71], [73, 76, 78, 81], [84, 87, 89, 92]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Euphonium"
        title="Skips, Trills, & Register Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


