import React from 'react';
import Instrument from "./../../instrument";
import vid from './articulationsVibratoMuteTuba.mp4'
import score from './articulationsVibratoMuteTuba.png'

const instrumentText = {
  0: "Performer: James Saliers\n\n" +
  "Triple-tonguing can be very effective on all brass instruments. It must be remembered that when triple-tonguing skips (as in this example) the amount of preparation time moving into the new note is considerably shortened, making the attacks less secure.",
  5: "Performer: James Saliers\n\n" +
  "Flutter-tonguing is effective throughout all but the very lowest range of the tuba.",
  12: "Performer: James Saliers\n\n" +
  "A slight amount of vibrato is normal on the tuba, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato.",
  16: "Performer: James Saliers\n\n" +
  "A slight amount of vibrato is normal on the tuba, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato.",
  20: "Performer: James Saliers\n\n" +
  "A slight amount of vibrato is normal on the tuba, applied according to the taste and discretion of the performer. Composers may specify varying amounts of vibrato.",
  25: "Performer: James Saliers\n\n" +
  "A combination of embouchure and half-valving can create haunting pitch-bends on the tuba.",
  32: "Performer: James Saliers\n\n" +
  "A combination of embouchure and half-valving can create haunting pitch-bends on the tuba.",
  37: "Performer: James Saliers\n\n" +
  "While it is recommended that the kind of mute be specified for trumpet and trombone, on other brass instruments (including the tuba) \"muted\" unambiguously designates the straight mute.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. As can be seen, this is particularly the case for the tuba.\n\n" +
  "Note that the use of the mute on the tuba may be perceived more as a color change than a dynamic change.",
  54: "Performer: James Saliers\n\n" +
  "While it is recommended that the kind of mute be specified for trumpet and trombone, on other brass instruments (including the tuba) \"muted\" unambiguously designates the straight mute.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. As can be seen, this is particularly the case for the tuba.\n\n" +
  "Note that the use of the mute on the tuba may be perceived more as a color change than a dynamic change.",
  69: "Performer: James Saliers\n\n" +
  "While it is recommended that the kind of mute be specified for trumpet and trombone, on other brass instruments (including the tuba) \"muted\" unambiguously designates the straight mute.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. As can be seen, this is particularly the case for the tuba.\n\n" +
  "Note that the use of the mute on the tuba may be perceived more as a color change than a dynamic change.",
  85: "Performer: James Saliers\n\n" +
  "While it is recommended that the kind of mute be specified for trumpet and trombone, on other brass instruments (including the tuba) \"muted\" unambiguously designates the straight mute.\n\n" +
  "PLEASE NOTE: A significant amount of time must be given for the player to place and remove mutes. As can be seen, this is particularly the case for the tuba.\n\n" +
  "Note that the use of the mute on the tuba may be perceived more as a color change than a dynamic change.",
  100: "Performer: James Saliers\n\n" +
  "Writing \"brassy\" invites the player to add a metallic quality to the tone color with a forcefully sharp attack. This is possible only at a loud dynamic level and is most effective in the tuba's lower range."
}

const gridHeights = [110, 80, 80, 80, 80, 80]
const gridWidths = [[40, 480], [40, 480], [40, 70, 96, 96, 96, 96], [40, 230, 250], [40, 230, 250], [40, 480]]
const gridTimes = [[0], [5], [12, 16, 20, 25, 32], [37, 54], [69, 85], [100]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Tuba"
        title="Articulations, Vibrato, & Mutes"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes} />
    </div>
  );
}


