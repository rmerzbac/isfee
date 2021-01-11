import React from 'react';
import Instrument from "./../../instrument";
import vid from './naturalHarmonics.mp4';
import score from './naturalHarmonics.png';

const instrumentText = {
  0: "Performer: Makito Nishiya. \n\n" +
    "All the pitches in this section are played on the G string. \n\n Open string: The entire length of the string from nut to bridge is allowed to vibrate freely.",
    6: "Lightly touching the string halfway between the nut and bridge forces the string to vibrate in two sections, each one half the total string length. \n\n The sound produced is twice the frequency of the open string, sounding an octave higher than the open string.",
    11: "Pressing the string down against the fingerboard in this same place allows only half the string to vibrate.  \n\n This sound is also twice the frequency of the open string, the 2nd partial, sounding an octave higher than the open string.  \n\n Adding vibrato emphasizes the difference in tone quality between the full-bodied stopped tone and the airy, non-vibrato sound of a natural harmonic.",
    18: "The open G string.",
    23: "Lightly touching the string a third of its length from the bridge forces the string to vibrate in 3 sections, each 1/3 the total string length.The sound produced is 3 times the frequency of the open string, the 3rd partial, sounding an octave and a fifth higher than the open string.",
		28: "Lightly touching the string two-thirds of its length from the bridge also forces the string to vibrate in 3 sections, each 1/3 the total string length.The sound produced is the same as the previous note, 3 times the frequency of the open string, the 3rd partial, sounding an octave and a fifth higher than the open string.",
		34: "Pressing down in this same place allows only 2/3 of the string to vibrate. Since this length is twice that of 3rd partial, it sounds an octave lower than the 3rd partial, a perfect fifth above the open string.",
    40: "The open G string.",
		46: "Lightly touching the string 1/4 of its length from the bridge forces the string to vibrate in 4 sections, each 1/4 of the total string length.  \n\n The sound produced is 4 times the frequency of the open string, the 4th partial, sounding 2 octaves higher than the open string.The 4th partial sounds an octave higher than the 2nd partial.",
		51: "Lightly touching the string 2/4 of its length from the bridge is the same as touching at half the strength length, sounding the 2nd partial. There is no 4th partial sounding at 2/4 the string's length.",
		55: "Lightly touching the string 3/4 of its length from the bridge forces the string to vibrate in 4 sections, each 1/4 of the total string length.  \n\n The sound produced is 4 times the frequency of the open string, the 4th partial, sounding 2 octaves higher than the open string.",
		60: "Pressing down in this same place allows only 3/4 of the string to vibrate. Since this length is 3 times that of the 4th partial, it sounds an octave and a fifth lower than the 4th partial, a perfect fourth above the open string.",
    67: "The open G string.",
		72: "Lightly touching the string 1/5 of its length from the bridge forces the string to vibrate in 5 sections, each 1/5 of the total string length. \n\n The sound produced is 5 times the frequency of the open string, the 5th partial, sounding 2 octaves and a major third higher than the open string.",
		77: "Lightly touching the string 2/5 of its length from the bridge also forces the string to vibrate in 5 sections, each 1/5 of the total string length.  \n\n The sound produced is 5 times the frequency of the open string, the 5th partial, sounding 2 octaves and a major third higher than the open string.",
		82: "Pressing down in this same place allows only 2/5 of the string to vibrate. Since this length is 2 times that of the 5th partial, it sounds an octave lower than the 5th partial, an octave and a major third higher than the open string.",
		87: "Lightly touching the string 3/5 of its length from the bridge also forces the string to vibrate in 5 sections, each 1/5 of the total string length. \n\n The sound produced is 5 times the frequency of the open string, the 5th partial, sounding 2 octaves and a major third higher than the open string.",
		91: "Pressing down in this same place allows only 3/5 of the string to vibrate. Since this length is 3 times that of the 5th partial, it sounds an octave and a perfect fifth lower than the 5th partial, a major sixth higher than the open string.",
		96: "Lightly touching the string 4/5 of its length from the bridge also forces the string to vibrate in 5 sections, each 1/5 of the total string length.  \n\n The sound produced is 5 times the frequency of the open string, the 5th partial, sounding 2 octaves and a major third higher than the open string.",
		100: "Pressing down in this same place allows only 4/5 of the string to vibrate. Since this length is 4 times that of the 5th partial, it sounds 2 octaves lower than the 5th partial, a major third higher than the open string. ",
		106: "The open G string.",
		111: "Lightly touching the string 1/6 of its length from the bridge forces the string to vibrate in 6 sections, each 1/6 of the total string length. \n\n The sound produced is 6 times the frequency of the open string, the 6th partial, sounding 2 octaves and a perfect fifth higher than the open string. \n\n The 6th partial sounds an octave higher than the 3rd partial. ",
    116: "Lightly touching the string 2/6 of its length from the bridge is the same as touching at 1/3 the strength length, sounding the 3rd partial. \n\n There is no 6th partial sounding at 2/6 the string's length.",
    121: "Lightly touching the string 3/6 of its length from the bridge is the same as touching at half the strength length, sounding the 2nd partial. \n\n There is no 6th partial sounding at 3/6 the string's length.",
		126: "Lightly touching the string 4/6 of its length from the bridge is the same as touching at 1/3 the strength length, sounding the 3rd partial. There is no 6th partial sounding at 4/6 the string's length.",
		131: "Lightly touching the string 5/6 of its length from the bridge forces the string to vibrate in 6 sections, each 1/6 of the total string length. \n\n The sound produced is 6 times the frequency of the open string, the 6th partial, sounding 2 octaves and a perfect fifth higher than the open string. ",
		136: "Pressing down in this same place allows only 5/6 of the string to vibrate. \n\n Since this length is 5 times that of the 6th partial, it sounds 2 octaves and a major third lower than the 5th partial, a minor third higher than the open string.",
}

const gridHeights = [110, 90, 80, 110, 110]
const gridWidths = [[40, 130, 130, 130],
                    [40, 100, 100, 100, 100],
                    [40, 80, 80, 80, 80, 80],
                    [40, 50, 50, 45, 45, 45, 45, 45, 45],
                    [40, 50, 50, 50, 70, 50, 50, 70]]
const gridTimes = [[0, 6, 11],
                  [18, 23, 28, 34],
                  [40, 46, 51, 55, 60],
                  [67, 72, 77, 82, 87, 91, 96, 100],
                  [106, 111, 116, 121, 126, 131, 136]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Cello"
        title="Natural Harmonics"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
