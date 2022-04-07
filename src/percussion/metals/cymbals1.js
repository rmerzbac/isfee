import React from 'react';
import Instrument from "./../../instrument";
import vid from './cymbals1.mp4';
import score from './cymbals1.png';

const instrumentText = {
  0: "Performer: Eric Guinivan. \n\n" +
"\"Clash cymbals\" (also known as \"crash cymbals,\" a name which unfortunately also applies to a kind of drumset cymbal) come in pairs of different sizes. \n\n" +
" The quality of sound can be greatly varied by the kind of attack, the dynamic level, and the duration of the sound, which is damped by holding the cymbals against the chest, here indicated by a damping symbol.",
7: "Performer: Eric Guinivan. \n\n" +
"\"Clash cymbals\" (also known as \"crash cymbals,\" a name which unfortunately also applies to a kind of drumset cymbal) come in pairs of different sizes. \n\n" +
" The quality of sound can be greatly varied by the kind of attack, the dynamic level, and the duration of the sound, which is damped by holding the cymbals against the chest; here this is indicated by the staccato mark.",
9: "Performer: Eric Guinivan. \n\n" +
"\"Clash cymbals\" (also known as \"crash cymbals,\" a name which unfortunately also applies to a kind of drumset cymbal) come in pairs of different sizes. \n\n" +
" The quality of sound can be greatly varied by the kind of attack, the dynamic level, and the duration of the sound, which is damped by holding the cymbals against the chest.",
13: "Performer: Eric Guinivan. \n\n" +
"\"Clash cymbals\" (also known as \"crash cymbals,\" a name which unfortunately also applies to a kind of drumset cymbal) come in pairs of different sizes. \n\n" +
"The term \"strisciato\" indicates that the cymbals are to be rubbed together.",
19: "Fast rhythmic patterns on clash cymbals are not particularly idiomatic, as this passage from Rimsky-Korsakov's version of Mussorgsky's \"A Night on Bald Mountain\" demonstrates.",
29: "Suspended cymbals are available in a great variety of sizes. \n\n" +
" There is no \"default\" mallet for suspended cymbals; the mallet must be designated, since there is an immense variety in attack and color created by different mallets.",
43: "Suspended cymbals are available in a great variety of sizes. \n\n" +
" There is no \"default\" mallet for suspended cymbals; the mallet must be designated, since there is an immense variety in attack and color created by different mallets.",
58: "Suspended cymbals are available in a great variety of sizes. \n\n" +
" There is no \"default\" mallet for suspended cymbals; the mallet must be designated, since there is an immense variety in attack and color created by different mallets. \n\n" +
"Rolls are common and very effective on suspended cymbals.",
66: "Suspended cymbals are available in a great variety of sizes. \n\n" +
" There is no \"default\" mallet for suspended cymbals; the mallet must be designated, since there is an immense variety in attack and color created by different mallets. \n\n" +
"Rolls are common and very effective on suspended cymbals.",
76: "Suspended cymbals are available in a great variety of sizes. \n\n" +
" There is no \"default\" mallet for suspended cymbals; the mallet must be designated, since there is an immense variety in attack and color created by different mallets. \n\n" +
"Rolls are common and very effective on suspended cymbals. \n\n" +
"Here the staccato mark indicates an immediate choke of the sound.",
82: "Suspended cymbals are usually struck in the middle area between the dome and the edge. \n\n" +
" Different attack and sustain colors can be specified by indicating alternative striking points.",
92: "Suspended cymbals are usually struck in the middle area between the dome and the edge. \n\n" +
" Different attack and sustain colors can be specified by indicating alternative striking points.",
102: "Rhymic patterns can be play on suspended cymbals with a moderate degree of definition.",
114: "A free hand can be used to provide a variety of damping nuances.",
131: "Wire brushes can be used for rolls, rhythmic patterns, and to gently stroke the cymbal.",
151: "A metal object, such as a triangle beater or the handle of a wire brush, will make colorful metallic grating sound.",
158: "When bowed with a bass bow, suspended cymbals create a marvelous (but almost completely unpredictable) variety of pitches and colors. ",


}

const morePages = [["/cymbals2","Cymbals 2"],
["/tamtamGongs","Tamtams, Gongs"],
["/trianglesCowbell","Triangles, Cowbells"],
["/windChimesTrees","Wind Chimes, Trees"]]

const gridHeights = [65, 55, 90, 60, 55, 55, 55, 55];
const gridWidths = [[30, 110, 110, 110, 110],
                  [30, 420],
                  [30, 100, 100, 60, 70, 70],
                  [30, 210, 210],
                  [30, 420],
                  [30, 420],
                  [30, 380, 40],
                  [30, 420]]
const gridTimes = [[0, 7, 9, 13],
                [19],
                [29, 43, 58, 66, 76],
                [82, 92],
                [102],
                [114],
                [131, 151],
                [158]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Metals"
        title="Cymbals 1"
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
