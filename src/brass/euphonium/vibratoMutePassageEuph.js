import React from 'react';
import Instrument from "./../../instrument";
import vid from './vibratoMutePassageEuph.mp4'
import score from './vibratoMutePassageEuph.png'

const instrumentText = {
  0: "Performer: Matt Maslanka\n\n" +
    "A slight amount of vibrato is normal on the euphonium, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato.",
  8: "Performer: Matt Maslanka\n\n" +
    "A slight amount of vibrato is normal on the euphonium, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato.",
  15: "Performer: Matt Maslanka\n\n" +
    "A slight amount of vibrato is normal on the euphonium, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato.",
  23: "Performer: Matt Maslanka\n\n" +
    "Pitch-bend can be effectively performed by using a \"half-valve\" technique, creating a moment of instability between the pitches, which can be controlled by the embouchure.",
  30: "Performer: Matt Maslanka\n\n" +
    "Pitch-bend can be effectively performed by using a \"half-valve\" technique, creating a moment of instability between the pitches, which can be controlled by the embouchure.",
  37: "Performer: Matt Maslanka\n\n" +
    "While it is recommended that the kind of mute be specified for trumpet and trombone, on other brass instruments (including the euphonium) \"muted\" unambiguously designates the straight mute.\n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.",
  46: "Performer: Matt Maslanka\n\n" +
    "While it is recommended that the kind of mute be specified for trumpet and trombone, on other brass instruments (including the euphonium) \"muted\" unambiguously designates the straight mute.\n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
    "Note that the use of the mute on the euphonium may be perceived more as a color change than a dynamic change.",
  55: "Performer: Matt Maslanka\n\n" +
    "While it is recommended that the kind of mute be specified for trumpet and trombone, on other brass instruments (including the euphonium) \"muted\" unambiguously designates the straight mute.\n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.",
  65: "Performer: Matt Maslanka\n\n" +
    "While it is recommended that the kind of mute be specified for trumpet and trombone, on other brass instruments (including the euphonium) \"muted\" unambiguously designates the straight mute.\n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
    "Note that the use of the mute on the euphonium may be perceived more as a color change than a dynamic change.",
  75: "Performer: Matt Maslanka\n\n" +
    "Writing \"brassy\" invites the player to add a metallic quality to the tone color. This is possible only at a loud dynamic level.",
  80: "Performer: Matt Maslanka\n\n" +
    "This excerpt from Richard Strauss's \"Don Quixote\" not only displays the exceptional agility of the instrument, but also a character that is perfectly suited to its sound and articulation qualities.",
  89: "Performer: Matt Maslanka\n\n" +
    "This excerpt from Richard Strauss's \"Don Quixote\" not only displays the exceptional agility of the instrument, but also a character that is perfectly suited to its sound and articulation qualities."
}

const morePages = [["/EuphoniumHSVS","Harmonic Series, Valves, & Scales"],
["/EuphoniumSTRC","Skips, Trills, & Register Colors"],
["/EuphoniumAC","Articulations & Colors"]]

const gridHeights = [80, 80, 80, 80, 100, 90]
const gridWidths = [[40, 50, 90, 90, 100, 100], [40, 220, 260], [40, 220, 260], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0, 8, 15, 23, 30], [37, 46], [55, 65], [75], [80], [89]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Euphonium"
        title="Vibrato, Mutes, & Passages"
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
