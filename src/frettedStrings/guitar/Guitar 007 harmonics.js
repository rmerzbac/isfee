import React from 'react';
import Instrument from "./../../instrument";
import vid from './Guitar 007 harmonics.mp4';
import score from './Guitar 007 harmonics.png';

const instrumentText = {
  0: "Please refer to the \"String Length Chart\" in the string instruments section for a demonstration of the relationship between the position of harmonics on strings and the resulting pitch.\n\n" +
    "Natural harmonics are created by lightly touching the string at the indicated fret. Harmonics at the 12th fret produce the same pitch as stopped strings at this fret. (Note that the guitar's treble clef indicates pitches an octave lower than standard treble clef.)\n\n" +
    "These are 2nd partial harmonics, an octave above the open strings.",
  8: "Please refer to the \"String Length Chart\" in the string instruments section for a demonstration of the relationship between the position of harmonics on strings and the resulting pitch.\n\n" +
    "Natural harmonics are created by lightly touching the string at the indicated fret. Harmonics at the 7th fret (perfect 5th above the open string) produce the pitch an octave higher than stopped strings at this fret. (Note that the guitar's treble clef indicates pitches an octave lower than standard treble clef.)\n\n" +
    "These are 3rd partial harmonics, an octave and a perfect 5th above the open strings.",
  15: "Please refer to the \"String Length Chart\" in the string instruments section for a demonstration of the relationship between the position of harmonics on strings and the resulting pitch.\n\n" +
    "Natural harmonics are created by lightly touching the string at the indicated fret. Harmonics at the 5th fret (perfect 4th above the open string) produce the pitch an octave and a perfect 5th higher than stopped strings at this fret. (Note that the guitar's treble clef indicates pitches an octave lower than standard treble clef.)\n\n" +
    "These are 4th partial harmonics, two octaves above the open strings.",
  21: "Please refer to the \"String Length Chart\" in the string instruments section for a demonstration of the relationship between the position of harmonics on strings and the resulting pitch.\n\n" +
    "Natural harmonics are created by lightly touching the string at the indicated fret. Harmonics at the 4th fret (major 3rd above the open string) produce the pitch an two octaves higher than stopped strings at this fret. (Note that the guitar's treble clef indicates pitches an octave lower than standard treble clef.)\n\n" +
    "These are 5th partial harmonics, two octaves and a major 3rd above the open strings.",
  28: "Please refer to the \"String Length Chart\" in the string instruments section for a demonstration of the relationship between the position of harmonics on strings and the resulting pitch.\n\n" +
    "Natural harmonics are created by lightly touching the string at the indicated fret. Harmonics at the 3rd fret (minor 3rd above the open string) produce the pitch an two octaves and a major third higher than stopped strings at this fret. (Note that the guitar's treble clef indicates pitches an octave lower than standard treble clef.)\n\n" +
    "These are 6th partial harmonics, two octaves and a perfect 5th above the open strings.",
  36: "Natural harmonics can also be played by the right hand alone, freeing the left hand for other parts of the texture. In these two examples the same harmonic pitches (4th-partial harmonics sounding two octaves above the open  string) are played first as left-hand \"touch-4\" harmonics at the 5th fret, and then as right-hand harmonics.",
  41: "Natural harmonics can also be played by the right hand alone, freeing the left hand for other parts of the texture. In these two examples the same harmonic pitches (4th-partial harmonics sounding two octaves above the open  string) are played first as left-hand \"touch-4\" harmonics at the 5th fret, and then as right-hand harmonics.\n\n" +
    "Right-hand harmonics are created by lightly touching the node with the index finger of the right hand while plucking the string with the ring finger of the same hand. The node used to play the 4th-partial right-hand harmonics demonstrated here is located 3/4's of the way up the string, where the 24th fret would be.",
  46: "Artificial harmonics on the guitar are played as right-hand harmonics that are partials of fundamentals created by the left hand stopping the string in the usual manner.\n\n" +
    "In this example, the right-hand index finger touches the string 12 frets above where it is stopped by the left hand, sounding the 2nd-partial harmonic an octave above the stopped string.",
  54: "Artificial harmonics on the guitar are played as right-hand harmonics that are partials of fundamentals created by the left hand stopping the string in the usual manner.\n\n" +
    "In this example, the right-hand index finger touches the string 7 frets (a perfect 5th) above where it is stopped by the left hand, sounding the 3rd-partial harmonic an octave and a perfect 5th above the stopped string.",
  61: "In this excerpt (from \"Stirrings\" by Don Freund) the pitches are notated where they sound (there is no \"8\" below the treble clef). The Roman numerals indicate the fret (and consequently the partial) and the circled numbers indicate the string for the natural harmonics. These natural harmonics can be found in the first line of this page.\n\n" +
    "Since all 6 strings are used, the harmonics can ring indefinitely. In the case of natural harmonics, the left hand can leave its position after the note has begun, and it will continue to ring the initial pitch.",
  67: "In this excerpt (from \"Stirrings\" by Don Freund) the pitches are notated where they sound (there is no \"8\" below the treble clef). The Roman numerals indicate the fret (and consequently the partial) and the circled numbers indicate the string for the natural harmonics. These natural harmonics can be found in the first line of this page.\n\n" +
    "The last note is an artificial harmonic. The left hand fingers 8th-fret C on the E-string. The right hand's index finger lightly touches an octave higher (where the 20th fret would be) to produce a 2nd-partial harmonic sounding an octave above the stopped string."
}

const morePages = [["/GuitarTF","Tuning, Fretboard"],
["/GuitarLHS","L. H. Shapes"],
["/GuitarLHSSC","L. H. Shapes, String Colors"],
["/GuitarRHFSS","R. H. Finger-Strokes, Slurs"],
["/GuitarRHFP","R. H. Finger Patterns"],
["/GuitarMRHT","More R. H. Techniques"],
["/GuitarGT","Glissandos, Trills"],
["/GuitarCE","Color Extensions"]]

const gridHeights = [145, 125, 140, 110];
const gridWidths = [[35, 80, 80, 80, 90, 80], [35, 215, 220], [35, 220, 215], [35, 255, 180]];
const gridTimes = [[0, 8, 15, 21, 28], [36, 41], [46, 54], [61, 67]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Guitar"
        title="Harmonics"
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
