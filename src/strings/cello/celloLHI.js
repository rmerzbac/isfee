import React from 'react';
import Instrument from "./../../instrument";
import vid from './leftHandInflections.mp4';
import score from './leftHandInflections.png';

const instrumentText = {
  0: "Vibrato in string instruments is produced by rocking the stopping finger back and forth on the fingerboard. \n\n The kind and amount of vibrato employed varies depending on the style and expressive context, and the performer's individual sound and taste. ",
	4: "Composers may specify no vibrato or exaggerated kinds of vibrato.",
	8: "Composers may specify no vibrato or exaggerated kinds of vibrato.",
	12: "Composers may specify no vibrato or exaggerated kinds of vibrato.",
	15: "Trills and fingered tremolos on string instruments require only the motion of one finger, so they can be played very rapidly.\n\n Note that the cello can comfortably reach only a major 3rd tremolo in the lower positions (unless an open string is the bottom note of the interval).",
	29: "Glissandos requires sliding a finger of the left hand up or down a string.\n\n Most types of glissandos are marked with a diagonal line from the first to second pitch; in addition, the word 'gliss.' may optionally be marked.\n\n Generally string glissandos should be marked with a slur, since they are usually performed in one bow stroke.",
	32: "Modern notation practice is that the glissando lasts the entire duration of the note from which it is marked.\n\n In this case, the glissando begins immediately after the D-flat has sounded and lasts a half note. \n\n The indication 'sul D' gives advance warning to the cellist not to begin on the A string, since the glissando must be played on the D string to include the lower E-flat.",
	37: "This rhythmic notation is used to indicate a longer sustained D-flat and a faster glissando.",
	42: "Although an upward glissando is an inherently dramatic gesture, it should be noted that notes in high positions on low strings are less colorful and resonant than the lower pitches.",
	47: "An upward glissando to a harmonic is particularly effective, allowing the string to ring freely at its destination pitch. Here the 4th partial is used, 3/4 of the way up the string.",
	53: "Portamento is quick, light audible shift. Unlike glissando, it may involve changing fingers or strings; it does not necessarily connect the pitches without a gap. String players frequently use portamento intuitively as an expressive device.",
	60: "Portamento is quick, light audible shift. Unlike glissando, it may involve changing fingers or strings; it does not necessarily connect the pitches without a gap. \n\n String players frequently use portamento intuitively as an expressive device.",
}

const morePages = [["/celloSF","Scale Fingering"],
["/celloNH","Natural Harmonics"],
["/celloAH","Artificial Harmonics"],
["/celloMS","Multiple Stops"],
["/celloRHI","Right Hand Inflections"],
["/bowDirectionsSpeedPressure","Bow Directions, Speed and Pressure"],
["/moreBowColors","More Bow Colors"],
["/pizzicato","Pizzicato"]]

const gridHeights = [120, 90, 90, 110, 110]
const gridWidths = [[40, 100, 80, 120, 100],
                    [40, 400],
                    [40, 120, 120, 180],
                    [40, 200, 200],
                    [40, 250, 200]]
const gridTimes = [[0, 4, 8, 12],
                  [15],
                  [29, 32, 37],
                  [42, 47],
                  [53, 60]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Cello"
        title="Left Hand Inflections"
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
