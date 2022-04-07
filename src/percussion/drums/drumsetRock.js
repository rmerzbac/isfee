import React from 'react';
import Instrument from "./../../instrument";
import vid from './drumsetRock.mp4'
import score from './drumsetRock.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "The notational practice shown here is one that has become somewhat standard for drumset. Those instruments controlled by the foot are notated stems down. All the other activity is combined into one composite rhythm with the stems up. It is useful to give a staff key before the actual music, and also to indicate the name of an instrument as it enters.\n\n" +
  "This first passage is a composed excerpt, imitating a rock phrase.",
  6: "Performer: Eric Guinivan\n\n" +
  "The notational practice shown here is one that has become somewhat standard for drumset. Those instruments controlled by the foot are notated stems down. All the other activity is combined into one composite rhythm with the stems up. It is useful to give a staff key before the actual music, and also to indicate the name of an instrument as it enters.\n\n" +
  "This first passage is a composed excerpt, imitating a rock phrase. In this performance a crash cymbal substitutes for a splash cymbal.",
  13: "Performer: Eric Guinivan\n\n" +
  "The notational practice shown here is one that has become somewhat standard for drumset. Those instruments controlled by the foot are notated stems down. All the other activity is combined into one composite rhythm with the stems up. It is useful to give a staff key before the actual music, and also to indicate the name of an instrument as it enters.\n\n" +
  "This passage is a transcription of an improvised rock beat.\n\n" +
  "In this performance a crash cymbal substitutes for a splash cymbal.",
}

const morePages = [["/DrumsSBD","Snare & Bass Drums"],
["/DrumsDM","Drum Multi-set"],
["/DrumsBTTC","Bongos, Timbales, Toms & Congas"],
["/DrumsDS","Swing Drum Set"],
["/DrumsT","Tambourine"]]

const gridHeights = [300, 100, 100]
const gridWidths = [[40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [6], [13]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Drums"
        title="Rock Drum Set"
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
