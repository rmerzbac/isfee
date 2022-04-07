import React from 'react';
import Instrument from "./../../instrument";
import vid from './harmonicSeriesScalesTrillsTuba.mp4'
import score from './harmonicSeriesScalesTrillsTuba.png'

const instrumentText = {
  0: "Performer: James Saliers\n\n" +
    "Tubas come in a variety of sizes, the most common being the F (open fundamental is the F an octave below the bass clef), the CC, and the BB-flat (open fundamental is B-flat at the bottom of the piano keyboard). Even though the tubing of the BB-flat is half again as long as the F tuba, the available low range is virtually the same in both instruments, and the sound quality can be almost identical.",
  13: "Performer: James Saliers\n\n" +
    "Most American tubists will bring an F tuba and a CC tuba to performances, and choose from a wide selection of mouthpieces to provide the sound and range characteristics appropriate to the music.\n\n" +
    "Here is the harmonic series from the pedal C of the CC tuba.",
  25: "Performer: James Saliers\n\n" +
    "The valves lower the pitch of the fundamental by adding tubing to the air column. The tuba uses piston valves played by the right hand.\n\n" +
    "These arpeggios move from the 2nd to the 6th partial of each fundamental.",
  27: "Performer: James Saliers\n\n" +
    "The valves lower the pitch of the fundamental by adding tubing to the air column. The tuba uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step.",
  30: "Performer: James Saliers\n\n" +
    "The valves lower the pitch of the fundamental by adding tubing to the air column. The tuba uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step.",
  32: "Performer: James Saliers\n\n" +
    "The valves lower the pitch of the fundamental by adding tubing to the air column. The tuba uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step.",
  35: "Performer: James Saliers\n\n" +
    "The valves lower the pitch of the fundamental by adding tubing to the air column. The tuba uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. The 3rd valve lowers the fundamental an additional minor 3rd.",
  37: "Performer: James Saliers\n\n" +
    "Instead of using the combination 1-3 to play a perfect 4th below the open instrument, the tubist may use the 4th valve (operated by the right hand little finger), which lowers the fundamental a perfect 4th.",
  40: "Performer: James Saliers\n\n" +
    "Here the combination 2-4 lowers the pitch a half-step and a perfect 4th.",
  44: "Performer: James Saliers\n\n" +
    "This scale is performed on the F tuba. This same 3-octave range (plus additional pedal tones) is available on all sizes of tuba, but the high range is more secure on the smaller instrument.",
  51: "Performer: James Saliers\n\n" +
    "This scale is performed on the F tuba. This same 3-octave range (plus additional pedal tones) is available on all sizes of tuba, but the high range is more secure on the smaller instrument.",
  58: "Performer: James Saliers\n\n" +
    "This scale is performed on the F tuba. This same 3-octave range (plus additional pedal tones) is available on all sizes of tuba, but the high range is more secure on the smaller instrument.",
  65: "Performer: James Saliers\n\n" +
    "Pedal tones on the CC tuba are solid down to its lowest C.\n\n" +
    "Note that in this range especially the tuba requires a great deal of breath.",
  74: "Performer: James Saliers\n\n" +
    "Pedal tones on the CC tuba are solid down to its lowest C.\n\n" +
    "Note that in this range especially the tuba requires a great deal of breath.",
  82: "Performer: James Saliers\n\n" +
    "The tuba can handle skips in the middle register with great agility.",
  87: "Performer: James Saliers\n\n" +
    "The tuba can handle skips in the middle register with great agility.",
  92: "Performer: James Saliers\n\n" +
    "As the pitches get higher, the partials are closer together and more fingerings are possible for any given pitch. The change in color is slight, but it is interesting to hear the intonation variety and articulation created by the change of fundamentals (note that this example is slurred). Here concert D is played as the 9th partial of C, the 10th partial of B-flat, and the 12th partial of G. The G fundamental is created by operating the right-hand-thumb trigger in combination with the 1st and 2nd valves.",
  99: "Performer: James Saliers\n\n" +
    "Half-step trills are effectively performed using the 2nd valve.",
  102: "Performer: James Saliers\n\n" +
    "Whole-step trills are generally less effective, employing the 1st valve.",
  106: "Performer: James Saliers\n\n" +
    "As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column.",
  110: "Performer: James Saliers\n\n" +
    "As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column.",
  113: "Performer: James Saliers\n\n" +
    "As the interval of the tremolo widens, the embouchure must also adjust to alternating partials and greater resistance from the inertia of the air column.\n\n" +
    "This tremolo is created entirely by the embouchure alternating between the 6th and 8th partials."
}

const morePages = [["/TubaRC","Register Colors"],
["/TubaAC","Articulation Colors"],
["/TubaAVM","Articulations, Vibrato & Mutes"],
["/TubaP","Passages I"],
["/TubaP2","Passages II"]]

const gridHeights = [110, 96, 96, 90, 100]
const gridWidths = [[40, 170, 310], [40, 40, 70, 70, 60, 70, 60, 110], [40, 170, 140, 170], [40, 100, 100, 140, 140], [40, 190, 60, 50, 50, 60, 80]]
const gridTimes = [[0, 13], [25, 27, 30, 32, 35, 37, 40], [44, 51, 58], [65, 74, 82, 87], [92, 99, 102, 106, 110, 113]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tuba"
        title="Harmonic Series, Scales, & Trills"
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
