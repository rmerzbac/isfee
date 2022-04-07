import React from 'react';
import Instrument from "./../../instrument";
import vid from './harmonicsVibratoGlissando.mp4';
import score from './harmonicsVibratoGlissando.png';

const instrumentText = {
  0:  "These natural harmonics are produced by lightly touching the string at a node that exists where the notated pitch is located. These 2nd through 5th partials (which are shown here on the D string) can be played as natural harmonics on all 4 strings (transposed relative to the open string).\n\n" +
  "For an extended demonstration of natural harmonics and string length please see the section on the cello.",
  6:  "These are artificial \"touch 4\" harmonics.\n\n" +
  "Natural harmonics use the pitch of the open string as the fundamental. Artificial harmonics require the string to be fully stopped by one finger to create an \"artificial\" fundamental and lightly touched by another finger to make the string vibrate in partials. By far the most common artificial harmonic is the \"touch 4\" 4th-partial harmonic (2 octaves above the stopped note), created by lightly touching a perfect 4th above a stopped note on the same string.",
  10:  "These are artificial \"touch 4\" harmonics.\n\n" +
  "Natural harmonics use the pitch of the open string as the fundamental. Artificial harmonics require the string to be fully stopped by one finger to create an \"artificial\" fundamental and lightly touched by another finger to make the string vibrate in partials. By far the most common artificial harmonic is the \"touch 4\" 4th-partial harmonic (2 octaves above the stopped note), created by lightly touching a perfect 4th above a stopped note on the same string.",
  16:  "Vibrato in string instruments is produced by rocking the stopping finger back and forth on the fingerboard.\n\n" +
  "The kind and amount of vibrato employed varies depending on the style and expressive context, and the performer's individual sound and taste.",
  20:  "Composers may specify \"no vibrato\" or exaggerated kinds of vibrato.",
  25:  "Composers may specify \"no vibrato\" or exaggerated kinds of vibrato.",
  30:  "Composers may specify \"no vibrato\" or exaggerated kinds of vibrato.",
  35:  "Glissandos requires sliding a finger of the left hand up or down a string.\n\n" +
  "Most types of glissandos are marked with a diagonal line from the first to second pitch; in addition, the word 'gliss.' may optionally be marked.\n\n" +
  "Generally string glissandos should be marked with a slur, since they are usually performed in one bow stroke.",
  38:  "The indication \"sul D\" gives advance warning to the violinist not to begin on the A string, since the glissando must be played on the D string to include the lower E-flat.\n\n" +
  "Modern notation practice is that the glissando lasts the entire duration of the note from which it is marked.\n\n" +
  "In this case, the glissando begins immediately after the D-flat has sounded and lasts a half note.",
  41:  "The indication \"sul D\" gives advance warning to the violinist not to begin on the A string, since the glissando must be played on the D string to include the lower E-flat.\n\n" +
  "Modern notation practice is that the glissando lasts the entire duration of the note from which it is marked.\n\n" +
"This rhythmic notation is used to indicate a longer sustained D-flat and a faster glissando.",
  46:  "Although an upward glissando is an inherently dramatic gesture, it should be noted that notes in high positions on low strings are less colorful and resonant than the lower pitches.",
  51:  "An upward glissando to a harmonic is particularly effective, allowing the string to ring freely at its destination pitch. Here the 4th partial is used, 3/4 of the way up the G string.",
  55:  "Portamento is quick, light audible shift. Unlike glissando, it may involve changing fingers or strings; it does not necessarily connect the pitches without a gap.\n\n" +
  "String players frequently use portamento intuitively as an expressive device.",
}

const morePages = [["/scalesStringColors","Scales, String Colors"],
["/arpeggiosDoubleStops","Arpeggios & Double Stops"],
["/articulationAndBowColors","Articulation & Bow Colors"],
["/moreVBowColors","More Bow Colors"],
["/pizzicatoV","Pizzicato"],
["/passagesV","Passages"]]

const gridHeights = [160, 80, 80,80, 80]
const gridWidths = [[40, 160, 140, 180],
                    [40, 70, 100, 100, 160],
                    [40, 80, 150, 200],
                    [40, 150, 280],
                    [40, 480]]
const gridTimes = [[0, 6, 10],
                  [16, 20, 25, 30],
                  [35, 38, 41],
                  [46, 51],
                  [55]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Violin"
        title="Harmonics, Glissando & Vibrato "
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
