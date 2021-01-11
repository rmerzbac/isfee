import React from 'react';
import Instrument from "./../../instrument";
import vid from './Harp 005 arpeggiationIdioms.mp4';
import score from './Harp 005 arpeggiationIdioms.png';

const instrumentText = {
  0: "This kind of idiomatic piano figuration can sound labored on the harp.",
  4: "\"Alberti bass\" chord patterns are not considered idiomatic to the harp, but can effectively produce an energetic drive.",
  8: "Arpeggiation using alternating hands is very idiomatic to the harp, allowing for a faster flow of notes and more time for the ringing of each string.",
  11: "Arpeggiation using alternating hands allows for faster patterns and more time for the ringing of each string.\n\n" +
    "The use of enharmonic equivalencies amplifies this ringing quality.",
  16: "\"Bisbigliando\" literally means \"whispering,\" but it has come to mean for harpists a free arpeggiation of the given pitches. It may be a quiet rustling, but can also grow to something more substantial, although mf is probably the loudest effective dynamic using this technique.",
  30: "This is a brief passage from the well-known harp cadenza in the \"Waltz of the Flowers\" from Tchaikovsky's \"Nutcracker.\" This notation is the way it appears in the score, but harpists rarely use this figuration of simultaneous 16th-notes in both hands.",
  37: "This is a brief passage from the well-known harp cadenza in the \"Waltz of the Flowers\" from Tchaikovsky's \"Nutcracker,\" notated as it is commonly played. The faster alternating hands distribution allows for a greater sense of color and flourish.",
}

const gridHeights = [120, 110, 140, 140];
const gridWidths = [[35, 80, 70, 130, 140], [35, 440], [35, 440], [35, 440]];
const gridTimes = [[0, 4, 8, 11], [16], [30], [37]];


export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Harp"
        title="Arpeggiation Idioms"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
