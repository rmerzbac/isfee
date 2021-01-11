import React from 'react';
import Instrument from "./../../instrument";
import vid from './pizzicatoB.mp4';
import score from './pizzicatoB.png';

const instrumentText = {
  0: "Single pizzicato notes are usually all played with the second and third fingers of the right hand. \n\n" +
"Most orchestral string players have not developed a multi-finger pizzicato technique. If there is time to set the bow down, pizzicato playing can better controlled.",
		9: "Single pizzicato notes are usually all played with the second and third fingers of the right hand. \n\n" +
"Most orchestral string players have not developed a multi-finger pizzicato technique. If there is time to set the bow down, pizzicato playing can better controlled.",
		12: "Single pizzicato notes are usually all played with the second and third fingers of the right hand. \n\n" +
"Most orchestral string players have not developed a multi-finger pizzicato technique. If there is time to set the bow down, pizzicato playing can better controlled.",
		18: "Double-stop pizzicatos are played with the index and middle finger.",
		25: "Pizzicato triple and quadruple stops are usually arpeggiated with one finger. If the direction is upward the thumb can strum across the strings. \n\n" +
"The direction of the strum should be indicated.",
		32: "Slurred pizzicatos are more effective on the cello and contrabass than on the violin and viola. \n\n" +
"The pitches of the slur must be on the same string.",
		36: "Slurred pizzicatos are more effective on the cello and contrabass than on the violin and viola. The pitches of the slur must be on the same string.",
		42: "Snap pizzicato, also called Bartok pizz., is created by pulling the string away from the fingerboard and releasing it so that it snaps back against the fingerboard.  \n\n" +
"Although it is sometimes done by grabbing the string between the thumb and finger, here it is effectively executed with a one-finger technique.",
		51: "It is possible to pluck open strings with the left hand while stopping another string with the left hand and playing arco.",
  }

const gridHeights = [120, 80, 80, 80, 80]
const gridWidths = [[40, 400],
                    [40, 200, 200],
                    [40, 150, 280],
                    [40, 210, 220],
                    [40, 320, 100]]
const gridTimes = [[0],
                  [9, 12],
                  [18, 25],
                  [32, 36],
                  [42, 51]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contrabass"
        title="Pizzicato"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
