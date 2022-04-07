import React from 'react';
import Instrument from "./../../instrument";
import vid from './windChimesTrees.mp4';
import score from './windChimesTrees.png';

const instrumentText = {
  0: "Some of the most beautiful percussion instruments are home-made constructions. \n\n" +
"Wind chimes are generally a very delicate sound.",
17: "The mark tree is not really a tree but a well-organized set of wind chimes. \n\n" +
" It is usually stroked to imitate the sound of a bell tree.",
26: "The mark tree is not really a tree but a well-organized set of wind chimes. \n\n" +
"An alternative mark tree sound is created by clasping the chimes together.",
35: "The bell tree is almost always played with a brass mallet. \n\n" +
" The notation indicates the direction of the pitch, which is opposite that of the mallet",
42: "The bell tree is almost always played with a brass mallet",
54: "Sleigh bells can create a very precise rhythm. \n\n" +
"It is suggested that a good bit time be given for the percussionist to pick up and put down instruments like sleigh bells to avoid extraneous noise.",
62: "Shaken sleigh bells can create a splash of color. \n\n" +
"It is suggested that a good bit time be given for the percussionist to pick up and put down instruments like sleigh bells to avoid extraneous noise.",
}

const morePages = [["/cymbals1","Cymbals 1"],
["/cymbals2","Cymbals 2"],
["/tamtamGongs","Tamtams, Gongs"],
["/trianglesCowbell","Triangles, Cowbells"]]

const gridHeights = [120, 100, 130]
const gridWidths = [[30, 150, 125, 75],
                    [30, 200, 200],
                    [30, 300, 120]]
const gridTimes = [[0, 17, 26],
                  [35, 42],
                  [54, 62]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Metals"
        title="Wind Chimes & Trees"
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
