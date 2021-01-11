import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 001 basicConstruction.mp4';
import score from './Piano 001 basicConstruction.png';

const instrumentText = {
  0: "Performer: Don Freund\n\n" +
    "The piano is so famously sensitive and personal it is counter-intuitive to consider the fact that the performer actually has no direct contact with the strings or the hammers that strike them at the time the tone is produced. Felt hammers are thrown freely at the strings by the keyboard mechanism; the only thing the performer can control is the velocity at which the hammers are launched, and how long the resulting tone is allowed to ring.",
  14: "Performer: Don Freund\n\n" +
    "The piano is so famously sensitive and personal it is counter-intuitive to consider the fact that the performer actually has no direct contact with the strings or the hammers that strike them at the time the tone is produced. Felt hammers are thrown freely at the strings by the keyboard mechanism; the only thing the performer can control is the velocity at which the hammers are launched, and how long the resulting tone is allowed to ring.",
  20: "This view is from the keyboard side. The lowest pitches of the piano are single wound strings. As the pitch ascends two and three strings are assigned to each pitch; these double-strung and triple-strung notes are played by a single hammer and damped by a single damper.\n\n" +
    "The breaks points between single-, double- and triple-stringing and the position of the braces vary on different models of grand pianos. The instrument shown here is a Steinway \"D\".",
  26: "This view is from the keyboard side. The lowest pitches of the piano are single wound strings. As the pitch ascends two and three strings are assigned to each pitch; these double-strung and triple-strung notes are played by a single hammer and damped by a single damper.\n\n" +
    "The breaks points between single-, double- and triple-stringing and the position of the braces vary on different models of grand pianos. The instrument shown here is a Steinway \"D\".",
  31: "This view is from the keyboard side. The lowest pitches of the piano are single wound strings. As the pitch ascends two and three strings are assigned to each pitch; these double-strung and triple-strung notes are played by a single hammer and damped by a single damper.\n\n" +
    "The breaks points between single-, double- and triple-stringing and the position of the braces vary on different models of grand pianos. The instrument shown here is a Steinway \"D\".",
  39: "This view is from the tail end of the piano.\n\n" +
    "These notes are all triple-strung on a Steinway \"D\". The different shapes of the dampers reflect the vibrating power of the ringing strings.",
  50: "This view is from the tail end of the piano.\n\n" +
    "The top 17 pitches of a concert grand piano have no dampers. The decay of notes in this region is rapid enough to make dampers superfluous. The highest note with a damper on a concert grand is the G an octave above the treble clef staff.\n\n" +
    "Most studio grands have no dampers on the top 21 pitches; on these pianos the highest note with a damper is the E-flat above the staff.",
  56: "The piano is capable of at least 8 distinctly audible dynamic levels throughout its entire range.",
  73: "The great dynamic control possible on a piano makes the dynamic voicing of independent lines particularly idiomatic.",
  91: "The lower strings of the piano can ring as long as half a minute. Sustained notes in the highest two octaves will decay within 10 seconds."
}

const gridHeights = [110, 100, 80, 90, 120];
const gridWidths = [[35, 100, 60, 115, 75, 65], [20, 342, 108], [35, 440], [35, 440], [35, 440]];
const gridTimes = [[0, 14, 20, 26, 31], [39, 50], [56], [73], [91]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Basic Construction"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
