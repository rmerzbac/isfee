import React from 'react';
import Instrument from "./../../instrument";
import vid from './Guitar 001 tuningFretboard.mp4';
import score from './Guitar 001 tuningFretboard.png';

const instrumentText = {
  0: "Performer: Thomas Tudek\n\n" +
    "Note that the guitar sounds an octave lower than treble clef. The sixth string E in this notation corresponds to the E one line below the bass clef, and the first string E corresponds to the E above middle C. Circled arabic numerals are used to indicate strings (numbered from highest to lowest) in guitar notation.",
  8: "Performer: Thomas Tudek\n\n" +
    "Note that the guitar sounds an octave lower than treble clef. The sixth string E in this notation corresponds to the E one line below the bass clef, and the first string E corresponds to the E above middle C. Circled arabic numerals are used to indicate strings (numbered from highest to lowest) in guitar notation.\n\n" +
    "Scordatura (string re-tuning) is much more common on the guitar than on bowed string instruments. The most common scordatura is tuning the lowest string to D. This video demonstrates how quickly and unobtrusively the guitar can be retuned.",
  26: "Performer: Thomas Tudek\n\n" +
    "Note that the guitar sounds an octave lower than treble clef. The sixth string E in this notation corresponds to the E one line below the bass clef, and the first string E corresponds to the E above middle C. Circled arabic numerals are used to indicate strings (numbered from highest to lowest) in guitar notation.\n\n" +
    "Scordatura (string re-tuning) is much more common on the guitar than on bowed string instruments. The most common scordatura is tuning the lowest string to D. This video demonstrates how quickly and unobtrusively the guitar can be retuned.",
  42: "Performer: Thomas Tudek\n\n" +
    "Note that the guitar sounds an octave lower than treble clef. The sixth string E in this notation corresponds to the E one line below the bass clef, and the first string E corresponds to the E above middle C. Circled arabic numerals are used to indicate strings (numbered from highest to lowest) in guitar notation.\n\n" +
    "Scordatura (string re-tuning) is much more common on the guitar than on bowed string instruments. The most common scordatura is tuning the lowest string to D. This video demonstrates how quickly and unobtrusively the guitar can be retuned.",
  62: "Guitar frets are spaced a half-step apart. Frets are indicated by Roman numerals. The left hand finger presses down the string behind the fret. The 5th fret is a perfect 4th above the open string, and the twelfth fret is the octave. Note that the frets are twice as close together in the second octave. Because of the shape of the tone-hole, the 19th fret is not available on the G (3) and D (4) strings.",
  69: "Guitar frets are spaced a half-step apart. Frets are indicated by Roman numerals. The left hand finger presses down the string behind the fret. The 5th fret is a perfect 4th above the open string, and the twelfth fret is the octave. Note that the frets are twice as close together in the second octave. Because of the shape of the tone-hole, the 19th fret is not available on the G (3) and D (4) strings.",
  74: "Guitar frets are spaced a half-step apart. Frets are indicated by Roman numerals. The left hand finger presses down the string behind the fret. The 5th fret is a perfect 4th above the open string, and the twelfth fret is the octave. Note that the frets are twice as close together in the second octave. Because of the shape of the tone-hole, the 19th fret is not available on the G (3) and D (4) strings.",
  78: "Guitar frets are spaced a half-step apart. Frets are indicated by Roman numerals. The left hand finger presses down the string behind the fret. The 5th fret is a perfect 4th above the open string, and the twelfth fret is the octave. Note that the frets are twice as close together in the second octave. Because of the shape of the tone-hole, the 19th fret is not available on the G (3) and D (4) strings.",
  83: "Guitar frets are spaced a half-step apart. Frets are indicated by Roman numerals. The left hand finger presses down the string behind the fret. The 5th fret is a perfect 4th above the open string, and the twelfth fret is the octave. Note that the frets are twice as close together in the second octave. Because of the shape of the tone-hole, the 19th fret is not available on the G (3) and D (4) strings.",
  87: "Guitar frets are spaced a half-step apart. Frets are indicated by Roman numerals. The left hand finger presses down the string behind the fret. The 5th fret is a perfect 4th above the open string, and the twelfth fret is the octave. Note that the frets are twice as close together in the second octave. Because of the shape of the tone-hole, the 19th fret is not available on the G (3) and D (4) strings.",
  93: "This scale fingering uses the low E, A, G and high E open strings. It remains in first position on the lowest four strings. In first position the first finger plays the first fret, the second finger plays the second fret, and so on.",
  95: "This scale fingering uses the low E, A, G and high E open strings. It remains in first position on the lowest four strings. In first position the first finger plays the first fret, the second finger plays the second fret, and so on.",
  97: "This scale fingering uses the low E, A, G and high E open strings. It remains in first position on the lowest four strings. In first position the first finger plays the first fret, the second finger plays the second fret, and so on.",
  98: "This scale fingering uses the low E, A, G and high E open strings. It remains in first position on the lowest four strings. In first position the first finger plays the first fret, the second finger plays the second fret, and so on.",
  99: "Here the fingering moves to 2nd position, the first finger playing on the 2nd fret.",
  101: "Here the fingering moves to 2nd position, the first finger playing on the 2nd fret.",
  103: "To continue the upward motion of the scale, the guitarist must shift every three or two notes.",
  110: "This scale fingering avoids the open strings beyond the first note. It begins in 2nd position, the first finger stopping the string at the 2nd fret to play F-sharp.",
  115: "This scale fingering avoids the open strings beyond the first note.\n\n" +
    "Here the guitarist shifts up 2 frets between C-sharp and D-sharp to 4th position, playing the D-sharp with the 4th finger.\n\n" +
    "Shifting to higher positions on lower stings earlier in the scale allows the timbre to be progressively matched as the scale ascends.",
  118: "This scale fingering avoids the open strings beyond the first note.\n\n" +
    "Shifting to higher positions on lower stings earlier in the scale allows the timbre to be progressively matched as the scale ascends.",
  126: "The guitar fretboard is designed for a normal position in which the four fingers of the left hand can comfortably play adjacent frets in first position. Since the intervals between the open strings are not consistent (there is one major third, between the G and B strings) a basic pattern such as the one demonstrated here can produce a variety of pitch relationships.",
  140: "The guitar fretboard is designed for a normal position in which the four fingers of the left hand can comfortably play adjacent frets in first position. Since the intervals between the open strings are not consistent (there is one major third, between the G and B strings) a basic pattern such as the one demonstrated here can produce a variety of pitch relationships.\n\n" +
    "This example transposes the previous series of patterns up 6 frets.",
  152: "The guitar fretboard is designed for a normal position in which the four fingers of the left hand can comfortably play adjacent frets in first position. Since the intervals between the open strings are not consistent (there is one major third, between the G and B strings) a basic pattern such as the one demonstrated here can produce a variety of pitch relationships.\n\n" +
    "The patterns in this example are all in 12th position: the first finger is an octave above the open string.",
  163: "An octave above the open strings, the frets are twice as close together. This means adding an extra fret between 2 of the fingers does not create an uncomfortable stretch as it would in low positions. Here there are 2 frets (a major second) from the first to the second finger."
}

const morePages = [["/GuitarLHS","L. H. Shapes"],
["/GuitarLHSSC","L. H. Shapes, String Colors"],
["/GuitarRHFSS","R. H. Finger-Strokes, Slurs"],
["/GuitarRHFP","R. H. Finger Patterns"],
["/GuitarMRHT","More R. H. Techniques"],
["/GuitarH","Harmonics"],
["/GuitarGT","Glissandos, Trills"],
["/GuitarCE","Color Extensions"]]

const gridHeights = [95, 75, 75, 80, 100, 100];
const gridWidths = [[35, 105, 105, 100, 110], [35, 70, 65, 70, 65, 65, 70], [35, 55, 45, 45, 35, 35, 90, 100], [35, 135, 128, 167], [35, 225, 210], [35, 220, 215]];
const gridTimes = [[0, 8, 26, 42], [62, 69, 74, 78, 83, 87], [93, 95, 97, 98, 99, 101, 103], [110, 115, 118], [126, 140], [152, 163]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Guitar"
        title="Tuning, Fretboard"
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
