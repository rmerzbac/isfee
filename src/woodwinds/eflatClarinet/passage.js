import React from 'react';
import Instrument from "./../../instrument";
import vid from './passage.mp4';
import score from './passage.png';

const instrumentText = {
  0: "In this passage from Berlioz's Symphonie Fantastique, grace notes and trills create a surreal brightness. The chirping clarity of the articulation of the E-flat clarinet makes an indelible impression.",
  6: "In this passage from Berlioz's Symphonie Fantastique, grace notes and trills create a surreal brightness. The chirping clarity of the articulation of the E-flat clarinet makes an indelible impression.",
  11: "In this passage from Berlioz's Symphonie Fantastique, grace notes and trills create a surreal brightness. The chirping clarity of the articulation of the E-flat clarinet makes an indelible impression.",
  16: "In this passage from Berlioz's Symphonie Fantastique, grace notes and trills create a surreal brightness. The chirping clarity of the articulation of the E-flat clarinet makes an indelible impression.",
  21: "In this passage from Berlioz's Symphonie Fantastique, grace notes and trills create a surreal brightness. The chirping clarity of the articulation of the E-flat clarinet makes an indelible impression.",
}

const morePages = [["/eflatClarinetR","Range"],
["/eflatClarinetRC","Register Colors"],
["/eflatClarinetAC","Articulation Colors"],
["/eflatClarinetAP","Another Passage"]]

const gridHeights = [100, 100, 90, 100, 110]
const gridWidths = [[35, 435],
                    [35, 435],
                    [35, 435],
                    [35, 435],
                    [35, 435]]
const gridTimes = [[0], [6], [11], [16], [21]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="E-flat Clarinet"
        title="Passage"
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
