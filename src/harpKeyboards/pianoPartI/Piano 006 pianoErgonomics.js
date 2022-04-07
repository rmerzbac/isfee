import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 006 pianoErgonomics.mp4';
import score from './Piano 006 pianoErgonomics.png';

const instrumentText = {
  0: "It is useful to bear in mind the physical motions that go into producing various kinds of piano gestures. The pianist is basically a system of fulcrums and levers. Larger levers are used in producing the bigger, slower musical events, while successively smaller levers articulate the faster surface events.\n\n" +
    "Here the waist is the fulcrum; the torso is the lever.",
  7: "It is useful to bear in mind the physical motions that go into producing various kinds of piano gestures. The pianist is basically a system of fulcrums and levers. Larger levers are used in producing the bigger, slower musical events, while successively smaller levers articulate the faster surface events.\n\n" +
    "Here the shoulder is the fulcrum; the arm is the lever.",
  13: "It is useful to bear in mind the physical motions that go into producing various kinds of piano gestures. The pianist is basically a system of fulcrums and levers. Larger levers are used in producing the bigger, slower musical events, while successively smaller levers articulate the faster surface events.\n\n" +
    "Here the elbow is the fulcrum; the forearm is the lever.",
  18: "It is useful to bear in mind the physical motions that go into producing various kinds of piano gestures. The pianist is basically a system of fulcrums and levers. Larger levers are used in producing the bigger, slower musical events, while successively smaller levers articulate the faster surface events.\n\n" +
    "Here the wrist is the fulcrum; the hand is the lever.",
  20: "It is useful to bear in mind the physical motions that go into producing various kinds of piano gestures. The pianist is basically a system of fulcrums and levers. Larger levers are used in producing the bigger, slower musical events, while successively smaller levers articulate the faster surface events.\n\n" +
    "Here the first knuckle of the hand is the fulcrum; the finger is the lever.",
  22: "It is useful to bear in mind the physical motions that go into producing various kinds of piano gestures. The pianist is basically a system of fulcrums and levers. Larger levers are used in producing the bigger, slower musical events, while successively smaller levers articulate the faster surface events.\n\n" +
    "Here the first knuckle of the hand is the fulcrum; the finger is the lever.",
  26: "Two forearm bones are connected from the elbow, the radius and the ulna. These can rotate in a wrist-turning motion known as radial rotation.",
  29: "Two forearm bones are connected from the elbow, the radius and the ulna. These can rotate in a wrist-turning motion known as radial rotation.",
  39: "Repeated notes can be the most difficult parts of problematic piano passages. When played with one hand at speeds too fast for wrist articulation, they are played with successive fingers moving towards the thumb.",
  44: "Alternating hands on repeated notes can create a powerful rhythmic gesture."
}

const morePages = [["/PianoBC","Basic Construction"],
["/PianoDP","Damper Pedal"],
["/PianoPH","Pedalling, Harmonics"],
["/PianoUCS","Una Corda, Sostenuto"],
["/PianoSP","Sostenuto Pedal"],
["/PianoHCS","Hand Combination, Span"],
["/PianoSAD","Scale Articulation, Dynamics"],
["/PianoA","Arpeggios"],
["/PianoJG","Jumps, Glissandos"],
["/PianoOP","Orchestral Piano"],
["/PianoPB","Passages - Bach"],
["/PianoPB1","Passages - Beethoven, I"],
["/PianoPB2","Passages - Beethoven, II"],
["/PianoPD","Passages - Debussy"]]

const gridHeights = [140, 140, 135, 120];
const gridWidths = [[35, 125, 125, 180], [35, 160, 130, 140], [35, 160, 275], [35, 205, 230]];
const gridTimes = [[0, 7, 13], [18, 20, 22], [26, 29], [39, 44]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Piano Ergonomics"
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
