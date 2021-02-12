import React from 'react';
import Instrument from "./../../instrument";
import vid from './marimbaRangeLowRegister.mp4'
import score from './marimbaRangeLowRegister.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
  "Every composer who sees or hears a grand marimba like this one wants to write down to the C below the bass clef. Please observe what the extra notes below where this scale begins add to the size (and therefore transportability and expense) of the instrument. The low A which begins this scale should be considered the practical standard bottom of the marimba's range.\n\n" +
  "Note that it takes the performer about 4 steps to walk through this 4-octave range.",
  9: "Performer: Eric Guinivan\n\n" +
  "Scales (and similarly, passages) which have \"black keys\" are actually easier to play than all-white scales and passages. The \"black keys\" give the performer very useful points of reference.",
  16: "Performer: Eric Guinivan\n\n" +
  "Typically, softer mallets which emphasize the sustained part of the pitch and suppress the noise of the attack are used in the lower range of the marimba.\n\n" +
  "The rubber mallets used here are relatively hard, making for a sharp mixed pitch attack. If other instruments are playing in this range, only the higher part of the marimba attacks will be heard.",
  19: "Performer: Eric Guinivan\n\n" +
  "Typically, softer mallets which emphasize the sustained part of the pitch and suppress the noise of the attack are used in the lower range of the marimba.\n\n" +
  "The rubber mallets used here are relatively hard, making for a sharp mixed pitch attack. If other instruments are playing in this range, only the higher part of the marimba attacks will be heard.",
  22: "Performer: Eric Guinivan\n\n" +
  "Typically, softer mallets which emphasize the sustained part of the pitch and suppress the noise of the attack are used in the lower range of the marimba.\n\n" +
  "The rubber mallets used here are relatively hard, making for a sharp mixed pitch attack. If other instruments are playing in this range, only the higher part of the marimba attacks will be heard.",
  26: "Performer: Eric Guinivan\n\n" +
  "Typically, softer mallets which emphasize the sustained part of the pitch and suppress the noise of the attack are used in the lower range of the marimba.\n\n" +
  "Medium yarn mallets provide a good balance between attack pitch and the deeper sustained pitch.",
  30: "Performer: Eric Guinivan\n\n" +
  "Typically, softer mallets which emphasize the sustained part of the pitch and suppress the noise of the attack are used in the lower range of the marimba.\n\n" +
  "Medium yarn mallets provide a good balance between attack pitch and the deeper sustained pitch.",
  33: "Performer: Eric Guinivan\n\n" +
  "Typically, softer mallets which emphasize the sustained part of the pitch and suppress the noise of the attack are used in the lower range of the marimba.\n\n" +
  "Medium yarn mallets provide a good balance between attack pitch and the deeper sustained pitch.",
  36: "Performer: Eric Guinivan\n\n" +
  "Typically, softer mallets which emphasize the sustained part of the pitch and suppress the noise of the attack are used in the lower range of the marimba.\n\n" +
  "Soft yarn mallets are especially effective in projecting the deeper pitch of the low range.",
  40: "Performer: Eric Guinivan\n\n" +
  "Typically, softer mallets which emphasize the sustained part of the pitch and suppress the noise of the attack are used in the lower range of the marimba.\n\n" +
  "Soft yarn mallets are especially effective in projecting the deeper pitch of the low range.",
  43: "Performer: Eric Guinivan\n\n" +
  "Typically, softer mallets which emphasize the sustained part of the pitch and suppress the noise of the attack are used in the lower range of the marimba.\n\n" +
  "Soft yarn mallets are especially effective in projecting the deeper pitch of the low range."
}

const gridHeights = [135, 115, 90, 70, 90]
const gridWidths = [[40, 480], [40, 480], [40, 150, 160, 170], [40, 150, 160, 170], [40, 150, 160, 170]]
const gridTimes = [[0], [9], [16, 19, 22], [26, 30, 33], [36, 40, 43]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Marimba"
        title="Range & Low Register"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}
