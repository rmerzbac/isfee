import React from 'react';
import Instrument from "./../../instrument";
import vid from './moreBowColors.mp4';
import score from './moreBowColors.png';

const instrumentText = {
  0: "The placement of the bow on the string in relationship to the bridge and the fingerboard affects which harmonics in the sound-complex of the string's timbre are strengthened and suppressed. The normal placement of the bow is about a third of the way from the end of the fingerboard to the bridge.",
		9: "The placement of the bow on the string in relationship to the bridge and the fingerboard affects which harmonics in the sound-complex of the string's timbre are strengthened and suppressed. The normal placement of the bow is about a third of the way from the end of the fingerboard to the bridge.",
		18: "Sul ponticello literally means \"on the bridge,\" but in practice it means placing the bow close to bridge. \n\n" +
    "This accentuates the high partials of the string's timbre.",
		25: "Sul ponticello literally means \"on the bridge,\" but in practice it means placing the bow close to bridge. \n\n" +
    "This accentuates the high partials of the string's timbre.",
		34: "Sul tasto literally means \"over the fingerboard.\" \n\n" +
    "This supresses the high partials of the string's timbre, creating a muted sound.",
		42: "Sul tasto literally means \"over the fingerboard.\" \n\n" +
    "This supresses the high partials of the string's timbre, creating a muted sound.",
		52: "Col legno battuto means \"struck with the wood of bow.\" The bow is flipped to do this. If time permits, some players may switch to an old bow (or even a chopstick, which produces essentially the same sound) to preserve the varnish on their bows. Note that the pitch of the wood striking the string can be more prominent than the pitch of the vibrating string. ",
		60: "Col legno tratto means \"bowed with the wood of bow.\" The bow is flipped to do this. If time permits, some players may switch to an old bow to preserve the varnish on their bows.",
}

const morePages = [["/celloSF","Scale Fingering"],
["/celloNH","Natural Harmonics"],
["/celloAH","Artificial Harmonics"],
["/celloMS","Multiple Stops"],
["/celloLHI","Left Hand Inflections"],
["/celloRHI","Right Hand Inflections"],
["/bowDirectionsSpeedPressure","Bow Directions, Speed and Pressure"],
["/pizzicato","Pizzicato"]]

const gridHeights = [80, 60, 60, 60, 60, 60, 60, 60]
const gridWidths = [[40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400],
                    [40, 400]]
const gridTimes = [[0],
                  [9],
                  [18],
                  [25],
                  [34],
                  [42],
                  [52],
                  [60]]
export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Cello"
        title="More Bow Colors"
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
