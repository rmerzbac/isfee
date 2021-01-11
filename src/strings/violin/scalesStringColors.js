import React from 'react';
import Instrument from "./../../instrument";
import vid from './scalesStringColors.mp4';
import score from './scalesStringColors.png';

const instrumentText = {
  0:  "Performer: Veronique Mathieu\n\n" +
  "FOR GENERAL INFORMATION PERTAINING TO ALL OF THE STRING FAMILY, PLEASE STUDY THE CELLO WINDOWS.\n\n" +
  "Unlike large string instruments (see cello and contrabass for comparison), violin string length allows the performer to cover a perfect 4th comfortably, making it possible to play a scale using all four fingers on each of the strings.\n\n" +
  "Open strings are avoided except for the lowest open G.\n\n" +
  "(\"sul\" followed by a letter indicates the string to be played.)",
		 4:  "Performer: Veronique Mathieu\n\n" +
     "Unlike large string instruments (see cello and contrabass for comparison), violin string length allows the performer to cover a perfect 4th comfortably, making it possible to play a scale using all four fingers on each of the strings.\n\n" +
     "Open strings are avoided except for the lowest open G.",
		 7:  "Performer: Veronique Mathieu\n\n" +
     "Unlike large string instruments (see cello and contrabass for comparison), violin string length allows the performer to cover a perfect 4th comfortably, making it possible to play a scale using all four fingers on each of the strings.\n\n" +
     "Here the performer chooses to stay on the A string, shifting out of first position to play the D through G in 3rd position on the A string.",
		 12:  "Performer: Veronique Mathieu\n\n" +
     "As the performer shifts to higher and higher positions the notes and closer and closer together (and consequently, more difficult to play in tune and to \"find\" from a leap or as an entrance).\n\n" +
     "The pitch of the last note of this scale is a 4th below the top note of the piano keyboard.",
		 24:  "This faster scale demonstrates the violin's ability to project a smooth, clear legato over string crossings and shifts.",
		 31:  "Trills and tremolos are effective on the violin, becoming more awkward and less connected sounding at the larger intervals of a tritone and perfect fifth.",
		 35:  "Trills and tremolos are effective on the violin, becoming more awkward and less connected sounding at the larger intervals of a tritone and perfect fifth.",
		 39:  "Trills and tremolos are effective on the violin, becoming more awkward and less connected sounding at the larger intervals of a tritone and perfect fifth.",
		 45:  "When played in a higher position, these larger intervals require less of a stretch; however, intonation is less secure, and the string does not physically respond well to rapid changes in frequency.",
		 52:  "Each of the four strings on the violin has its own characteristic color.",
		 58:  "Each of the four strings on the violin has its own characteristic color.",
		 63:  "Each of the four strings on the violin has its own characteristic color.",
		 69:  "Each of the four strings on the violin has its own characteristic color.",
		 79:  "A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments.\n\n" +
     "Open strings are distinctly different in quality, partly because they cannot be played with vibrato. The open E string is particularly bright.",
		 82:  "A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments.",
		 86:  "A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments.",
		 89:  "A single phrase can be played with a variety of fingerings, changing color as it fits on different string assignments.",
  }

const gridHeights = [100, 80, 80,80, 80, 80]
const gridWidths = [[40, 80, 60, 120, 280],
                    [40, 420],
                    [40, 80, 80, 120, 120],
                    [40, 200, 200],
                    [40, 150, 280],
                    [40, 100, 100, 100, 100]]
const gridTimes = [[0, 4, 7, 12],
                  [24],
                  [31, 35, 39, 45],
                  [52, 58],
                  [63, 69],
                  [79, 82, 86, 89]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Violin"
        title="Scales, String Colors "
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
