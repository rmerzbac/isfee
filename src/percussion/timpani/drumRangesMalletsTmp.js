import React from 'react';
import Instrument from "./../../instrument";
import vid from './drumRangesMalletsTmp.mp4';
import score from './drumRangesMalletsTmp.png';

const instrumentText = {
  0: "Performer: Eric Guinivan. \n\n" +
  "The largest timpano generally available is the 32\" drum. \n\n" +
  "Although the range of any given drum may vary depending on a number of factors, the reliable standard range of the may be considered to be the perfect 5th indicated here. \n\n" +
  "This particular drum on this particular day was able to go slightly higher and lower. \n\n" +
  "Notes at the top of the range may sound tight and dry, and those at the bottom somewhat flabby and indefinite in pitch.",
  16: "Performer: Eric Guinivan.\n\n" +
  "When only two timpani are used, the larger usually is this 28\" drum. \n\n" +
  "Although the range of any given drum may vary depending on a number of factors, the reliable standard range of the may be considered to be the perfect 5th indicated here. \n\n" +
  "This particular drum on this particular day was able to go slightly higher. \n\n" +
  "Notes at the top of the range may sound tight and dry, and those at the bottom somewhat flabby and indefinite in pitch.",
  37: "Performer: Eric Guinivan.\n\n" +
  "When only two timpani are used, the smaller usually is this 25\" drum. \n\n" +
  "Although the range of any given drum may vary depending on a number of factors, the reliable standard range of the may be considered to be the perfect 5th indicated here. \n\n" +
  "This particular drum on this particular day was able to go slightly higher. \n\n" +
  " Notes at the top of the range may sound tight and dry, and those at the bottom somewhat flabby and indefinite in pitch.",
  55: "Performer: Eric Guinivan.\n\n" +
  "When smallest timpano generally available is the 23\" drum, although a 21\" \"piccolo timpano\" is not uncommon. \n\n" +
  "Although the range of any given drum may vary depending on a number of factors, the reliable standard range of the may be considered to be the tritone indicated here. \n\n" +
  "This particular drum on this particular day was able to go slightly higher and lower. \n\n" +
  "Notes at the top of the range may sound tight and dry.",
  72: "The tuning pedal may be used to create audible glissandos after a note has been struck.",
  83: "A passage using more than four pitches can be played using the tuning pedals. \n\n" +
  "One strategy (demonstrated in this scale performance) is to keep a fixed tuning for the outer drums, allowing the performer to keep the right foot and left foot engaged with the middle drums.",
  85: "A passage using more than four pitches can be played using the tuning pedals. \n\n" +
  "One strategy (demonstrated in this scale performance) is to keep a fixed tuning for the outer drums, allowing the performer to keep the right foot and left foot engaged with the middle drums.",
  88: "A passage using more than four pitches can be played using the tuning pedals. \n\n" +
  "One strategy (demonstrated in this scale performance) is to keep a fixed tuning for the outer drums, allowing the performer to keep the right foot and left foot engaged with the middle drums.",
  91: "A passage using more than four pitches can be played using the tuning pedals. \n\n" +
  "One strategy (demonstrated in this scale performance) is to keep a fixed tuning for the outer drums, allowing the performer to keep the right foot and left foot engaged with the middle drums.",
  92: "A passage using more than four pitches can be played using the tuning pedals. \n\n" +
  "One strategy (demonstrated in this scale performance) is to keep a fixed tuning for the outer drums, allowing the performer to keep the right foot and left foot engaged with the middle drums.",
  95: "A passage using more than four pitches can be played using the tuning pedals. \n\n" +
  "One strategy (demonstrated in this scale performance) is to keep a fixed tuning for the outer drums, allowing the performer to keep the right foot and left foot engaged with the middle drums.",
  98: "A passage using more than four pitches can be played using the tuning pedals. \n\n" +
  "One strategy (demonstrated in this scale performance) is to keep a fixed tuning for the outer drums, allowing the performer to keep the right foot and left foot engaged with the middle drums.",
  103: "The mallets designated for the timpani are generally assumed to be a type of timpani mallet unless indicated otherwise. \n\n" +
  "Timpani mallets are specifically designed for these drums. \n\n" +
  " Medium felt is the most commonly used timpani mallet.",
  112: "The mallets designated for the timpani are generally assumed to be a type of timpani mallet unless indicated otherwise. \n\n" +
  "Timpani mallets are specifically designed for these drums. \n\n" +
  "Medium felt is the most commonly used timpani mallet.",
  118: "The mallets designated for the timpani are generally assumed to be a type of timpani mallet unless indicated otherwise. \n\n" +
  "Timpani mallets are specifically designed for these drums. \n\n" +
  "Medium felt is the most commonly used timpani mallet.",
  128: "The mallets designated for the timpani are generally assumed to be a type of timpani mallet unless indicated otherwise. \n\n" +
  "Timpani mallets are specifically designed for these drums. \n\n" +
  "Hard felt timpani mallets create a brighter, more percussive attack. \n\n" +
  "Not only is the material harder, but the size of the mallet head is smaller.",
  138: "The mallets designated for the timpani are generally assumed to be a type of timpani mallet unless indicated otherwise. \n\n" +
  " Timpani mallets are specifically designed for these drums. \n\n" +
  " Hard felt timpani mallets create a brighter, more percussive attack. \n\n" +
  " Not only is the material harder, but the size of the mallet head is smaller.",
  144: "The mallets designated for the timpani are generally assumed to be a type of timpani mallet unless indicated otherwise. \n\n" +
  "Timpani mallets are specifically designed for these drums. \n\n" +
  "Hard felt timpani mallets create a brighter, more percussive attack. \n\n" +
  "Not only is the material harder, but the size of the mallet head is smaller.",
  162: "The mallets designated for the timpani are generally assumed to be a type of timpani mallet unless indicated otherwise. \n\n" +
  "Timpani mallets are specifically designed for these drums. \n\n" +
  "Soft felt timpani mallets create a fuller, less percussive attack. \n\n" +
  "Not only is the material softer, but the size of the mallet head is larger.",
  174: "The mallets designated for the timpani are generally assumed to be a type of timpani mallet unless indicated otherwise. \n\n" +
  "Timpani mallets are specifically designed for these drums. \n\n" +
  "Soft felt timpani mallets create a fuller, less percussive attack. \n\n" +
  "Not only is the material softer, but the size of the mallet head is larger.",
  181: "The mallets designated for the timpani are generally assumed to be a type of timpani mallet unless indicated otherwise. \n\n" +
  "Timpani mallets are specifically designed for these drums. \n\n" +
  "Soft felt timpani mallets create a fuller, less percussive attack. \n\n" +
  "Not only is the material softer, but the size of the mallet head is larger. ",
}

const morePages = [["/dynamicRangeColorsTmp","Dynamic Range & Colors"]]

const gridHeights = [150, 70, 70, 70, 70, 90]
  const gridWidths = [[50, 220, 220],
                    [50, 220, 220],
                    [30, 130, 20, 55, 55, 20, 50, 40, 20],
                    [30, 120, 100, 200],
                    [30, 120, 100, 200],
                    [30, 120, 100, 200]]
const gridTimes = [[0, 16],
                  [37,55],
                  [72, 83, 85, 88, 91, 92, 95, 98],
                  [103, 112, 118],
                  [128, 138, 144],
                  [162, 174, 181]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Timpani"
        title="Drum Ranges & Mallets"
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
