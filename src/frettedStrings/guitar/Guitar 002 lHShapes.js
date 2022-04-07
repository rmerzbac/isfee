import React from 'react';
import Instrument from "./../../instrument";
import vid from './Guitar 002 lHShapes.mp4';
import score from './Guitar 002 lHShapes.png';

const instrumentText = {
  0: "Two different fingers are often used to play at the same fret on two different strings. In these examples the 2nd and 3rd fingers share the fret a half-step above the the 1st finger's fret.",
  7: "Two different fingers are often used to play at the same fret on two different strings. In these examples the 2nd and 3rd fingers share the fret a half-step above the the 1st finger's fret.",
  13: "Two different fingers are often used to play at the same fret on two different strings. In these examples the 2nd and 3rd fingers share the fret a half-step above the the 1st finger's fret.",
  19: "Two different fingers are often used to play at the same fret on two different strings. In these examples the 2nd and 3rd fingers share the fret a half-step above the the 1st finger's fret.",
  25: "Two different fingers are often used to play at the same fret on two different strings. In these examples the 2nd and 3rd fingers share the fret a half-step above the the 1st finger's fret.\n\n" +
    "A common left-hand technique is the use of the flattened 1st finger to stop all the strings at particular fret. This technique is called a \"barre,\" and it is notated with a capital C and the Roman numeral number of the barred fret. (The 1st fingers shown here in parentheses are redundant.)",
  31: "Two different fingers are often used to play at the same fret on two different strings. In these examples the 2nd and 3rd fingers share the fret a half-step above the the 1st finger's fret.\n\n" +
    "A common left-hand technique is the use of the flattened 1st finger to stop all the strings at particular fret. This technique is called a \"barre,\" and it is notated with a capital C and the Roman numeral number of the barred fret. (The 1st fingers shown here in parentheses are redundant.)",
  37: "Two different fingers are often used to play at the same fret on two different strings. In these examples the 2nd and 3rd fingers share the fret a half-step above the the 1st finger's fret.\n\n" +
    "A common left-hand technique is the use of the flattened 1st finger to stop all the strings at particular fret. This technique is called a \"barre,\" and it is notated with a capital C and the Roman numeral number of the barred fret. (The 1st fingers shown here in parentheses are redundant.)",
  45: "Two different fingers are often used to play at the same fret on two different strings. In these examples the 2nd and 3rd fingers share the fret a half-step above the the 1st finger's fret.\n\n" +
    "A common left-hand technique is the use of the flattened 1st finger to stop all the strings at particular fret. This technique is called a \"barre,\" and it is notated with a capital C and the Roman numeral number of the barred fret. (The 1st fingers shown here in parentheses are redundant.)\n\n" +
    "Here a partial barre is used, allowing the low E-string to sound its open pitch.",
  52: "The patterns on this line are the same as the line above, transposed up a perfect 4th enharmonically and using open strings instead of the barre.",
  60: "The patterns on this line are the same as the line above, transposed up a perfect 4th enharmonically and using open strings instead of the barre.",
  65: "The patterns on this line are the same as the line above, transposed up a perfect 4th enharmonically and using open strings instead of the barre.",
  72: "The patterns on this line are the same as the line above, transposed up a perfect 4th enharmonically and using open strings instead of the barre.",
  78: "The patterns on this line use a barre at the 6th fret, creating an exact transposition of the second line above, up a perfect 4th enharmonically.\n\n" +
    "All of the patterns on this page are playable and can become comfortable with practice and familiarity, but since they are relatively unfamiliar, sight-reading these kinds of patterns can be fatiguing, particularly those using a barre.",
  84: "The patterns on this line use a barre at the 6th fret, creating an exact transposition of the second line above, up a perfect 4th enharmonically.\n\n" +
    "All of the patterns on this page are playable and can become comfortable with practice and familiarity, but since they are relatively unfamiliar, sight-reading these kinds of patterns can be fatiguing, particularly those using a barre.",
  91: "The patterns on this line use a barre at the 6th fret, creating an exact transposition of the second line above, up a perfect 4th enharmonically.\n\n" +
    "All of the patterns on this page are playable and can become comfortable with practice and familiarity, but since they are relatively unfamiliar, sight-reading these kinds of patterns can be fatiguing, particularly those using a barre.",
  96: "The patterns on this line use a barre at the 6th fret, creating an exact transposition of the second line above, up a perfect 4th enharmonically.\n\n" +
    "All of the patterns on this page are playable and can become comfortable with practice and familiarity, but since they are relatively unfamiliar, sight-reading these kinds of patterns can be fatiguing, particularly those using a barre."
}

const morePages = [["/GuitarTF","Tuning, Fretboard"],
["/GuitarLHSSC","L. H. Shapes, String Colors"],
["/GuitarRHFSS","R. H. Finger-Strokes, Slurs"],
["/GuitarRHFP","R. H. Finger Patterns"],
["/GuitarMRHT","More R. H. Techniques"],
["/GuitarH","Harmonics"],
["/GuitarGT","Glissandos, Trills"],
["/GuitarCE","Color Extensions"]]

const gridHeights = [110, 135, 115, 130];
const gridWidths = [[35, 105, 110, 110, 95], [35, 100, 110, 105, 105], [35, 105, 110, 100, 105], [35, 105, 110, 100, 105]];
const gridTimes = [[0, 7, 13, 19], [25, 31, 37, 45], [52, 60, 65, 72], [78, 84, 91, 96]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Guitar"
        title="L. H. Shapes"
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
