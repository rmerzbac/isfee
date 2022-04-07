import React from 'react';
import Instrument from "./../../instrument";
import vid from './Piano 015 passagesDebussy.mp4';
import score from './Piano 015 passagesDebussy.png';

const instrumentText = {
  0: "This passage is from Debussy: Preludes, Book I, No.7: Ce qu'a vu le vent d'Ouest (What the West Wind Saw).\n\n" +
    "Debussy's piano writing frequently uses the hands in tandem to create a single richly imagined layer of activity with a sparkling surface. Here the waves of the arpeggio are divided idiomatically between the hands (as indicated by the cross-staff beaming). The left hand crosses over to superimpose glimmers on ergonomically friendly black-keys.",
  6: "Here this left hand superimposition is used in a 5-octave wash, a dazzling accumulation of sound from a technically simple pattern. The crescendo is an essential component to this effect, provided in part by the lean of the pianist's body into the highest notes.\n\n" +
    "Debussy provided no pedal indications in his score of this prelude; in fact there is only one pedal mark in the entire set of 24 Preludes. There is little doubt, however, that Debussy intended for pedal to be used liberally and imaginatively.",
  9: "Here this left hand superimposition is used in a 5-octave wash, a dazzling accumulation of sound from a technically simple pattern. The crescendo is an essential component to this effect, provided in part by the lean of the pianist's body into the highest notes.\n\n" +
    "Debussy provided no pedal indications in his score of this prelude; in fact there is only one pedal mark in the entire set of 24 Preludes. There is little doubt, however, that Debussy intended for pedal to be used liberally and imaginatively.",
  13: "This material is also a composite single layer, with the left hand's tremolos adding a heterophonic shimmer. Here, as above, the crescendo defines the sound quality as well as the shape.\n\n" +
    "Debussy provided no pedal indications in his score of this prelude; in fact there is only one pedal mark in the entire set of 24 Preludes. There is little doubt, however, that Debussy intended for pedal to be used liberally and imaginatively.",
  19: "The grace-note arpeggio at the beginning is more of a noisy attack transient than a harmonic event, and the low trill is heard as its aftermath. Debussy uses the odd voicing inspired by the thumb's ability to play seconds (note that they are either all-white or all-black) to give sonic mystery to the \"plaintive and distant\" right hand horn call.\n\n" +
    "The video plays for several measures beyond the score, as Debussy repeats the right hand call an octave lower."
}

const morePages = [["/PianoBC","Basic Construction"],
["/PianoDP","Damper Pedal"],
["/PianoPH","Pedalling, Harmonics"],
["/PianoUCS","Una Corda, Sostenuto"],
["/PianoSP","Sostenuto Pedal"],
["/PianoPE","Piano Ergonomics"],
["/PianoHCS","Hand Combination, Span"],
["/PianoSAD","Scale Articulation, Dynamics"],
["/PianoA","Arpeggios"],
["/PianoJG","Jumps, Glissandos"],
["/PianoOP","Orchestral Piano"],
["/PianoPB","Passages - Bach"],
["/PianoPB1","Passages - Beethoven, I"],
["/PianoPB2","Passages - Beethoven, II"]]

const gridHeights = [100, 100, 95, 110, 130];
const gridWidths = [[35, 440], [35, 440], [35, 440], [35, 440], [35, 440]];
const gridTimes = [[0], [6], [9], [13], [19]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Piano"
        title="Passages - Debussy"
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
