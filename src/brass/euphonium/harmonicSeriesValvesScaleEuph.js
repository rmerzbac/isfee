import React from 'react';
import Instrument from "./../../instrument";
import vid from './harmonicSeriesValvesScaleEuph.mp4'
import score from './harmonicSeriesValvesScaleEuph.png'

const instrumentText = {
  0: "Performer: Matt Maslanka\n\n" + 
  "The first order of pitch selection for all brass instruments is producing a partial from the harmonic series. When the euphonium is played open (no keys or triggers depressed), the concert pitch of the fundamental is the B-flat below the bass clef, the same as the trombone. Note that the partials are successively closer together, and that the 7th partial is \"out of tune.\"",
  13: "Performer: Matt Maslanka\n\n" + 
  "The first order of pitch selection for all brass instruments is producing a partial from the harmonic series. When the euphonium is played open (no keys or triggers depressed), the concert pitch of the fundamental is the B-flat below the bass clef, the same as the trombone. Note that the partials are successively closer together, and that the 7th partial is \"out of tune.\"",
  35: "Performer: Matt Maslanka\n\n" + 
  "Almost all euphoniums have a 4th valve, extra tubing brought into play by a trigger operated by the left index finger. Like the trombone's F attachment (or \"F trigger\"), it increases the tubing's total length by a third, so that the instrument's open fundamental is lowered to the F an octave below the bass clef. The pitches played here are 2nd partials (not pedal tones).",
  42: "Performer: Matt Maslanka\n\n" + 
  "The valves lower the pitch of the fundamental by adding tubing to the air column. The euphonium uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. The 3rd valve lowers the fundamental an additional minor 3rd. This allows for a chromatic scale of seven different fundamentals, enough to fill in the perfect-5th gap between the 2nd and 3rd partials.",
  43: "Performer: Matt Maslanka\n\n" + 
  "The valves lower the pitch of the fundamental by adding tubing to the air column. The euphonium uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. The 3rd valve lowers the fundamental an additional minor 3rd. This allows for a chromatic scale of seven different fundamentals, enough to fill in the perfect-5th gap between the 2nd and 3rd partials.",
  46: "Performer: Matt Maslanka\n\n" + 
  "The valves lower the pitch of the fundamental by adding tubing to the air column. The euphonium uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. The 3rd valve lowers the fundamental an additional minor 3rd. This allows for a chromatic scale of seven different fundamentals, enough to fill in the perfect-5th gap between the 2nd and 3rd partials.",
  48: "Performer: Matt Maslanka\n\n" + 
  "The valves lower the pitch of the fundamental by adding tubing to the air column. The euphonium uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. The 3rd valve lowers the fundamental an additional minor 3rd. This allows for a chromatic scale of seven different fundamentals, enough to fill in the perfect-5th gap between the 2nd and 3rd partials.",
  50: "Performer: Matt Maslanka\n\n" + 
  "The valves lower the pitch of the fundamental by adding tubing to the air column. The euphonium uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. The 3rd valve lowers the fundamental an additional minor 3rd. This allows for a chromatic scale of seven different fundamentals, enough to fill in the perfect-5th gap between the 2nd and 3rd partials.",
  52: "Performer: Matt Maslanka\n\n" + 
  "The valves lower the pitch of the fundamental by adding tubing to the air column. The euphonium uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. The 3rd valve lowers the fundamental an additional minor 3rd. This allows for a chromatic scale of seven different fundamentals, enough to fill in the perfect-5th gap between the 2nd and 3rd partials.",
  54: "Performer: Matt Maslanka\n\n" + 
  "The valves lower the pitch of the fundamental by adding tubing to the air column. The euphonium uses piston valves played by the right hand. The 2nd valve (middle finger) adds enough tubing to lower the fundamental a half-step. The 1st valve (index finger) adds enough tubing to lower the fundamental a whole-step. The 3rd valve lowers the fundamental an additional minor 3rd. This allows for a chromatic scale of seven different fundamentals, enough to fill in the perfect-5th gap between the 2nd and 3rd partials.",
  58: "Performer: Matt Maslanka\n\n" + 
  "These fingerings operate similarly to the line above, with the addition of the 4th valve, which lowers everything a perfect 4th. Unlike the trombone's F attachment, this 4th valve invokes a compensation as extra tubing is needed, making all 7 valve position down to B-natural playable and in tune.",
  60: "Performer: Matt Maslanka\n\n" + 
  "These fingerings operate similarly to the line above, with the addition of the 4th valve, which lowers everything a perfect 4th. Unlike the trombone's F attachment, this 4th valve invokes a compensation as extra tubing is needed, making all 7 valve position down to B-natural playable and in tune.",
  62: "Performer: Matt Maslanka\n\n" + 
  "These fingerings operate similarly to the line above, with the addition of the 4th valve, which lowers everything a perfect 4th. Unlike the trombone's F attachment, this 4th valve invokes a compensation as extra tubing is needed, making all 7 valve position down to B-natural playable and in tune.",
  64: "Performer: Matt Maslanka\n\n" + 
  "These fingerings operate similarly to the line above, with the addition of the 4th valve, which lowers everything a perfect 4th. Unlike the trombone's F attachment, this 4th valve invokes a compensation as extra tubing is needed, making all 7 valve position down to B-natural playable and in tune.",
  66: "Performer: Matt Maslanka\n\n" + 
  "These fingerings operate similarly to the line above, with the addition of the 4th valve, which lowers everything a perfect 4th. Unlike the trombone's F attachment, this 4th valve invokes a compensation as extra tubing is needed, making all 7 valve position down to B-natural playable and in tune.",
  68: "Performer: Matt Maslanka\n\n" + 
  "These fingerings operate similarly to the line above, with the addition of the 4th valve, which lowers everything a perfect 4th. Unlike the trombone's F attachment, this 4th valve invokes a compensation as extra tubing is needed, making all 7 valve position down to B-natural playable and in tune.",
  70: "Performer: Matt Maslanka\n\n" + 
  "These fingerings operate similarly to the line above, with the addition of the 4th valve, which lowers everything a perfect 4th. Unlike the trombone's F attachment, this 4th valve invokes a compensation as extra tubing is needed, making all 7 valve position down to B-natural playable and in tune.",
  73: "Performer: Matt Maslanka\n\n" + 
  "With the availability of the 4th valve, the standard range of the euphonium extends for 3 octaves.\n\n" + 
  "The euphonium is sometimes called tenor tuba in orchestral scores; some composers consider the baritone horn and the euphonium the same instrument, though the baritone horn has a narrower bore and sometimes lacks a 4th valve. Since the baritone horn is predominantly cylindrical bore, its timbre resembles a bass trumpet (or bass bugle), while the conical bore euphonium is clearly a tenor tuba.",
  86: "Performer: Matt Maslanka\n\n" + 
  "Pedal tones extend the range of the euphonium downward. Pedal tones lower than the G here are rarely called for.",
  100: "Performer: Matt Maslanka\n\n" + 
  "Using the 4th valve, a very accomplished player can perform pedal tones in an extreme low range comparable to the bass trombone and tuba.",
  116: "Performer: Matt Maslanka\n\n" + 
  "The euphonium maintains its rich singing color up to B-flat in the treble clef; higher pitches are less solid. The top of this range is available only very accomplished players."
}

const gridHeights = [120, 70, 96, 90, 120]
const gridWidths = [[40, 120, 200, 160], [40, 70, 60, 70, 60, 70, 60, 90], [40, 60, 60, 80, 60, 70, 60, 90], [40, 480], [40, 140, 130, 210]]
const gridTimes = [[0, 13, 35], [42, 43, 46, 48, 50, 52, 54], [58, 60, 62, 64, 66, 68, 70], [73], [86, 100, 116]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Euphonium"
        title="Harmonic Series, Valves, & Scales"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


