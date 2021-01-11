import React from 'react';
import Instrument from "./../../instrument";
import vid from './harmonicsVibratoGlissandoVa.mp4';
import score from './harmonicsVibratoGlissandoVa.png';

const instrumentText = {
  0: "The first five harmonics shown here are natural harmonics, produced by lightly touching the string at a node that exists where the notated pitch is located.\n\n" +
"These 2nd through 5th partials (which are shown here on the G string) can be played as natural harmonics on all 4 strings (transposed relative to the open string).\n\n" +
"The last 8 harmonics are artificial \"touch 4\" harmonics (sounding 2 octaves above the stopped note), created by lightly touching a perfect 4th above a stopped note on the same string.",
17: "Vibrato in string instruments is produced by rocking the stopping finger back and forth on the fingerboard.\n\n" +
"The kind and amount of vibrato employed varies depending on the style and expressive context, and the performer's individual sound and taste.",
20: "Composers may specify \"no vibrato\" or exaggerated kinds of vibrato.",
23: "Composers may specify \"no vibrato\" or exaggerated kinds of vibrato.",
26: "Composers may specify \"no vibrato\" or exaggerated kinds of vibrato.",
31: "Glissandos requires sliding a finger of the left hand up or down a string. Most types of glissandos are marked with a diagonal line from the first to second pitch; in addition, the word 'gliss.' may optionally be marked. \n\n" +
"Generally string glissandos should be marked with a slur, since they are usually performed in one bow stroke.\n\n" +
"The indication \"sul G\" gives advance warning to the violinist not to begin on the D string, since the glissando must be played on the G string to include the lower A-flat.",
37: "Modern notation practice is that the glissando lasts the entire duration of the note from which it is marked.  This rhythmic notation is used to indicate a longer sustained G-flat and a faster glissando.",
43: "Although an upward glissando is an inherently dramatic gesture, it should be noted that notes in high positions on low strings are less colorful and resonant than the lower pitches.",
45: "An upward glissando to a harmonic is particularly effective, allowing the string to ring freely at its destination pitch. Here the 4th partial is used, 3/4 of the way up the C string.",
51: "Portamento is quick, light audible shift. Unlike glissando, it may involve changing fingers or strings; it does not necessarily connect the pitches without a gap. String players frequently use portamento intuitively as an expressive device.",

  }

const gridHeights = [170, 80, 100,80, 80]
const gridWidths = [[40, 420],
                    [40, 70, 100, 100, 160],
                    [40, 210, 200],
                    [40, 150, 280],
                    [40, 480]]
const gridTimes = [[0],
                  [17, 20, 23, 26],
                  [31, 37],
                  [43, 45],
                  [51]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Viola"
        title="Harmonics, Glissando & Vibrato "
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
