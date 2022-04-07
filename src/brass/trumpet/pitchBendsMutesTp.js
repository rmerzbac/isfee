import React from 'react';
import Instrument from "./../../instrument";
import vid from './pitchBendsMutesTp.mp4';
import score from './pitchBendsMutesTp.png';

const instrumentText = {
  0: "Performer: Thaddeus Archer \n\n" +
    "These examples show three kinds of half-step slurring: a smooth legato valve change, \"lipping down\" a half-step, and half-valving to slightly smear the movement between pitches. ",
  28: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "The distinct colors of the various mutes are more obvious at louder dynamic levels. \n\n",
  35: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "The distinct colors of the various mutes are more obvious at louder dynamic levels. ",
  43: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "The distinct colors of the various mutes are more obvious at louder dynamic levels. ",
  51: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "The three different positions for the stem of the harmon mute create very different timbres. \n\n" +
    " Note that \"stem extended\" and \"stem removed\" are preferable to the ambiguous \"stem out. \n\n",
  59: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "The three different positions for the stem of the harmon mute create very different timbres. \n\n" +
    " Note that \"stem extended\" and \"stem removed\" are preferable to the ambiguous \"stem out. \n\n",
  70: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "The three different positions for the stem of the harmon mute create very different timbres. \n\n" +
    " Note that \"stem extended\" and \"stem removed\" are preferable to the ambiguous \"stem out. \n\n",
  75: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. ",
  83: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "A metal straight mute adds a nasal brightness to the sound, so that at a quiet dynamic a straight muted trumpet may actually sound louder than the open trumpet. \n\n" +
    " One can use a fiber straight mute to reduce the nasal metallic quality. ",
  92: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "A cup mute effectively softens the timbre of the trumpet when used in quiet passages. ",
  101: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "The three different positions for the stem of the harmon mute create very different timbres. \n\n" +
    " Note that \"stem extended\" and \"stem removed\" are preferable to the ambiguous \"stem out. \n\n",
  109: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "The three different positions for the stem of the harmon mute create very different timbres. \n\n" +
    " Note that \"stem extended\" and \"stem removed\" are preferable to the ambiguous \"stem out. \n\n",
  117: "Performer: Thaddeus Archer \n\n" +
    "These examples demonstrate three of the most common trumpet mutes. \n\n" +
    " Mute changes should be specific in naming the mute to be used. \n\n" +
    "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. \n\n" +
    "The three different positions for the stem of the harmon mute create very different timbres. \n\n" +
    " Note that \"stem extended\" and \"stem removed\" are preferable to the ambiguous \"stem out. \n\n",
  123: "Performer: Thaddeus Archer \n\n" +
    "Writing \"brassy\" invites the player to add a metallic quality to the tone color. \n\n" +
    " This is possible only at a loud dynamic level. \n\n"
}

const morePages = [["/TrumpetHFS","Harmonic Series, Fingering & Scales"],
["/TrumpetTRC","Tremolos & Register Colors"],
["/TrumpetAVC","Articulation & Vibrato Colors"],
["/TrumpetP","Passages"]]

const gridHeights = [95, 80, 100, 80, 85, 105]
const gridWidths = [[40, 480], [40, 150, 160, 180], [40, 150, 160, 180], [40, 150, 160, 180], [40, 230, 250], [40, 230, 250]]
const gridTimes = [[0], [28, 35, 43], [51, 59, 70], [75, 83, 92], [101, 109], [117, 123]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Instrument"
        title="Pitch, Bends, & Mutes"
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
