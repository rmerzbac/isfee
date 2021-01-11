import React from 'react';
import Instrument from "./../../instrument";
import vid from './registerColorsBTbn.mp4'
import score from './registerColorsBTbn.png'

const instrumentText = {
  0: "Performer: Bryan Heath\n\n" +
    "The low range of the bass trombone is its most characteristic region. Articulation and dynamic contrasts are very responsive.",
  4: "Performer: Bryan Heath\n\n" +
    "The low range of the bass trombone is its most characteristic region. Articulation and dynamic contrasts are very responsive.",
  7: "Performer: Bryan Heath\n\n" +
    "The low range of the bass trombone is its most characteristic region. Articulation and dynamic contrasts are very responsive.",
  9: "Performer: Bryan Heath\n\n" +
    "The low range of the bass trombone is its most characteristic region. Articulation and dynamic contrasts are very responsive.",
  12: "Performer: Bryan Heath\n\n" +
    "The middle-low range is also a particularly effective region for the bass trombone.",
  15: "Performer: Bryan Heath\n\n" +
    "The middle-low range is also a particularly effective region for the bass trombone.",
  18: "Performer: Bryan Heath\n\n" +
    "The middle-low range is also a particularly effective region for the bass trombone.",
  21: "Performer: Bryan Heath\n\n" +
    "The middle-low range is also a particularly effective region for the bass trombone.",
  23: "Performer: Bryan Heath\n\n" +
    "The bass trombone is slightly fuller and richer than the tenor trombone in this range.",
  26: "Performer: Bryan Heath\n\n" +
    "The bass trombone is slightly fuller and richer than the tenor trombone in this range.",
  29: "Performer: Bryan Heath\n\n" +
    "The bass trombone is slightly fuller and richer than the tenor trombone in this range.",
  32: "Performer: Bryan Heath\n\n" +
    "The bass trombone is slightly fuller and richer than the tenor trombone in this range.	",
  34: "Performer: Bryan Heath\n\n" +
    "The bass trombone is darker, less brilliant less and responsive than the tenor trombone in this range.",
  37: "Performer: Bryan Heath\n\n" +
    "The bass trombone is darker, less brilliant less and responsive than the tenor trombone in this range.",
  39: "Performer: Bryan Heath\n\n" +
    "The bass trombone is darker, less brilliant less and responsive than the tenor trombone in this range.",
  42: "Performer: Bryan Heath\n\n" +
    "The bass trombone is darker, less brilliant less and responsive than the tenor trombone in this range.	",
  46: "Performer: Bryan Heath\n\n" +
    "Fast legato articulation on the bass trombone is possible from the bottom to the top of the bass clef."
}

const gridHeights = [120, 80, 96, 90, 90]
const gridWidths = [[40, 115, 110, 110, 145], [40, 115, 110, 110, 145], [40, 115, 110, 110, 145], [40, 115, 110, 110, 145], [40, 480]]
const gridTimes = [[0, 4, 7, 9], [12, 15, 18, 21], [23, 26, 29, 32], [34, 37, 39, 42], [46]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Bass Trombone"
        title="Register Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


