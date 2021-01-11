import React from 'react';
import Instrument from "./../../instrument";
import vid from './stoppingMutingHn.mp4';
import score from './stoppingMutingHn.png';

const instrumentText = {
  0: "Mute changes on the horn require less extra movement than on other brass, since the normal position for the horn employs the right hand in the bell. ",
  13: "Mute changes on the horn require less extra movement than on other brass instruments, since the normal position for the horn employs the right hand in the bell. \n\n" +
    "At louder dynamic levels, the straight mute actually brightens and intensifies the sound of the horn. \n\n" +
    "Note: While it is recommended that the kind of mute be specified for trumpet and trombone, on other brass instruments (including the horn) \"muted\" unambiguously designates the straight mute. ",
  25: "Mute changes on the horn require less extra movement than on other brass instruments, since the normal position for the horn employs the right hand in the bell. \n\n" +
    "Hand-stopping, placing the right hand far into the bell (designated by \"+\", cancelled by \"o\"), can be employed instantaneously. \n\n" +
    "Loud stopped horn is intense, but the timbre is hollower than the straight mute timbre. \n\n" +
    "  Even when played as loudly as possible, stopped horn does not project well. \n\n",
  35: "Mute changes on the horn require less extra movement than on other brass instruments, since the normal position for the horn employs the right hand in the bell. \n\n" +
    "The stopping mute should imitate the sound of stopped horn faithfully, and may facilitate performance, particularly in the lower register, where hand-stopping can be ineffective. \n\n",
  42: "Mute changes on the horn require less extra movement than on other brass instruments, since the normal position for the horn employs the right hand in the bell. \n\n" +
    "The fingering for open horn is given here to allow for comparison with the fingering for stopped horn and echo horn, given below. \n\n" +
    "  \"T\" indicates use of the trigger invoking the B-flat side of the horn. ",
  54: "Mute changes on the horn require less extra movement than on other brass instruments, since the normal position for the horn employs the right hand in the bell. \n\n" +
    "Quiet muted passages effectively give the impression of distance. ",
  67: "Mute changes on the horn require less extra movement than on other brass instruments, since the normal position for the horn employs the right hand in the bell. \n\n" +
    "Quiet stopped horn is less edgy than muted horn. \n\n" +
    "The fingering here would produce pitches a half-step lower if the horn were not stopped. \n\n" +
    "  Stopping raises the horn's pitch a half-step. \n\n" +
    "Advanced hornists may use alternate fingerings to improve intonation. ",
  78: "Mute changes on the horn require less extra movement than on other brass instruments, since the normal position for the horn employs the right hand in the bell. \n\n" +
    "The stopping mute should imitate the sound of stopped horn faithfully. ",
  89: "Mute changes on the horn require less extra movement than on other brass instruments, since the normal position for the horn employs the right hand in the bell. \n\n" +
    "To execute \"echo horn\" the hand is placed far enough into the bell to lower the pitch a half-step (but not as far as for stopping, which shifts the pitch UP a half-step). \n\n" +
    "  The fingering here would produce pitches a half-step higher on an open horn. \n\n" +
    "Echo horn softens the tone color as well as the dynamic level. \n\n",
  98: "Writing \"brassy\" invites the player to add a metallic quality to the tone color. \n\n" +
    "  This is possible only at a loud dynamic level. \n\n" +
    " \"Cuivre\" is the French word for \"brassy. \n\n" +
    " \" It does NOT mean stopped, although loud stopped passages are occasionally marked \"cuivre\" as an additional indication of a forced quality to the sound. \n\n"
}

const gridHeights = [140, 120, 120, 140]
const gridWidths = [[40, 180, 180, 230],[40, 180, 180, 230],[40, 210,270], [40, 210,270]]
const gridTimes = [[0, 13, 25], [35, 42, 54], [67, 78], [89, 98]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Horn"
        title="Stopping & Muting"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}
