import React from 'react';
import Instrument from "./../../instrument";
import vid from './tremolosRegisterColorsTp.mp4';
import score from './tremolosRegisterColorsTp.png';

const instrumentText = {
  0: "Performer: Thaddeus Archer \n\n" +
    "Trills and tremolos on the trumpet are executed with valve fingering alternation. \n\n" +
    " The facility or awkwardness of any trill or tremolo can be determined by noting the fingering. ",
  4: "Performer: Thaddeus Archer \n\n" +
    "Trills and tremolos on the trumpet are executed with valve fingering alternation. \n\n" +
    " The facility or awkwardness of any trill or tremolo can be determined by noting the fingering. ",
  8: "Performer: Thaddeus Archer \n\n" +
    "Trills and tremolos on the trumpet are executed with valve fingering alternation. \n\n" +
    " The facility or awkwardness of any trill or tremolo can be determined by noting the fingering. ",
  11: "Performer: Thaddeus Archer \n\n" +
    "Trills and tremolos on the trumpet are executed with valve fingering alternation. \n\n" +
    " The facility or awkwardness of any trill or tremolo can be determined by noting the fingering. \n\n" +
    "As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column. ",
  15: "Performer: Thaddeus Archer \n\n" +
    "Trills and tremolos on the trumpet are executed with valve fingering alternation. \n\n" +
    " The facility or awkwardness of any trill or tremolo can be determined by noting the fingering. \n\n" +
    "As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column. ",
  18: "Performer: Thaddeus Archer \n\n" +
    "Trills and tremolos on the trumpet are executed with valve fingering alternation. \n\n" +
    " The facility or awkwardness of any trill or tremolo can be determined by noting the fingering. \n\n" +
    "As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column. ",
  22: "Performer: Thaddeus Archer \n\n" +
    "Trills and tremolos on the trumpet are executed with valve fingering alternation. \n\n" +
    " The facility or awkwardness of any trill or tremolo can be determined by noting the fingering. \n\n" +
    "As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column. ",
  26: "Performer: Thaddeus Archer \n\n" +
    "The bottom register of trumpet's range lacks body and luster, but this range can be used to fill out the sonority of quiet passages, to interlock with other brass instruments, or to add some extra noisy intensity in loud passages. \n\n" +
    " Multiple fingering possibilities don't exist in this region, so extra care must be taken in writing trills, tremolos, and any rapid passage-work. ",
  30: "Performer: Thaddeus Archer \n\n" +
    "The bottom register of trumpet's range lacks body and luster, but this range can be used to fill out the sonority of quiet passages, to interlock with other brass instruments, or to add some extra noisy intensity in loud passages. \n\n" +
    " Multiple fingering possibilities don't exist in this region, so extra care must be taken in writing trills, tremolos, and any rapid passage-work. ",
  33: "Performer: Thaddeus Archer \n\n" +
    "The bottom register of trumpet's range lacks body and luster, but this range can be used to fill out the sonority of quiet passages, to interlock with other brass instruments, or to add some extra noisy intensity in loud passages. \n\n" +
    " Multiple fingering possibilities don't exist in this region, so extra care must be taken in writing trills, tremolos, and any rapid passage-work. ",
  37: "Performer: Thaddeus Archer \n\n" +
    "The bottom register of trumpet's range lacks body and luster, but this range can be used to fill out the sonority of quiet passages, to interlock with other brass instruments, or to add some extra noisy intensity in loud passages. \n\n" +
    " Multiple fingering possibilities don't exist in this region, so extra care must be taken in writing trills, tremolos, and any rapid passage-work. \n\n",
  41: "Performer: Thaddeus Archer \n\n" +
    "In this low-middle range can provide great warmth and clarity of projection. ",
  45: "Performer: Thaddeus Archer \n\n" +
    "In this low-middle range can provide great warmth and clarity of projection. ",
  49: "Performer: Thaddeus Archer \n\n" +
    "In this low-middle range can provide great warmth and clarity of projection. ",
  53: "Performer: Thaddeus Archer \n\n" +
    "In this low-middle range can provide great warmth and clarity of projection. \n\n",
  56: "Performer: Thaddeus Archer \n\n" +
    "In this high-middle range the trumpet is a model of flexibility and agility. ",
  60: "Performer: Thaddeus Archer \n\n" +
    "In this high-middle range the trumpet is a model of flexibility and agility. ",
  64: "Performer: Thaddeus Archer \n\n" +
    "In this high-middle range the trumpet is a model of flexibility and agility. ",
  67: "Performer: Thaddeus Archer \n\n" +
    "In this high-middle range the trumpet is a model of flexibility and agility. \n\n",
  72: "Performer: Thaddeus Archer \n\n" +
    "As the trumpet moves into its high register it is capable of projecting great power and the highest degree of dramatic contrast. ",
  75: "Performer: Thaddeus Archer \n\n" +
    "As the trumpet moves into its high register it is capable of projecting great power and the highest degree of dramatic contrast. ",
  78: "Performer: Thaddeus Archer \n\n" +
    "As the trumpet moves into its high register it is capable of projecting great power and the highest degree of dramatic contrast. ",
  82: "Performer: Thaddeus Archer \n\n" +
    "As the trumpet moves into its high register it is capable of projecting great power and the highest degree of dramatic contrast. \n\n"
}

const gridHeights = [150, 100, 80, 80, 80]
const gridWidths = [[40, 55, 50, 50, 50, 50, 50, 125], [40, 110, 115, 115, 140], [40, 110, 115, 115, 140], [40, 110, 115, 115, 140], [40, 110, 115, 115, 140]]
const gridTimes = [[0, 4, 8, 11, 15, 18, 22], [26, 30, 33, 37], [41, 45, 49, 53], [56, 60, 64, 67], [72, 75, 78, 82]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Trumpet"
        title="Tremolos, Register, & Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


