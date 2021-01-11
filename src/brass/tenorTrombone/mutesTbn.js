import React from 'react';
import Instrument from "./../../instrument";
import vid from './mutesTbn.mp4'
import score from './mutesTbn.png'

const instrumentText = {
  0: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" + 
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" + 
  "The distinct colors of the various mutes are more obvious at louder dynamic levels.",
  11: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" + 
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" + 
  "The distinct colors of the various mutes are more obvious at louder dynamic levels.",
  25: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" + 
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" + 
  "The distinct colors of the various mutes are more obvious at louder dynamic levels.",
  41: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
  "The three different positions for the stem of the harmon mute create very different timbres.",
  47: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
  "The three different positions for the stem of the harmon mute create very different timbres. The \"wa-wa\" effect is most pronounced with the harmon mute in \"stem in\" position.",
  60: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
  "The three different positions for the stem of the harmon mute create very different timbres. Note that \"stem extended\" and \"stem removed\" are preferable to the ambiguous \"stem out.\"",
  66: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
  "The three different positions for the stem of the harmon mute create very different timbres. Note that \"stem extended\" and \"stem removed\" are preferable to the ambiguous \"stem out.\"",
  72: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.",
  84: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
  "A straight mute adds a nasal brightness to the sound, so that at a quiet dynamic a straight muted trombone may actually sound louder than the open trombone.",
  99: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
  "A cup mute effectively softens the timbre of the trombone when used in quiet passages.",
  115: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
  "The three different positions for the stem of the harmon mute create very different timbres.",
  122: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
  "The three different positions for the stem of the harmon mute create very different timbres. The \"wa-wa\" effect is most pronounced with the harmon mute in \"stem in\" position.",
  135: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
  "The three different positions for the stem of the harmon mute create very different timbres. Note that \"stem extended\" and \"stem removed\" are preferable to the ambiguous \"stem out.\"",
  148: "Performer: Bryan Heath\n\n" +
  "These examples demonstrate three of the most common trombone mutes. Mute changes should be specific in naming the mute to be used.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes.\n\n" +
  "The three different positions for the stem of the harmon mute create very different timbres. Note that \"stem extended\" and \"stem removed\" are preferable to the ambiguous \"stem out.\"",
  157: "Performer: Bryan Heath\n\n" +
  "Writing \"brassy\" invites the player to add a metallic quality to the tone color. This is possible only at a loud dynamic level."
}

const gridHeights = [80, 60, 60, 60, 60, 60, 70, 70]
const gridWidths = [[40, 230, 250], [40, 230, 250], [40, 230, 250], [40, 230, 250], [40, 230, 250], [40, 230, 250], [40, 230, 250], [40, 230]]
const gridTimes = [[0, 11], [25, 41], [47, 60], [66, 72], [84, 99], [115, 122], [135, 148], [157]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tenor Trombone"
        title="Mutes"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


