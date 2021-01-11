import React from 'react';
import Instrument from "./../../instrument.js";
import vid from './rangeRegisters.mp4';
import score from './rangeRegisters.png';

const instrumentText = {
  0: "Performer: Qiao Zhang.\n\n" +
    "The tone color of the alto flute is most distinctive in its low range, where it possesses even more of the dark richness one hears in the flute's lowest range. Some of that darkness is still heard in the middle register. The highest notes sound rather pale in comparison the the same pitches heard on the flute.",
  7: "Performer: Qiao Zhang.\n\n" +
    "The tone color of the alto flute is most distinctive in its low range, where it possesses even more of the dark richness one hears in the flute's lowest range. Some of that darkness is still heard in the middle register. The highest notes sound rather pale in comparison the the same pitches heard on the flute.",
  13: "Performer: Qiao Zhang.\n\n" +
    "The tone color of the alto flute is most distinctive in its low range, where it possesses even more of the dark richness one hears in the flute's lowest range. Some of that darkness is still heard in the middle register. The highest notes sound rather pale in comparison the the same pitches heard on the flute.",
  18: "Performer: Qiao Zhang.\n\n" +
    "The tone color of the alto flute is most distinctive in its low range, where it possesses even more of the dark richness one hears in the flute's lowest range. Some of that darkness is still heard in the middle register. \n\n" +
    "It takes more air to play in the lowest register of the alto flute than for other members of the flute family.",
  30: "Performer: Qiao Zhang.\n\n" +
    "The tone color of the alto flute is most distinctive in its low range, where it possesses even more of the dark richness one hears in the flute's lowest range. Some of that darkness is still heard in the middle register. The highest notes sound rather pale in comparison the the same pitches heard on the flute."
}

const gridHeights = [240, 175]
const gridWidths = [[50, 170, 145, 80],
                    [55, 185, 180]]
const gridTimes = [[0, 7, 13],
                  [18, 30]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Alto Flute"
        title="Range & Registers"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
