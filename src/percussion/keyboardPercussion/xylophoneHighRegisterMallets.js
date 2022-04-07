import React from 'react';
import Instrument from "./../../instrument";
import vid from './xylophoneHighRegisterMallets.mp4'
import score from './xylophoneHighRegisterMallets.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
    "Hard wood mallets give the xylophone its most distinctive ultra-bright wood sound.",
  3: "Performer: Eric Guinivan\n\n" +
    "Hard wood mallets give the xylophone its most distinctive ultra-bright wood sound.",
  6: "Performer: Eric Guinivan\n\n" +
    "Hard wood mallets give the xylophone its most distinctive ultra-bright wood sound.",
  9: "Performer: Eric Guinivan\n\n" +
    "Medium rubber mallets are relatively soft for the xylophone, taking much of the edge from the sound.",
  11: "Performer: Eric Guinivan\n\n" +
    "Medium rubber mallets are relatively soft for the xylophone, taking much of the edge from the sound.",
  13: "Performer: Eric Guinivan\n\n" +
    "Medium rubber mallets are relatively soft for the xylophone, taking much of the edge from the sound.",
  18: "Performer: Eric Guinivan\n\n" +
    "Yarn mallets produce a mellowness on the xylophone almost matching the marimba.",
  20: "Performer: Eric Guinivan\n\n" +
    "Yarn mallets produce a mellowness on the xylophone almost matching the marimba.",
  22: "Performer: Eric Guinivan\n\n" +
    "Yarn mallets produce a mellowness on the xylophone almost matching the marimba.",
  25: "Performer: Eric Guinivan\n\n" +
    "Hard wood mallets give the xylophone its most distinctive ultra-bright wood sound.\n\n" +
    "This passage with its consistent right-left sticking pattern is very idiomatic for the xylophone and all keyboard percussion.",
  31: "Performer: Eric Guinivan\n\n" +
    "Medium rubber mallets are relatively soft for the xylophone, taking much of the edge from the sound.\n\n" +
    "This passage with its consistent right-left sticking pattern is very idiomatic for the xylophone and all keyboard percussion.",
  37: "Performer: Eric Guinivan\n\n" +
    "Yarn mallets produce a mellowness on the xylophone almost matching the marimba.\n\n" +
    "This passage with its consistent right-left sticking pattern is very idiomatic for the xylophone and all keyboard percussion.",
}

const morePages = [["/KeyboardPercussionMCB","Marimba: Chords & Bass"],
["/KeyboardPercussionMMT","Marimba: Mallet Techniques"],
["/KeyboardPercussionMRLR","Marimba: Range & Low Register"],
["/KeyboardPercussionMRM","Marimba: Register & Mallets"],
["/KeyboardPercussionVRM","Vibraphone: Range Mallets"],
["/KeyboardPercussionVDB","Vibraphone: Damping & Bowing"],
["/KeyboardPercussionXRM","Xylophone: Range & Mallets"],
["/KeyboardPercussionAC","Almglocken & Chimes"],
["/KeyboardPercussionGC","Glockenspiel & Crotales"]]

const gridHeights = [110, 70, 80, 90, 80, 90]
const gridWidths = [[40, 145, 150, 185], [40, 145, 150, 185], [40, 145, 150, 185], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0, 3, 6], [9, 11, 13], [18, 20, 22], [25], [31], [37]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Xylophone"
        title="High Register & Mallets"
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
