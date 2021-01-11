import React from 'react';
import Instrument from "./../../instrument";
import vid from './moreBowColorsB.mp4';
import score from './moreBowColorsB.png';

const instrumentText = {
  0: "The placement of the bow on the string in relationship to the bridge and the fingerboard affects which harmonics in the sound-complex of the string's timbre are strengthened and suppressed. \n\n" +
"The normal placement of the bow on the contrabass is close to the end of the fingerboard for pitches played in lower positions moving to about a half of the way from the end of the fingerboard to the bridge for higher pitches.",
		10: "The placement of the bow on the string in relationship to the bridge and the fingerboard affects which harmonics in the sound-complex of the string's timbre are strengthened and suppressed. \n\n" +
"The normal placement of the bow on the contrabass is close to the end of the fingerboard for pitches played in lower positions moving to about a half of the way from the end of the fingerboard to the bridge for higher pitches.",
		18: "Sul ponticello literally means \"on the bridge,\" but in practice it means placing the bow close to bridge. \n\n" +
"This accentuates the high partials of the string's timbre.",
		26: "Sul ponticello literally means \"on the bridge,\" but in practice it means placing the bow close to bridge.\n\n" +
"This accentuates the high partials of the string's timbre.",
		34: "Sul tasto literally means \"over the fingerboard.\" \n\n" +
"This suppresses the high partials of the string's timbre, creating a muted sound. ",
		41: "Sul tasto literally means \"over the fingerboard.\"\n\n" +
"This suppresses the high partials of the string's timbre, creating a muted sound. ",
		47: "Col legno battuto means \"struck with the wood of bow.\" The bow is flipped to do this. If time permits, some players may switch to an old bow (or even a chopstick, which produces essentially the same sound) to preserve the varnish on their bows.",
		57: "Col legno tratto means \"bowed with the wood of bow.\" The bow is flipped to do this. If time permits, some players may switch to an old bow to preserve the varnish on their bows.",

  }

const gridHeights = [90, 60, 60, 60, 60, 60, 60, 60]
const gridWidths = [[40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400]]
const gridTimes = [[0],
                  [10],
                  [18],
                  [26],
                  [34],
                  [41],
                  [47],
                  [57]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Contrabass"
        title="More Bow Colors"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
