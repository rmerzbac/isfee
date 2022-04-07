import React from 'react';
import Instrument from "./../../instrument";
import vid from './pizzicato.mp4';
import score from './pizzicato.png';

const instrumentText = {
  0: "Single pizzicato notes are usually all played with the index finger of the right hand. Most orchestral string players have not developed a multi-finger pizzicato technique. If there is time to set the bow down, pizzicato playing can better controlled. ",
		11: "The longer the string, the more resonant the pizzicato will be, so pitches in high positions can sound choked. C-string pizzicatos are the most full-bodied, and the open string will ring for a long time if not stopped. ",
		20: "Double-stop pizzicatos are usually played with the index and middle finger.",
		31: "Pizzicato triple and quadruple stops are usually arpeggiated with one finger. If the direction is upward the thumb can strum across the strings. (The direction of the strum should be indicated.)",
		39: "Triple and quadruple stops are usually arpeggiated with one finger. If the direction is upward the thumb can strum across the strings. (The direction of the strum should be indicated.)",
		47: "Downward strums are played with the index finger.",
		54: "A fast alternating strum can be played by the thumb, but this is possible only if the bow has been set aside.",
		60: "Slurred pizzicatos project better on the cello than on the violin and viola. Notice, however, how quickly the sound decays. The pitches of the slur must be on the same string.",
		67: "Slurred pizzicatos project better on the cello than on the violin and viola. Notice, however, how quickly the sound decays. The pitches of the slur must be on the same string. ",
		76: "Snap pizzicato, also called Bartok pizz., is created by pulling the string away from the fingerboard with two fingers and releasing it so that it snaps back against the fingerboard.",
		81: "Snap pizzicato, also called Bartok pizz., is created by pulling the string away from the fingerboard with two fingers and releasing it so that it snaps back against the fingerboard.",
		88: "It is possible to pluck open strings with the left hand while stopping another string with the left hand and playing arco.",
}

const morePages = [["/celloSF","Scale Fingering"],
["/celloNH","Natural Harmonics"],
["/celloAH","Artificial Harmonics"],
["/celloMS","Multiple Stops"],
["/celloLHI","Left Hand Inflections"],
["/celloRHI","Right Hand Inflections"],
["/bowDirectionsSpeedPressure","Bow Directions, Speed and Pressure"],
["/moreBowColors","More Bow Colors"]]

const gridHeights = [80, 60, 70, 70, 70, 70, 70]
const gridWidths = [[40, 400],
                    [40, 400],
                    [40, 200, 200],
                    [40, 140, 140, 140],
                    [40, 160, 240],
                    [40, 200, 200],
                    [40, 410]]
const gridTimes = [[0],
                  [11],
                  [20, 31],
                  [39, 47, 54],
                  [60, 67],
                  [76, 81],
                  [88]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Cello"
        title="Pizzicato"
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
