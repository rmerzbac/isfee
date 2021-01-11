import React from 'react';
import Instrument from "./../../instrument";
import vid from './marimbaRegistersMallets.mp4'
import score from './marimbaRegistersMallets.png'

const instrumentText = {
  0: "Performer: Eric Guinivan\n\n" +
    "Any of the 3 kinds of mallets shown here can be appropriate to the middle range of the marimba at any dynamic level, so the composer should specify the mallets to be used based on the desired balance of attack to pitch.",
  3: "Performer: Eric Guinivan\n\n" +
    "Any of the 3 kinds of mallets shown here can be appropriate to the middle range of the marimba at any dynamic level, so the composer should specify the mallets to be used based on the desired balance of attack to pitch.",
  7: "Performer: Eric Guinivan\n\n" +
    "Any of the 3 kinds of mallets shown here can be appropriate to the middle range of the marimba at any dynamic level, so the composer should specify the mallets to be used based on the desired balance of attack to pitch.",
  10: "Performer: Eric Guinivan\n\n" +
    "Any of the 3 kinds of mallets shown here can be appropriate to the middle range of the marimba at any dynamic level, so the composer should specify the mallets to be used based on the desired balance of attack to pitch.",
  13: "Performer: Eric Guinivan\n\n" +
    "Any of the 3 kinds of mallets shown here can be appropriate to the middle range of the marimba at any dynamic level, so the composer should specify the mallets to be used based on the desired balance of attack to pitch.",
  16: "Performer: Eric Guinivan\n\n" +
    "Any of the 3 kinds of mallets shown here can be appropriate to the middle range of the marimba at any dynamic level, so the composer should specify the mallets to be used based on the desired balance of attack to pitch.",
  19: "Performer: Eric Guinivan\n\n" +
    "Any of the 3 kinds of mallets shown here can be appropriate to the middle range of the marimba at any dynamic level, so the composer should specify the mallets to be used based on the desired balance of attack to pitch.",
  22: "Performer: Eric Guinivan\n\n" +
    "Any of the 3 kinds of mallets shown here can be appropriate to the middle range of the marimba at any dynamic level, so the composer should specify the mallets to be used based on the desired balance of attack to pitch.",
  25: "Performer: Eric Guinivan\n\n" +
    "Any of the 3 kinds of mallets shown here can be appropriate to the middle range of the marimba at any dynamic level, so the composer should specify the mallets to be used based on the desired balance of attack to pitch.",
  30: "Performer: Eric Guinivan\n\n" +
    "In the high range of the marimba, harder mallets are more typically used. Here the mixed pitch of the attack does not interfere with the projection of the main pitch.\n\n" +
    "Hard or medium rubber mallets will provide a xylophone-like attack quality.",
  33: "Performer: Eric Guinivan\n\n" +
    "In the high range of the marimba, harder mallets are more typically used. Here the mixed pitch of the attack does not interfere with the projection of the main pitch.\n\n" +
    "Hard or medium rubber mallets will provide a xylophone-like attack quality.",
  36: "Performer: Eric Guinivan\n\n" +
    "In the high range of the marimba, harder mallets are more typically used. Here the mixed pitch of the attack does not interfere with the projection of the main pitch.\n\n" +
    "Hard or medium rubber mallets will provide a xylophone-like attack quality.",
  39: "Performer: Eric Guinivan\n\n" +
    "In the high range of the marimba, harder mallets are more typically used. Here the mixed pitch of the attack does not interfere with the projection of the main pitch.\n\n" +
    "Medium yarn mallets suppress the sharpness of  the attack.",
  42: "Performer: Eric Guinivan\n\n" +
    "In the high range of the marimba, harder mallets are more typically used. Here the mixed pitch of the attack does not interfere with the projection of the main pitch.\n\n" +
    "Medium yarn mallets suppress the sharpness of  the attack.",
  45: "Performer: Eric Guinivan\n\n" +
    "In the high range of the marimba, harder mallets are more typically used. Here the mixed pitch of the attack does not interfere with the projection of the main pitch.\n\n" +
    "Medium yarn mallets suppress the sharpness of  the attack.",
  48: "Performer: Eric Guinivan\n\n" +
    "In the high range of the marimba, harder mallets are more typically used. Here the mixed pitch of the attack does not interfere with the projection of the main pitch.\n\n" +
    "Soft yarn mallets create a muted color, even at loud dynamic levels.",
  51: "Performer: Eric Guinivan\n\n" +
    "In the high range of the marimba, harder mallets are more typically used. Here the mixed pitch of the attack does not interfere with the projection of the main pitch.\n\n" +
    "Soft yarn mallets create a muted color, even at loud dynamic levels.",
  54: "Performer: Eric Guinivan\n\n" +
    "In the high range of the marimba, harder mallets are more typically used. Here the mixed pitch of the attack does not interfere with the projection of the main pitch.\n\n" +
    "Soft yarn mallets create a muted color; at soft dynamic levels the tone becomes almost subliminal.",
  59: "Performer: Eric Guinivan\n\n" +
    "Colors can be mixed by asking for the simultaneous use of different mallets.",
  62: "Performer: Eric Guinivan\n\n" +
    "Colors can be mixed by asking for the simultaneous use of different mallets."
}

const gridHeights = [100, 60, 60, 65, 70, 75, 98]
const gridWidths = [[40, 140, 160, 180], [40, 140, 160, 180], [40, 140, 160, 180], [40, 140, 160, 180], [40, 140, 160, 180], [40, 140, 160, 180], [40, 480]]
const gridTimes = [[0, 3, 7], [10, 13, 16], [19, 22, 25], [30, 33, 36], [39, 42, 45], [48, 51, 54], [59]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Keyboard Percussion"
        title="Marimba: Register & Mallets"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


