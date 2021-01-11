import React from 'react';
import Instrument from "./../../instrument";
import vid from './multipleStops.mp4';
import score from './multipleStops.png';

const instrumentText = {
  0: "These first three triple stops use the open C string. The first chord also uses the open G string, so only the E has to be stopped. \n\n" +
    "The last 2 chords of this set use the intervals of a 4th and a 6th, the two most comfortable double-stop intervals.  \n\n  To play 4ths, adjacent fingers are used on adjacent strings, with the lower numbered finger on the higher string.  \n\n  To play 6ths, adjacent fingers are used on adjacent strings, with the lower numbered finger on the lower string.",
  7: "For this pair of quadruple stops the open C string (first chord) and open A string (both chords) are utilized.The stopped notes of the first chord form a perfect 5th, which is played with one finger (the 1 finger) stopping adjacent strings at the same distance from the nut.  \n\n  The bottom three pitches of the second chord are stopped in stacked minor 6ths, comfortably played by three adjacent fingers on three adjacent strings. ",
	11: "The bottom two notes in these three quadruple stops form a perfect 5th played with the index finger (1) stopping both the C and G strings. \n\n The remaining stopped pitches (note that the A in the first chord of this set is the open string) are configured successively in stacked 6ths and a 6th plus a diminished 4th, all comfortable intervals.  \n\n  Observe how the 3 finger sustains the F-sharp on the D string, while the 4 and 2 fingers create the top-voice D and C on the A string. ",
	17: "The open G string is used in this pair of chords. \n\n  Notice how the three stopped notes of the second chord of this pair all lie within the first three stopped half-steps of their respective strings.  \n\n  The cello bow can sustain only two notes at a time; all the chords in this example are broken upwards.",
	22: "Note where the open strings are in these three quadruple stops, and how the 2 finger stops two adjacent notes to create the perfect 5th in the second chord of this set. \n\n" +
    "For the third chord, the outside strings are stopped a half-step and a whole-step from the nut, while the G and D strings are open.  \n\n  The cello bow can sustain only two notes at a time; all the chords in this example are broken upwards.",
	29: "The first chord of this set stacks 4ths, one perfect and one augmented, creating a 4-3-1 finger pattern while the A string is left open. \n\n" +
    "The second chord uses two open strings, D and A. \n\n" +
    "The third chord of this set has all strings stopped, using the 1 finger to provide the bass perfect 5th.  \n\n  The cello bow can sustain only two notes at a time; all the chords in this example are broken upwards.",
	36: "The A string is open, and the 2 finger stops two adjacent notes to create the perfect 5th.  \n\n  The cello bow can sustain only two notes at a time; all the chords in this example are broken upwards.",
	39: "Here octaves are played against the open G string, adding the open C string in the last chord.  \n\n  Note that octaves are played using thumb position; the distance between the fingers is exactly the same as for Touch 4 artificial harmonics, except that for octaves the thumb and 3 finger are on adjacent strings.  \n\n  The cello bow can sustain only two notes at a time; all the chords in this example are broken upwards.",
	49: "Stopped 4th and 6ths against the open C and G strings.  \n\n  The cello bow can sustain only two notes at a time; all the chords in this example are broken upwards.",
	57: "Thirds against the open C string. Note that thirds stretch to the distance between the 1 and 4 finger; as the intervals get smaller, the stretch for the double stop becomes larger. ",
	63: "Thirds against the open A string. Note that in the last of these three chords the D could be played on the open D string, but that would break the pattern and force the F to be played in a high position on the G string. Here the D is played on the G string with the 4th finger, and the F is played on the D string with the 1st finger.",
	70: "These last two chords are obviously easy to play and could be performed by an entire cello section non divisi.  \n\n  Quadruple stops on this page are playable and effective at a moderate tempo for solo or chamber playing. For orchestral section performance dividing the section would produce a more effective result.",
}

const gridHeights = [150, 100, 150, 150]
const gridWidths = [[40, 150, 120, 200],
[40, 100, 150, 150],
[40, 60, 170, 170],
[40, 150, 150, 150]]
const gridTimes = [[0, 7, 11],
                  [17, 22, 29],
                  [36, 39, 49],
                  [57, 63, 70],]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Cello"
        title="Multiple Stops"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
