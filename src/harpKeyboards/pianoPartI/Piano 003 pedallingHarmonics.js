import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 003 pedallingHarmonics.mp4';
import score from './Piano 003 pedallingHarmonics.png';

const instrumentText = {
  0: "The damper pedal raises all the dampers. When released, it will allow all the dampers to fall, except for those whose keys are depressed.",
  8: "The damper pedal raises all the dampers. When released, it will allow all the dampers to fall, except for those whose keys are depressed.",
  22: "The pitches sounded by any string include all the harmonic partials as well as the fundamental. Harmonics can be produced by lightly touching the string at a node.",
  32: "5th partial harmonics sound two octaves and a major 3rd above the note being struck. This piano has been marked with chalk showing where the node for some 5th partial harmonics is located.",
  47: "Strings whose dampers have been raised will ring in sympathy with any played note sharing common partials. Here the sustained sound is produced by the 2nd partials of the lower strings which have been set in motion by sympathetic vibration.",
  59: "Strings whose dampers have been raised will ring in sympathy with any played note sharing common partials. Here the sustained sound is produced by the upper strings which have been set in motion by sympathetic vibration to the 2nd partials of the lower chord.",
  68: "Strings whose dampers have been raised will ring in sympathy with any played note sharing common partials. Here the sustained sound is produced by the upper strings which have been set in motion by sympathetic vibration to the 3rd partials of the lower chord.",
  75: "Holding a cluster in the lower strings allows them to ring in sympathetic vibration when higher strings are played, creating a synthetic reverberation. When larger clusters and/or two-handed playing is desired, the sostenuto pedal may be used to sustain the cluster."
}

const gridHeights = [130, 130, 140, 130];
const gridWidths = [[35, 440], [35, 440], [20, 230, 220], [35, 85, 85, 105, 145]];
const gridTimes = [[0], [8], [22, 32], [47, 59, 68, 75]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Pedalling, Harmonics"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
