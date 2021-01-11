import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 002 damperPedal.mp4';
import score from './Piano 002 damperPedal.png';

const instrumentText = {
  0: "The entire assemblage of dampers can be raised as a unit by the rightmost pedal, the damper pedal. (Avoid the confusing term \"sustaining pedal.\") The single word \"pedal\" used without a modifier always means the \"damper pedal\" in piano terminology. This raising of the dampers not only allows played notes to ring indefinitely, but also allows all the strings of the instrument to ring in sympathetic vibration with the struck strings, adding reinforcement and ambience to the sound.",
  8: "There is a infinite variety of ways the pedal can be used to color the sound and articulation. Pedal changes need not always match the harmonic rhythm.",
  18: "Here the pedal changes occur well after the new chords have been played, creating moments of impressionistic mixing before each chord clears, and covering the \"edge\" of the attack.",
  28: "In contrast to the previous pedaling, the pedaling employed here is a true legato, with the pedal changes coinciding with the rhythm.",
  36: "Here the pedal is used to add color to the sonority while the articulation remains non-legato.",
  47: "The damper pedal can be used in differing degrees of engagement. The term \"half-pedal\" actually covers a wide range of possibilities; here, the pedal is held so that the dampers make slight contact with the strings, so that the quality is slightly ringing, slightly damped.",
  55: "Very fast pedal changes will allow much of the strings' vibrations to continue. Flutter pedal describes a succession of fast changes, each in turn slightly damping the sound. The effect is one of a faster decay, but not a sharp cut-off.",
  66: "Depressing the pedal slightly after the dampers have initially damped an attack can emulate a forte-piano attack. The timing is very critical; every instant the dampers are allowed to rest on the strings significantly deadens the residual sonority.",
  72: "This view shows flutter pedaling used to make a rapid (but gradual) decay.",
  78: "Engaging the pedal before an attack maximizes the degree to which non-played sympathetically vibrating strings contribute to the sonority. Listen to the difference created by playing this chord with only the played notes sounding and then with the pedal depressed so that all the strings of the piano are set into motion by the impact of the attack.",
  84: "Engaging the pedal before an attack maximizes the degree to which non-played sympathetically vibrating strings contribute to the sonority. Listen to the difference created by playing this chord with only the played notes sounding and then with the pedal depressed so that all the strings of the piano are set into motion by the impact of the attack."
}

const gridHeights = [130, 85, 100, 170];
const gridWidths = [[35, 115, 115, 200], [35, 235, 200], [35, 190, 245], [35, 125, 125, 80, 95]];
const gridTimes = [[0, 8, 18], [28, 36], [47, 55], [66, 72, 78, 84]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Damper Pedal"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
