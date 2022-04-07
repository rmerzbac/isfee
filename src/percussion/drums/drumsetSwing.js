import React from 'react';
import Instrument from "./../../instrument";
import vid from './drumsetSwing.mp4'
import score from './drumsetSwing.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
    "The notational practice shown here is one that has become somewhat standard for drumset. Those instruments controlled by the foot are notated stems down. All the other activity is combined into one composite rhythm with the stems up. It is useful to give a staff key before the actual music, and also to indicate the name of an instrument as it enters.\n\n" +
    "This passage is a transcription of an improvised swing pattern. In performance, all dotted rhythms are swung -- \"quantized\" to the nearest triplet eighth-note.",
  4: "Performer: Eric Guinivan\n\n" +
    "The notational practice shown here is one that has become somewhat standard for drumset. Those instruments controlled by the foot are notated stems down. All the other activity is combined into one composite rhythm with the stems up. It is useful to give a staff key before the actual music, and also to indicate the name of an instrument as it enters.\n\n" +
    "This passage is a transcription of an improvised swing pattern. In performance, all dotted rhythms are swung -- \"quantized\" to the nearest triplet eighth-note.",
  8: "Performer: Eric Guinivan\n\n" +
    "The notational practice shown here is one that has become somewhat standard for drumset. Those instruments controlled by the foot are notated stems down. All the other activity is combined into one composite rhythm with the stems up. It is useful to give a staff key before the actual music, and also to indicate the name of an instrument as it enters.\n\n" +
    "This passage is a transcription of an improvised swing pattern. In performance, all dotted rhythms are swung -- \"quantized\" to the nearest triplet eighth-note.",
  11: "Performer: Eric Guinivan\n\n" +
    "The notational practice shown here is one that has become somewhat standard for drumset. Those instruments controlled by the foot are notated stems down. All the other activity is combined into one composite rhythm with the stems up. It is useful to give a staff key before the actual music, and also to indicate the name of an instrument as it enters.\n\n" +
    "In this performance a crash cymbal substitutes for a splash cymbal.",
}

const morePages = [["/DrumsSBD","Snare & Bass Drums"],
["/DrumsDM","Drum Multi-set"],
["/DrumsBTTC","Bongos, Timbales, Toms & Congas"],
["/DrumsDR","Rock Drum Set"],
["/DrumsT","Tambourine"]]

const gridHeights = [250, 70, 80, 110]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [4], [8], [11]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Drums"
        title="Swing Drum Set"
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
