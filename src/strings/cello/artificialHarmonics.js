import React from 'react';
import Instrument from "./../../instrument";
import vid from './artificialHarmonics.mp4';
import score from './artificialHarmonics.png';

const instrumentText = {
  0: "Natural harmonics use the pitch of the open string as the fundamental. \n\n" +
    "Artificial harmonics require the string to be fully stopped by one finger to create an artificial fundamental and lightly touched by another finger to make the string vibrate in partials. \n\n By far the most common artificial harmonic is the touch 4 4th partial harmonic, created by lightly touching a perfect 4th above a stopped note on the same string.",
  3: "Natural harmonics use the pitch of the open string as the fundamental. Artificial harmonics require the string to be fully stopped by one finger to create an artificial fundamental and lightly touched by another finger to make the string vibrate in partials. By far the most common artificial harmonic is the touch 4 4th partial harmonic, created by lightly touching a perfect 4th above a stopped note on the same string.",
  4: "Unlike the violin and viola, the cello cannot reach the interval of a perfect 4th in the lower positions, without resorting to thumb position. Note how the thumb is used to create all these artificial fundamentals.",
  6: "Unlike the violin and viola, the cello cannot reach the interval of a perfect 4th in the lower positions, without resorting to thumb position. Note how the thumb is used to create all these artificial fundamentals.",
  8: "Since Touch 4 harmonics sound 2 octaves above the thumb-stopped pitch, cellists can use this technique to play notes above the treble staff securely. Note, however, that to move to a different pitch on the same string, cellists must shift their entire left hand, and re-adjust the interval of the 4th needed to create the harmonic; this interval is always one-quarter of the artificially created (and variable) string length between the thumb and the bridge.",
  9: "Since Touch 4 harmonics sound 2 octaves above the thumb-stopped pitch, cellists can use this technique to play notes above the treble staff securely. Note, however, that to move to a different pitch on the same string, cellists must shift their entire left hand, and re-adjust the interval of the 4th needed to create the harmonic; this interval is always one-quarter of the artificially created (and variable) string length between the thumb and the bridge.",
  11: "Touch 4 artificial harmonics work equally well on all strings of the instrument, especially in the lower positions.",
  12: "Touch 4 artificial harmonics work equally well on all strings of the instrument, especially in the lower positions.",
  14: "Touch 4 artificial harmonics work equally well on all strings of the instrument, especially in the lower positions.",
  16: "Touch 4 artificial harmonics work equally well on all strings of the instrument, especially in the lower positions.",
  18: "Touch 4 artificial harmonics work equally well on all strings of the instrument, especially in the lower positions.",
  20: "Touch 4 artificial harmonics work equally well on all strings of the instrument, especially in the lower positions.",
  22: "5th partial artificial harmonics can be created by lightly touching a major 3rd above the stopped string. \n\n 6th partial artificial harmonics can be created by lightly touching a minor 3rd above the stopped string. 5th and 6th partial artificial harmonics are less stable and far less common than 4th partial artificial harmonics.  \n\n Note that as the fingered interval gets smaller, the pitch gets higher, because the string is being divided into successively smaller parts.",
  25: "5th partial artificial harmonics can be created by lightly touching a major 3rd above the stopped string. \n\n 6th partial artificial harmonics can be created by lightly touching a minor 3rd above the stopped string. 5th and 6th partial artificial harmonics are less stable and far less common than 4th partial artificial harmonics.  \n\n Note that as the fingered interval gets smaller, the pitch gets higher, because the string is being divided into successively smaller parts.",
  27: "5th partial artificial harmonics can be created by lightly touching a major 3rd above the stopped string. \n\n 6th partial artificial harmonics can be created by lightly touching a minor 3rd above the stopped string. 5th and 6th partial artificial harmonics are less stable and far less common than 4th partial artificial harmonics.  \n\n Note that as the fingered interval gets smaller, the pitch gets higher, because the string is being divided into successively smaller parts.",
}

const morePages = [["/celloSF","Scale Fingering"],
["/celloNH","Natural Harmonics"],
["/celloMS","Multiple Stops"],
["/celloLHI","Left Hand Inflections"],
["/celloRHI","Right Hand Inflections"],
["/bowDirectionsSpeedPressure","Bow Directions, Speed and Pressure"],
["/moreBowColors","More Bow Colors"],
["/pizzicato","Pizzicato"]]

const gridHeights = [200, 150, 150]
const gridWidths = [[120, 50, 50, 50, 50, 50, 50],
                    [40, 60, 60, 60, 60, 60, 60],
                    [40, 100, 120, 120]]
const gridTimes = [[0, 3, 4, 6, 8, 9],
                  [11, 12, 14, 16, 18, 20],
                  [22, 25, 27]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Cello"
        title="Artificial Harmonics"
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
