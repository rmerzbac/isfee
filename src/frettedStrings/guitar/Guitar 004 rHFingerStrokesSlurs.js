import React from 'react';
import Instrument from "./../../instrument";
import vid from './Guitar 004 rHFingerStrokesSlurs.mp4';
import score from './Guitar 004 rHFingerStrokesSlurs.png';

const instrumentText = {
  0: "The fingernails of the right hand may pluck the strings in a motion away from the string called a \"free stroke,\" or play more \"into the strings\" with a motion ending with a rest against the adjacent lower string called a \"rest stroke.\" Rest strokes are more forceful.\n\n" +
    "Although composers may specify \"tierando\" or \"apoyando\" for specific passages, the selection of the kind of stroke is normally a result of the dynamic indication.",
  6: "The fingernails of the right hand may pluck the strings in a motion away from the string called a \"free stroke,\" or play more \"into the strings\" with a motion ending with a rest against the adjacent lower string called a \"rest stroke.\" Rest strokes are more forceful.\n\n" +
    "Although composers may specify \"tierando\" or \"apoyando\" for specific passages, the selection of the kind of stroke is normally a result of the dynamic indication. ",
  12: "Basic articulation can be modified by the use of slurs and by using fingerings which allow strings to ring beyond their melodic duration.",
  19: "Basic articulation can be modified by the use of slurs and by using fingerings which allow strings to ring beyond their melodic duration.\n\n" +
    "Notes beyond the first note of a slur are articulated by the left hand alone as the string continues to ring after the right-hand finger stroke. The dynamic level of the slurred notes can be modulated by the amount of accent given to the left hand's \"pull-off\" (for descending patterns) or \"hammer-on\" (for ascending patterns). All notes included in a slur must lie on the same string.",
  27: "Basic articulation can be modified by the use of slurs and by using fingerings which allow strings to ring beyond their melodic duration.\n\n" +
    "The fingering in this example allows the first notes of the first and second beats to ring beyond their melodic duration.",
  35: "Basic articulation can be modified by the use of slurs and by using fingerings which allow strings to ring beyond their melodic duration.\n\n" +
    "The fingering in this example allows many of the notes to ring beyond their melodic duration, creating an effect analogous to holding down the pedal on a piano.",
  42: "Basic articulation can be modified by the use of slurs and by using fingerings which allow strings to ring beyond their melodic duration.\n\n" +
    "The fingering in this example projects the color of the high position D-string and allows the final A to ring a bit before the cadence. At the end the performer elects to accent the final note of the slur with a pull-off.",
  51: "In this example the melody is mostly played by the right hand's third and fourth fingers, while the thumb and second fingers provide the (mostly) open-string accompaniment.",
  62: "Passages involving active 2-voice counterpoint can be rather unwieldy on a guitar, particularly when the lines are in contrary motion.",
  76: "In this example the first note of the accompanying voice is played high on the A-string to match the high left-hand position of the melody. This is not necessary for the remaining notes in this line which are open strings until the final barred chord.",
  87: "In this example the melody is in the bass, played (mostly) by the right-hand thumb.",
  99: "When standard tuning is used, the guitar's outer strings are tuned to the same pitch class two octaves apart, making the doubling shown here idiomatic, particularly when the remaining notes are open strings."
  }

const gridHeights = [80, 60, 75, 85, 120, 100];
const gridWidths = [[35, 215, 220], [35, 215, 220], [35, 210, 225], [35, 195, 240], [35, 215, 220], [35, 210, 225]];
const gridTimes = [[0, 6], [12, 19], [27, 35], [42, 51], [62, 76], [87, 99]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Guitar"
        title="R. H. Finger-Strokes, Slurs"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
