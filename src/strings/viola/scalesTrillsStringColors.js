import React from 'react';
import Instrument from "./../../instrument";
import vid from './scalesTrillsStringColors.mp4';
import score from './scalesTrillsStringColors.png';

const instrumentText = {
  0:  "Performer: Kim Hellgren\n\n" +
  "FOR GENERAL INFORMATION PERTAINING TO ALL OF THE STRING FAMILY, PLEASE STUDY THE CELLO WINDOWS.\n\n" +
  "The viola is slightly larger than the violin; this difference makes the stretch to cover a perfect 4th in first position a bit less comfortable.\n\n" +
  "Its open strings are darker and deeper toned than the violin's. The scale fingering here uses the open C, G and D strings, but avoids the open A..\n\n" +
  "(\"sul\" followed by a letter indicates the string to be played.)",
		 10:  "Performer: Kim Hellgren\n\n" +
     "Here the performer chooses to stay on the D string, shifting out of first position to play the G through C in 3rd position on the D strings.\n\n" +
     "In third position four scale degrees can be comfortably covered by four fingers.",
		 15:  "Performer: Kim Hellgren\n\n" +
     "Moving to the A string for the third octave, this fingering employs shifts for each pair of notes, leading to the top of the range.",
     24:  "The high octave shown here is rarely used in orchestral writing.\n\n" +
     " The viola is less ergonomically constructed for high playing than the violin; the body of the instrument is wider and makes moving to the top of the fingerboard more awkward. (Note the left hand position here compared with the extreme high range of the violin.) Nevertheless, in the hands of an accomplished performer this range can be played with elegance.",
     34:  "This faster scale demonstrates the viola's ability to project a smooth, clear legato over string crossings and shifts.",
     38:  "This faster scale demonstrates the viola's ability to project a smooth, clear legato over string crossings and shifts.",
		 43:  "Trills and tremolos are effective on the viola, becoming more awkward and less connected sounding at the larger intervals of a tritone and perfect fifth.",
		 54:  "Trills and tremolos are effective on the viola, becoming more awkward and less connected sounding at the larger intervals of a tritone and perfect fifth.",
		 59:  "These tremolos are played as bow-tremolos, double stops articulated by rocking the bow over the two strings",
		 69:  "When played in a higher position, these larger intervals require less of a stretch; however, intonation is less secure, and the string does not physically respond well to rapid changes in frequency.",
		 79:  "Each of the four strings on the viola has its own characteristic color. The viola's C string is particularly distinctive.",
		 88:  "Each of the four strings on the viola has its own characteristic color.",
		 97:  "Each of the four strings on the viola has its own characteristic color.",
     105:  "Each of the four strings on the viola has its own characteristic color.",
     112:  "This range of the viola, more than an octave above the highest open string, is generally reserved for solo works..",
		 118:  "A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments.\n\n" +
     "Open strings are distinctly different in quality, partly because they cannot be played with vibrato.",
		 123:  "A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments.",
		 128:  "A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments.",
		 132:  "A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments.",
  }

const gridHeights = [80, 70, 80, 80, 90, 80]
const gridWidths = [[40, 170, 100, 200, 200],
                    [40, 230, 210],
                    [40, 150, 80, 120, 120],
                    [40, 200, 200],
                    [40, 140, 180, 140],
                    [40, 100, 100, 100, 100]]
const gridTimes = [[0, 10, 15, 24],
                  [34, 38],
                  [43, 54, 59, 69],
                  [79, 88],
                  [97, 105, 112],
                  [118, 123, 128, 132]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Viola"
        title="Scales, Trills & String Colors "
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
