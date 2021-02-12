import React from 'react';
import Instrument from "./../../instrument";
import vid from './Guitar 003 lHShapesStringColors.mp4';
import score from './Guitar 003 lHShapesStringColors.png';

const instrumentText = {
  0: "The very familiar three-note minor and major chord shapes are a standard part of the guitar vocabulary. In these examples they are shifted to various fret positions against open string pedal tones.",
  13: "The very familiar three-note minor and major chord shapes are a standard part of the guitar vocabulary. In these examples they are shifted to various fret positions against open string pedal tones.",
  22: "This progression uses four-note chords in which at least two of the notes are created by the first finger barre and the remaining notes may be stopped by the second and third fingers. Barre formations such as these are readily transposed to any key.",
  31: "This progression uses four-note chords in which at least two of the notes are created by the first finger barre and the remaining notes may be stopped by the second and third fingers. Barre formations such as these are readily transposed to any key.",
  41: "Since the strings are all the same length, the basic pitch range of each of the strings is a product of its relative thickness and weight. Playing a phrase in the same pitch range on different strings demonstrates a variety of timbral colors.\n\n" +
    "Notes played in lower positions are brighter and ring longer; notes played in higher positions are darker, warmer, but the shorter string length can reduce the ring time.\n\n" +
    "Vibrato is used to enhance the singing tone of the instrument in all these examples.",
  48: "Since the strings are all the same length, the basic pitch range of each of the strings is a product of its relative thickness and weight. Playing a phrase in the same pitch range on different strings demonstrates a variety of timbral colors.\n\n" +
    "Notes played in lower positions are brighter and ring longer; notes played in higher positions are darker, warmer, but the shorter string length can reduce the ring time.\n\n" +
    "Vibrato is used to enhance the singing tone of the instrument in all these examples.",
  55: "Since the strings are all the same length, the basic pitch range of each of the strings is a product of its relative thickness and weight. Playing a phrase in the same pitch range on different strings demonstrates a variety of timbral colors.\n\n" +
    "Notes played in lower positions are brighter and ring longer; notes played in higher positions are darker, warmer, but the shorter string length can reduce the ring time.\n\n" +
    "Vibrato is used to enhance the singing tone of the instrument in all these examples.",
  61: "Since the strings are all the same length, the basic pitch range of each of the strings is a product of its relative thickness and weight. Playing a phrase in the same pitch range on different strings demonstrates a variety of timbral colors.\n\n" +
    "Notes played in lower positions are brighter and ring longer; notes played in higher positions are darker, warmer, but the shorter string length can reduce the ring time.\n\n" +
    "Vibrato is used to enhance the singing tone of the instrument in all these examples.",
  69: "Since the strings are all the same length, the basic pitch range of each of the strings is a product of its relative thickness and weight. Playing a phrase in the same pitch range on different strings demonstrates a variety of timbral colors.\n\n" +
    "Notes played in lower positions are brighter and ring longer; notes played in higher positions are darker, warmer, but the shorter string length can reduce the ring time.\n\n" +
    "Vibrato is used to enhance the singing tone of the instrument in all these examples.",
  76: "Since the strings are all the same length, the basic pitch range of each of the strings is a product of its relative thickness and weight. Playing a phrase in the same pitch range on different strings demonstrates a variety of timbral colors.\n\n" +
    "Notes played in lower positions are brighter and ring longer; notes played in higher positions are darker, warmer, but the shorter string length can reduce the ring time.\n\n" +
    "Vibrato is used to enhance the singing tone of the instrument in all these examples.",
  85: "Since the strings are all the same length, the basic pitch range of each of the strings is a product of its relative thickness and weight. Playing a phrase in the same pitch range on different strings demonstrates a variety of timbral colors.\n\n" +
    "Notes played in lower positions are brighter and ring longer; notes played in higher positions are darker, warmer, but the shorter string length can reduce the ring time.\n\n" +
    "Vibrato is used to enhance the singing tone of the instrument in all these examples."
  }

const gridHeights = [120, 90, 90, 90, 100];
const gridWidths = [[35, 440], [35, 440], [35, 205, 230], [35, 105, 105, 105, 105], [35, 140, 140, 150]];
const gridTimes = [[0], [13], [22, 31], [41, 48, 55, 61], [69, 76, 85]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Guitar"
        title="L. H. Shapes, String Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
