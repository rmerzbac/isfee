import React from 'react';
import Instrument from "./../../instrument";
import vid from './passagesHn.mp4';
import score from './passagesHn.png';

const instrumentText = {

  0: "Performer: Elizabeth Pfaffle \n\n" +
  "This is the opening horn solo from Richard Strauss's \"Till Eulenspiegel\". \n\n" +
  " The wide range and mixed articulations give it a robust playfulness. \n\n",
  6: "Performer: Elizabeth Pfaffle \n\n" +
  "This is the opening horn solo from Richard Strauss's \"Till Eulenspiegel\". \n\n" +
  " The wide range and mixed articulations give it a robust playfulness. \n\n" +
  " bass clef notation is used here, but in Strauss's traditional score and part the bass clef notes are written an octave lower. \n\n",
  10: "Performer: Elizabeth Pfaffle \n\n" +
  "This passage is also from Strauss's \"Till Eulenspiegel\". \n\n" +
  " It is the first horn part of a section scored for 4 horns playing 4-note chords, sharing the same rhythm and contour. \n\n" +
  "  It displays the effectiveness of fast passagework for the horn. ",
  15: "Performer: Elizabeth Pfaffle \n\n" +
  "This passage is also from Strauss's \"Till Eulenspiegel\". \n\n" +
  " It is the first horn part of a section scored for 4 horns playing 4-note chords, sharing the same rhythm and contour. \n\n" +
  "  It displays the effectiveness of fast passagework for the horn. \n\n",
  20: "Performer: Elizabeth Pfaffle \n\n" +
  "This is the second phrase of the horn solo from the second movement of Tchaikovsky's Fifth Symphony. \n\n" +
  "  In spite of its expansively lyrical shape, its written range lies entirely within the treble staff. \n\n" +
  "  The variations of color, dynamics, and articulation that Tchaikovsky crafts into this solo are given an ideal register for assured projection. \n\n"
}

const morePages = [["/HornHS","Harmonic Series"],
["/HornAC","Articulation Colors"],
["/HornSVT","Scales, Valves, & Triggers"],
["/HornST","Skips & Trills "],
["/HornTVC","Tonguing, & Vibrato Colors"],
["/HornSM","Stopping & Muting"],
["/HornNH","Natural Horn"],
["/HornBH","Baroque Horn"]]

const gridHeights = [120, 100, 100, 90, 130]
const gridWidths = [[40, 480],[40, 480],[40, 480],[40, 480], [40, 480]]
const gridTimes = [[0], [6], [10], [15], [20]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Horn"
        title="Passages"
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
