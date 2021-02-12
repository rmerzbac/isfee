import React from 'react';
import Instrument from "./../../instrument";
import vid from './Guitar 005 rHFingerPatterns.mp4';
import score from './Guitar 005 rHFingerPatterns.png';

const instrumentText = {
  0: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "These examples demonstrate some common right-hand finger patterns.",
  2: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "These examples demonstrate some common right-hand finger patterns.",
  4: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "These examples demonstrate some common right-hand finger patterns.",
  8: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "These examples demonstrate some common right-hand finger patterns.",
  16: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "These examples demonstrate some common right-hand finger patterns.",
  23: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "These examples demonstrate some common right-hand finger patterns.",
  31: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "These examples demonstrate some common right-hand finger patterns.",
  37: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "These examples demonstrate some common right-hand finger patterns.",
  43: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "These examples demonstrate some common right-hand finger patterns.",
  49: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "These examples demonstrate some common right-hand finger patterns.",
  57: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "This example is from Anthony Joseph Lanman's \"Study No. 1.\"",
  62: "Since there are so many numbers involved in guitar notation (Roman numerals indicate frets, Arabic numerals indicate left hand fingering, circled Arabic numerals indicate strings), right hand fingering is indicated by letters as follows:\n" +
    "P (pulgar) = Thumb\n" +
    "I (indice) = Index Finger\n" +
    "M (medio) = Middle Finger\n" +
    "A (anular) = Ring Finger\n\n" +
    "This example is from Anthony Joseph Lanman's \"Study No. 1.\""
  }

const gridHeights = [105, 85, 75, 75, 80, 100];
const gridWidths = [[35, 130, 140, 155], [35, 440], [35, 215, 220], [35, 215, 220], [35, 175, 260], [35, 215, 220]];
const gridTimes = [[0, 2, 4], [8], [16, 23], [31, 37], [43, 49], [57, 62]];

export default function MakePage() {
  return (
    <div>
      <Instrument
        instrument="Guitar"
        title="R. H. Finger Patterns"
        vid={vid}
        instrumentText={instrumentText}
        score={score}
        gridHeights={gridHeights}
        gridWidths={gridWidths}
        gridTimes={gridTimes}/>
    </div>
  );
}
