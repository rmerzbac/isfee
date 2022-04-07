import React from 'react';
import Instrument from "./../../instrument";
import vid from './Harp 004 chordsRegistersArticulations.mp4';
import score from './Harp 004 chordsRegistersArticulations.png';

const instrumentText = {
  0: "Harp strings are closer together than the keys of a piano, so the stretch of a 10th is readily accommodated. Chords which take into account the natural gap between the thumb and the fingers are most comfortable.",
  5: "Harp strings are closer together than the keys of a piano, so the stretch of a 10th is readily accommodated. Chords which take into account the natural gap between the thumb and the fingers are most comfortable.\n\n" +
    "Note that the thumb-vs.-fingers position is parallel between the hands (not mirrored as on the piano).",
  12: "Since the little finger is never used, 8-voice chords are the richest possible on the harp.",
  16: "Since the little finger is never used, 8-voice chords are the richest possible on the harp.\n\n" +
    "Although acoustics suggest that chords are best voiced spread at the bottom and close on top, this re-voicing of the previous chord may be more effective, since it gives the fingers of the left hand a better-balanced, stronger grasp.",
  20: "The articulation marks indicate a damping of the strings.",
  23: "The articulation marks indicate a damping of the strings.\n\n" +
    "This famous mirror chord from Stravinsky's Symphony of Psalms is a prime example of a chord that works beautifully on the piano (given a good-sized hand) but is virtually unplayable in the right hand of harpists.",
  27: "The lowest notes of the harp are an excellent resource for chamber and solo music, but are effective in the orchestra only in very soft, transparent textures.",
  33: "The lowest notes of the harp are an excellent resource for chamber and solo music, but are effective in the orchestra only in very soft, transparent textures.\n\n" +
    "Staccato articulation demands a damping motion as an extra action for every note.",
  38: "The lowest notes of the harp are an excellent resource for chamber and solo music, but are effective in the orchestra only in very soft, transparent textures.",
  43: "The lowest notes of the harp are an excellent resource for chamber and solo music, but are effective in the orchestra only in very soft, transparent textures.",
  49: "The lowest notes of the harp are an excellent resource for chamber and solo music, but are effective in the orchestra only in very soft, transparent textures.\n\n" +
    "\"Pres de la table\" indicates plucking close to the sound board, creating an edgier sound, with a slightly faster decay.",
  57: "In this register, the harp projects more clearly than in the lowest octave.",
  63: "In this register, the harp projects more clearly than in the lowest octave.\n\n" +
    "Staccato articulation demands a damping motion as an extra action for every note.",
  68: "In this register, the harp projects more clearly than in the lowest octave.",
  74: "In this register, the harp projects more clearly than in the lowest octave.",
  79: "In this register, the harp projects more clearly than in the lowest octave.\n\n" +
    "\"Pres de la table\" indicates plucking close to the sound board, creating an edgier sound, with a slightly faster decay.",
  88: "In this region the harp has a warmth and sweetness most reminiscent of its ethnic and historical roots.",
  93: "In this region the harp has a warmth and sweetness most reminiscent of its ethnic and historical roots.\n\n" +
    "Staccato articulation demands a damping motion as an extra action for every note.",
  98: "In this region the harp has a warmth and sweetness most reminiscent of its ethnic and historical roots.",
  103: "In this region the harp has a warmth and sweetness most reminiscent of its ethnic and historical roots.",
  108: "In this region the harp has a warmth and sweetness most reminiscent of its ethnic and historical roots.\n\n" +
    "\"Pres de la table\" indicates plucking close to the sound board, creating an edgier, drier sound.",
  115: "This region is the strongest, most clearly projected range of the harp.",
  120: "This region is the strongest, most clearly projected range of the harp.\n\n" +
    "Staccato articulation demands a damping motion as an extra action for every note.",
  125: "This region is the strongest, most clearly projected range of the harp.",
  131: "This region is the strongest, most clearly projected range of the harp.",
  135: "This region is the strongest, most clearly projected range of the harp.\n\n" +
    "\"Pres de la table\" indicates plucking close to the sound board, creating an edgier, drier sound.",
  143: "This region of the harp displays its most brilliant color. The tone decays quickly, creating a naturally sharp and crisp articulation.",
  148: "This region of the harp displays its most brilliant color. The tone decays quickly, creating a naturally sharp and crisp articulation.\n\n" +
    "Staccato damping makes little difference in the articulation in this register.",
  152: "This region of the harp displays its most brilliant color. The tone decays quickly, creating a naturally sharp and crisp articulation.",
  158: "This region of the harp displays its most brilliant color. The tone decays quickly, creating a naturally sharp and crisp articulation.",
  163: "This region of the harp displays its most brilliant color. The tone decays quickly, creating a naturally sharp and crisp articulation.\n\n" +
    "\"Pres de la table\" indicates plucking close to the sound board, but this makes a barely perceptible change in color in this range.",
  170: "Finding the notes in this extreme high range of the harp requires the harpist to turn and look back. The tone is very bright and brittle.",
  175: "Finding the notes in this extreme high range of the harp requires the harpist to turn and look back. The tone is very bright and brittle.\n\n" +
    "Staccato damping makes little difference in the articulation in this register.",
  180: "Finding the notes in this extreme high range of the harp requires the harpist to turn and look back. The tone is very bright and brittle.",
  185: "Finding the notes in this extreme high range of the harp requires the harpist to turn and look back. The tone is very bright and brittle.",
  189: "Finding the notes in this extreme high range of the harp requires the harpist to turn and look back. The tone is very bright and brittle.\n\n" +
    "\"Pres de la table\" indicates plucking close to the sound board, but this makes no perceptible change in color in this range.",
}

const morePages = [["/HarpPB","Pedal Basics"],
["/HarpEG","Enharmonic & Glissandos"],
["/HarpS","Scales"],
["/HarpAI","Arpeggiation Idioms"],
["/HarpHE","Harmonics & Effects"],
["/HarpBRC","Blocked & Rolled Chords"]]


const gridHeights = [130, 70, 60, 50, 50, 70, 80];
const gridWidths = [[40, 100, 110, 40, 30, 70, 55],
                    [35, 80, 80, 80, 80, 95],
                    [35, 80, 80, 80, 80, 95],
                    [35, 80, 80, 80, 80, 95],
                    [35, 80, 80, 80, 80, 95],
                    [35, 80, 80, 80, 80, 95],
                    [35, 80, 80, 80, 80, 95]];
const gridTimes = [[0, 5, 12, 16, 20, 23],
                   [27, 33, 38, 43, 49],
                   [57, 63, 68, 74, 79],
                   [88, 93, 98, 103, 108],
                   [115, 120, 125, 131, 135],
                   [143, 148, 152, 158, 163],
                   [170, 175, 180, 185, 189]];


export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Harp"
        title="Chords, Registers, Articulations"
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
