import React from 'react';
import Instrument from "./../../instrument";
import vid from './leftHandFingeringB.mp4';
import score from './leftHandFingeringB.png';

const instrumentText = {
  0: "Performer: Ben Jensen\n\n" +
"Please note: All pitches sound an octave lower than written.\n\n" +
"The standard tuning for the contrabass is used here: perfect 4ths ascending from E. Alternate tuning are more common on the bass than on any other bowed string instrument. \n\n" +
"The lowest string is often tuned down as low as C, and about a third of the basses used by professionals have an extension of the E string's length, making low C possible without re-tuning.",
4: "Performer: Ben Jensen\n\n" +
  "Please note: All pitches sound an octave lower than written.\n\n" +
"Because of the great length of the strings, the intervals in first position  are so far apart that only a major 2nd can be covered by the natural span of the hand.",
		7: "Performer: Ben Jensen\n\n" +
"Please note: All pitches sound an octave lower than written.\n\n" +
"Because of the great length of the strings, the intervals in first position  are so far apart that only a major 2nd can be covered by the natural span of the hand.",
		10: "Performer: Ben Jensen\n\n" +
"Please note: All pitches sound an octave lower than written.\n\n" +
"Because of the great length of the strings, the intervals in first position  are so far apart that only a major 2nd can be covered by the natural span of the hand.",
		13: "Performer: Ben Jensen\n\n" +
"Please note: All pitches sound an octave lower than written.\n\n" +
"As the performer shifts into higher positions the intervals are closer together on the fingerboard.",
		17: "Performer: Ben Jensen\n\n" +
"Please note: All pitches sound an octave lower than written.\n\n" +
"Here the thumb is placed halfway up the G string, sounding the pitch an octave higher than the open string. In thumb position the intervals are twice as close together as in first position.",
		20: "Performer: Ben Jensen\n\n" +
"Please note: All pitches sound an octave lower than written.\n\n" +
"As the performer shifts into higher positions the intervals are closer together on the fingerboard.",
		23: "Performer: Ben Jensen\n\n" +
"Please note: All pitches sound an octave lower than written.\n\n" +
"As the performer shifts into higher positions the intervals are closer together on the fingerboard.",
		30: "Please note: All pitches sound an octave lower than written.\n\n" +
"In spite of the difficulties associated with the size of the instrument, accomplished contrabassists can play with a speed and agility matching the cello.\n\n" +
"Note that the bass bow is shorter than the bows of other strings, so bow changes are correspondingly more frequent.",
		37: "Please note: All pitches sound an octave lower than written.\n\n" +
"Trills and tremolos in lower positions on the contrabass are best limited in interval size to a major 2nd.",
		41: "Please note: All pitches sound an octave lower than written.\n\n" +
"Trills and tremolos in lower positions on the contrabass are best limited in interval size to a major 2nd.",
		45: "Please note: All pitches sound an octave lower than written.\n\n" +
"Trills and tremolos in lower positions on the contrabass are best limited in interval size to a major 2nd.\n\n" +
"Larger intervals may be played as a double-stopped bow tremolo, rocking between two adjacent strings.",
		49: "Please note: All pitches sound an octave lower than written.\n\n" +
"Arpeggios are accomplished through a combination of string crossings and/or shifts.",
		57: "Please note: All pitches sound an octave lower than written.\n\n" +
"Because of its perfect 4th tuning, the most comfortable double stops on the contrabass are 3rds and 5ths.",
		68: "Please note: All pitches sound an octave lower than written.\n\n" +
"Because of its perfect 4th tuning, the most comfortable double stops on the contrabass are 3rds and 5ths. The minor 6th in this passage requires an extended position.",
		78: "Please note: All pitches sound an octave lower than written.\n\n" +
"Octave double stops are comfortable in thumb position, but tuning in this region is a challenge for less advanced players.",
		85: "These natural harmonics are produced by lightly touching the string at a node that exists where the notated pitch is located. \n\n" +
"These 2nd through 10th partials (which are shown here on the G string) can be played as natural harmonics on all 4 strings (transposed relative to the open string). High-partial natural harmonics are much more reliable on the contrabass than on smaller string instruments.\n\n" +
"For an extended demonstration of natural harmonics and string length please see the section on the cello.",

}

const gridHeights = [110, 90, 80, 80, 80, 80]
const gridWidths = [[30, 50, 30, 25, 50, 60, 50, 40, 80],
                    [40, 480],
                    [40, 170, 70, 120],
                    [40, 420],
                    [40, 210, 210],
                    [40, 280, 170]]
const gridTimes = [[0, 4, 7, 10, 13, 17, 20, 23],
                  [30],
                  [37, 41, 45],
                  [49],
                  [57, 68],
                  [78, 85]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contrabass"
        title="Left Hand Fingering"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
