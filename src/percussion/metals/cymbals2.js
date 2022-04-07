import React from 'react';
import Instrument from "./../../instrument";
import vid from './cymbals2.mp4';
import score from './cymbals2.png';

const instrumentText = {
  0: "The foot pedal attached to the hi-hat cymbal provides an alternative attack as well as a damping mechanism. \n\n" +
" The notation adopted here shows the pedal position by indicating open (o) and closed (+). \n\n" +
" All notes not preceded by a tie are articulated by the sticks. \n\n" +
" Notes preceded by a tie are articulated by the closing of the foot mechanism.",
13: "A sizzle cymbal has holes filled with rivets around its edge. \n\n" +
" These will vibrate and \"sizzle\" as long as the sound lasts.",
22: "A sizzle cymbal has holes filled with rivets around its edge. \n\n" +
" These will vibrate and \"sizzle\" as long as the sound lasts.",
33: "A splash cymbal is a smaller cymbal designed to have a faster decay than a standard suspended cymbal.",
37: "A splash cymbal is a smaller cymbal designed to have a faster decay than a standard suspended cymbal.",
40: "Chinese cymbals have inverted edges. \n\n" +
" They have a noisier, less smooth distribution of the sound spectrum",
58: "Chinese cymbals have inverted edges. \n\n" +
" They have a noisier, less smooth distribution of the sound spectrum",
70: "Chinese cymbals have inverted edges. \n\n" +
" They have a noisier, less smooth distribution of the sound spectrum",
82: "Chinese opera gongs usually are found in pairs, one with a descending glissando attack and the other with an ascending attack. \n\n" +
" They are most effective when play loudly with hard mallets.",
101: "Chinese opera gongs usually are found in pairs, one with a descending glissando attack and the other with an ascending attack. \n\n" +
" They are most effective when play loudly with hard mallets.",
109: "Metal plates come in a variety of sizes.",
123: "Metal plates come in a variety of sizes.",
135: "Metal plates come in a variety of sizes.",
146: "A spring coil is an example of \"found object\" or \"junkyard\" percussion. \n\n" +
" A more common example (not shown here) are brake drums.",
155: "Finger cymbals come in pairs of a variety of sizes. \n\n" +
" To avoid a definite pitch (such as heard here) a pair with different pitches should be used.",
}

const morePages = [["/cymbals1","Cymbals 1"],
["/tamtamGongs","Tamtams, Gongs"],
["/trianglesCowbell","Triangles, Cowbells"],
["/windChimesTrees","Wind Chimes, Trees"]]

const gridHeights = [110, 70, 90, 70, 90, 90]
const gridWidths = [[40, 450],
                    [30, 130, 270],
                    [30, 100, 60, 160, 40, 40],
                    [30, 220, 200],
                    [30, 100, 320],
                    [30, 190, 120, 120]]
const gridTimes = [[0],
                  [13, 22],
                  [33, 37, 40, 58, 70],
                  [82, 101],
                  [109, 123],
                  [135, 146, 155]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Metals"
        title="Cymbals 2"
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
