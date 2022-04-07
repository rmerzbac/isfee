import React from 'react';
import Instrument from "./../../instrument";
import vid from './xylophoneRangeMallets.mp4'
import score from './xylophoneRangeMallets.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "The clef used here (with an 8 over the treble clef symbol) indicates that the xylophone sounds an octave higher than its treble clef notation. Its highest note matches the top note of the piano keyboard, given it an extra octave above the range of the marimba.",
  8: "Performer: Eric Guinivan\n\n" +
  "Hard wood mallets give the xylophone its most distinctive ultra-bright wood sound.",
  11: "Performer: Eric Guinivan\n\n" +
  "Hard wood mallets give the xylophone its most distinctive ultra-bright wood sound.",
  14: "Performer: Eric Guinivan\n\n" +
  "Hard wood mallets give the xylophone its most distinctive ultra-bright wood sound.",
  18: "Performer: Eric Guinivan\n\n" +
  "Medium rubber mallets are relatively soft for the xylophone, taking much of the edge from the sound.",
  21: "Performer: Eric Guinivan\n\n" +
  "Medium rubber mallets are relatively soft for the xylophone, taking much of the edge from the sound.",
  24: "Performer: Eric Guinivan\n\n" +
  "Medium rubber mallets are relatively soft for the xylophone, taking much of the edge from the sound.",
  27: "Performer: Eric Guinivan\n\n" +
  "Yarn mallets produce a mellowness on the xylophone almost matching the marimba.",
  29: "Performer: Eric Guinivan\n\n" +
  "Yarn mallets produce a mellowness on the xylophone almost matching the marimba.",
  32: "Performer: Eric Guinivan\n\n" +
  "Yarn mallets produce a mellowness on the xylophone almost matching the marimba.",
  35: "Performer: Eric Guinivan\n\n" +
  "Hard wood mallets give the xylophone its most distinctive ultra-bright wood sound.",
  38: "Performer: Eric Guinivan\n\n" +
  "Hard wood mallets give the xylophone its most distinctive ultra-bright wood sound.",
  40: "Performer: Eric Guinivan\n\n" +
  "Hard wood mallets give the xylophone its most distinctive ultra-bright wood sound.",
  43: "Performer: Eric Guinivan\n\n" +
  "Medium rubber mallets are relatively soft for the xylophone, taking much of the edge from the sound.",
  45: "Performer: Eric Guinivan\n\n" +
  "Medium rubber mallets are relatively soft for the xylophone, taking much of the edge from the sound.",
  48: "Performer: Eric Guinivan\n\n" +
  "Medium rubber mallets are relatively soft for the xylophone, taking much of the edge from the sound.",
  51: "Performer: Eric Guinivan\n\n" +
  "Yarn mallets produce a mellowness on the xylophone almost matching the marimba.",
  54: "Performer: Eric Guinivan\n\n" +
  "Yarn mallets produce a mellowness on the xylophone almost matching the marimba.",
  57: "Performer: Eric Guinivan\n\n" +
  "Yarn mallets produce a mellowness on the xylophone almost matching the marimba."
}

const morePages = [["/KeyboardPercussionMCB","Marimba: Chords & Bass"],
["/KeyboardPercussionMMT","Marimba: Mallet Techniques"],
["/KeyboardPercussionMRLR","Marimba: Range & Low Register"],
["/KeyboardPercussionMRM","Marimba: Register & Mallets"],
["/KeyboardPercussionVRM","Vibraphone: Range Mallets"],
["/KeyboardPercussionVDB","Vibraphone: Damping & Bowing"],
["/KeyboardPercussionXHRM","Xylophone: High Register & Mallets"],
["/KeyboardPercussionAC","Almglocken & Chimes"],
["/KeyboardPercussionGC","Glockenspiel & Crotales"]]

const gridHeights = [115, 68, 68, 68, 65, 60, 70]
const gridWidths = [[40, 480], [40, 140, 150, 190], [40, 140, 150, 190], [40, 140, 150, 190], [40, 140, 150, 190], [40, 140, 150, 190], [40, 140, 150, 190]]
const gridTimes = [[0], [8, 11, 14], [18, 21, 24], [27, 29, 32], [35, 38, 40], [43, 45, 48], [51, 54, 57]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Xylophone"
        title="Range & Mallets"
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
