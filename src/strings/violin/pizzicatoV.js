import React from 'react';
import Instrument from "./../../instrument";
import vid from './pizzicatoV.mp4';
import score from './pizzicatoV.png';

const instrumentText = {
  0:  "Single pizzicato notes are usually all played with the index finger of the right hand. Most orchestral string players have not developed a multi-finger pizzicato technique. If there is time to set the bow down, pizzicato playing can better controlled.",
		 6:  "Single pizzicato notes are usually all played with the index finger of the right hand. Most orchestral string players have not developed a multi-finger pizzicato technique. If there is time to set the bow down, pizzicato playing can better controlled.",
		 8:  "Single pizzicato notes are usually all played with the index finger of the right hand. Most orchestral string players have not developed a multi-finger pizzicato technique. If there is time to set the bow down, pizzicato playing can better controlled.",
		 12:  "Double-stop pizzicatos may be played with the index and middle finger, or (as in this performance) as a fast strum (if the strings are adjacent).",
		 18:  "Pizzicato triple and quadruple stops are usually arpeggiated with one finger. If the direction is upward the thumb can strum across the strings. (The direction of the strum should be indicated.)",
		 26:  "Slurred pizzicatos are less effective on the violin and viola than on the cello and contrabass. The pitches of the slur must be on the same string. Notice that the sound quickly decays, except when the second note is the open E string.",
		 32:  "Glissando pizzicato is an interesting but very subtle gesture.",
		 38:  "Snap pizzicato, also called Bartok pizz., is created by pulling the string away from the fingerboard and releasing it so that it snaps back against the fingerboard.  Although it is sometimes done by grabbing the string between the thumb and finger, here it is effectively executed with a one-finger technique.",
		 49:  "It is possible to pluck open strings with the left hand while stopping another string with the left hand and playing arco.",
  }

const gridHeights = [100, 80, 90, 70, 90, 90]
const gridWidths = [[40, 400],
                    [40, 400],
                    [40, 170, 300],
                    [40, 210, 220],
                    [40, 440],
                    [40, 440]]
const gridTimes = [[0],
                  [6],
                  [12, 18],
                  [26, 32],
                  [38],
                  [49]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Violin"
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
