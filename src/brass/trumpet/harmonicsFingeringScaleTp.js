import React from 'react';
import Instrument from "./../../instrument";
import vid from './harmonicsFingeringScaleTp.mp4';
import score from './harmonicsFingeringScaleTp.png';

const instrumentText = {
  0: "Performer: Thaddeus Archer \n\n" +
    " The first order of pitch selection for all brass instruments is producing a partial from the harmonic series. \n\n" +
    " When the B-flat trumpet is played open (no keys depressed), the concert pitch of the fundamental is the B-flat in the bass clef. \n\n" +
    " The first partial (pedal tone) is barely playable; the lowest usable partial is the 2nd partial. \n\n" +
    " Note that the partials are successively closer together, and that the 7th partial is \"out of tune.\" ",
  29: "Performer: Thaddeus Archer \n\n" +
    "The valves lower the pitch of the fundamental by adding tubing to the air column. \n\n" +
    " The trumpet uses piston valves played by the right hand. \n\n" +
    " The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. \n\n" +
    " The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. \n\n" +
    " The 3rd valve lowers the fundamental an additional minor 3rd. \n\n" +
    " This allows for a chromatic scale of seven different fundamentals, enough to fill in the perfect-5th gap between the 2nd and 3rd partials. ",
  45: "Performer: Thaddeus Archer \n\n" +
    "The lower two octaves of the trumpet's range can be played with assurance and tonal flexibility. ",
  60: "Performer: Thaddeus Archer \n\n" +
    "Pitches above the staff are brilliant, but are more difficult to control. ",
  64: "Performer: Thaddeus Archer \n\n" +
    "Above concert C above the staff the timbre of the trumpet loses its fullness. \n\n" +
    " Most orchestral trumpet players are not comfortable in this range. \n\n" +
    " Using a C trumpet or even a D trumpet has little effect on the playability or timbre of these pitches. \n\n" +
    " For a distinct difference in timbre and agility, see the Piccolo Trumpet unit. ",
  71: "Performer: Thaddeus Archer \n\n" +
    "Skips of up to an octave in either direction may be slurred with little difficulty. ",
  77: "Performer: Thaddeus Archer \n\n" +
    "Skips of up to an octave in either direction may be slurred with little difficulty. ",
  82: "Performer: Thaddeus Archer \n\n" +
    "As the pitches get higher, the partials are closer together and more fingerings are possible for any given pitch. \n\n" +
    " The change in color is slight, but it is interesting to hear the intonation variety and articulation created by the change of fundamentals (note that this example is slurred). \n\n" +
    " Here concert D is played on the B-flat trumpet as the 5th partial of B-flat, the 6th partial of G, and the 7th partial of E."
}

const morePages = [["/TrumpetTRC","Tremolos & Register Colors"],
["/TrumpetAVC","Articulation & Vibrato Colors"],
["/TrumpetPBM","Pitch Bend & Mutes"],
["/TrumpetP","Passages"]]

const gridHeights = [140, 140, 130, 140]
const gridWidths = [[40, 480],
[40, 480],
[40, 240, 45, 120],
[40, 160, 120, 120]]
const gridTimes = [[0],
[29],
[45, 60, 64],
[71, 77, 82]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Trumpet"
        title="Harmonic Series, Fingering & Scale"
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
