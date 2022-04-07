import React from 'react';
import Instrument from "./../../instrument";
import vid from './tamtamGongs.mp4';
import score from './tamtamGongs.png';

const instrumentText = {
  0: "Tamtams are available in several sizes; the one shown here might be considered medium size. \n\n" +
" Tam-tam beaters are specifically created (sometimes home-made) for that particular instrument. \n\n" +
" It takes a particularly large and heavy beater to get the fullest range of sound from a tamtam. \n\n" +
" Tamtams will ring for a very long time, so a damping symbol is frequently appropriate.",
29: "Tamtams are available in several sizes; the one shown here might be considered medium size. \n\n" +
" Tamtam beaters are specifically created (sometimes home-made) for that particular instrument. \n\n" +
" Tamtams will ring for a very long time, so a damping symbol is frequently appropriate. \n\n" +
"When played with a heavy beater, tamtam rolls are executed with a single beater.",
47: "Tamtams may be played with a variety of malllets. \n\n" +
" Here hard rubber mallets have been chosen to provide a clear rhythmic articulation.",
58: "A bass bow can be used to extract marvelous (but unpredictable) sounds from a tamtam.",
63: "A bass bow can be used to extract marvelous (but unpredictable) sounds from a tamtam.",
74: "Scraping across the face or around the edge of a tamtam with a triangle beater creates a very effective whoosh.",
85: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
91: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
98: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
102: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
107: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
113: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
119: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
124: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
132: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
138: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
142: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
147: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
152: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
157: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
163: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
168: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
174: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
178: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
183: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
187: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
194: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
199: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
203: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
207: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
215: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
217: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
219: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
220: "Gongs are distinguished from tamtams by the presence of a button in the center of the instrument. \n\n" +
" Gongs have a definite pitch which is clearest when the instrument is struck on the button. \n\n" +
" Striking off-center emphasizes the noisier aspect of the sound. \n\n" +
"The notation used here for \"on button\" and \"off center\" is not standardized.",
}

const morePages = [["/cymbals1","Cymbals 1"],
["/cymbals2","Cymbals 2"],
["/trianglesCowbell","Triangles, Cowbells"],
["/windChimesTrees","Wind Chimes, Trees"]]

const gridHeights = [110, 70, 140, 90, 110]
const gridWidths = [[30, 250, 170],
                     [30, 210, 70, 70, 70],
                     [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
                     [30, 50, 50, 50, 50, 50, 40, 50, 50],
                    [30, 50, 50, 50, 50, 50, 40, 50, 50]]
const gridTimes = [[0, 29],
                  [47, 58, 63, 74],
                  [85, 91, 98, 102, 107, 113, 119, 124, 132, 138, 142, 147],
                  [152, 157, 163, 168, 174, 178, 183, 187],
                 [194, 199, 203, 207, 215, 217, 219, 220]]

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Metals"
        title="Tamtams, Gongs"
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
