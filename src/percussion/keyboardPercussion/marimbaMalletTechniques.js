import React from 'react';
import Instrument from "./../../instrument";
import vid from './marimbaMalletTechniques.mp4'
import score from './marimbaMalletTechniques.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
    "The bars of the marimba become smaller and closer together as the pitch ascends. In the bass clef, an octave is the maximum distance that can be covered with two mallets in one hand.",
  9: "Performer: Eric Guinivan\n\n" +
    "Higher in the range of the instrument (the camera has shifted an octave, so the instrument appears quite a bit smaller!) 10ths can be covered in each hand with 2 mallets. Here a hard rubber mallet is used at the top of the right hand to make the top note clearer.",
  18: "Performer: Eric Guinivan\n\n" +
    "Parallel chords that maintain the same \"black-white\" configuration can be played with great facility.",
  23: "Performer: Eric Guinivan\n\n" +
    "If the \"black-white\" configuration is reversed, performing parallel chords is awkward.",
  28: "Performer: Eric Guinivan\n\n" +
    "An all-white passage with much crossing of the hands can be difficult and needs to be memorized to be played well.",
  33: "Performer: Eric Guinivan\n\n" +
    "This passage, which requires no hand crossing poses less difficulty.",
  38: "Performer: Eric Guinivan\n\n" +
    "Here the passage above has been re-written with the left hand given all \"black notes.\" This adds to the aural complexity, but actually makes the passage easier to play."
}

const gridHeights = [150, 65, 80, 70, 80, 70]
const gridWidths = [[40, 210, 270], [40, 480], [40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0, 9], [18], [23], [28], [33], [38]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Marimba"
        title="Mallet Techniques"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}
