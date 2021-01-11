import React from 'react';
import Instrument from "./../../instrument";
import vid from './passages.mp4';
import score from './passages.png';

const instrumentText = {
  0:  "This passage from Paganini's Caprice #24 in A minor effectively combines the open E string (and one open A) with thirds and 5ths to present powerful triple-stop chords. Note how the second chord uses the open E string doubled with the same page stopped on the A string.",
		 6:  "This passage is the compelling opening to Ysaye's transcription of Saint-Saens Caprice (after a Study in Form of a Waltz).  \n\n" +
     "The use of the G-string for the first 4 measures gives the opening gesture added depth and virtuoso flair. ",
		 9:  "This passage is the compelling opening to Ysaye's transcription of Saint-Saens Caprice (after a Study in Form of a Waltz).  \n\n" +
     "The use of the G-string for the first 4 measures gives the opening gesture added depth and virtuoso flair. \n\n" +
     "The up-bow lift off the high G harmonic (three-quarters of the way up the G string) catches the eye and the ear.",
		 13:  "This passage is the compelling opening to Ysaye's transcription of Saint-Saens Caprice (after a Study in the Form of a Waltz).  \n\n" +
     "In the second phrase, the open A string creates a pedal tone, adding substantial body to go along with the incisive E-string melody.",

   }

 const gridHeights = [120, 120, 120, 120]
 const gridWidths = [[40, 480],
                    [40, 480],
                    [40, 480],
                    [40, 480]]
 const gridTimes = [[0],
                   [6],
                   [9],
                   [13]]
 export default function MakePage() {
   return (
     <div>
       <Instrument
         instrument="Violin"
         title="Passages"
         vid={vid}
         instrumentText={instrumentText}
         score={score}
         gridHeights={gridHeights}
         gridWidths={gridWidths}
         gridTimes={gridTimes}/>
     </div>
   );
 }
