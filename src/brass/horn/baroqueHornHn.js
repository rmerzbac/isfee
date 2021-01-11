import React from 'react';
import Instrument from "./../../instrument";
import vid from './baroqueHornHn.mp4';
import score from './baroqueHornHn.png';

const instrumentText = {
    0: "Another approach to adding extra pitches to the valveless harmonic series can be seen in the \"Baroque horn. \n\n" +
        " \" Here a vent covered by the right hand thumb can be opened to raise the tuning a perfect 4th (similar to the \"B-flat side\" of the modern double horn). \n\n" +
        "  A second vent covered by the left thumb raises the tuning a tritone (not used in this example). \n\n" +
        "Here is the same \"Water Music\" example heard on the natural horn page. \n\n" +
        "  When the vent is open, B-flat partials are used. ",
    6: "Another approach to adding extra pitches to the valveless harmonic series can be seen in the \"Baroque horn. \n\n" +
        " \" Here a vent covered by the right hand thumb can be opened to raise the tuning a perfect 4th (similar to the \"B-flat side\" of the modern double horn). \n\n" +
        "  A second vent covered by the left thumb raises the tuning a tritone (not used in this example). \n\n" +
        "Here is the same \"Water Music\" example heard on the natural horn page. \n\n" +
        "  When the vent is open, B-flat partials are used. ",
    10: "Another approach to adding extra pitches to the valveless harmonic series can be seen in the \"Baroque horn. \n\n" +
        " \" Here a vent covered by the right hand thumb can be opened to raise the tuning a perfect 4th (similar to the \"B-flat side\" of the modern double horn). \n\n" +
        "  A second vent covered by the left thumb raises the tuning a tritone (not used in this example). \n\n" +
        "Here is the same \"Water Music\" example heard on the natural horn page. \n\n" +
        "  When the vent is open, B-flat partials are used. ",
    14: "Another approach to adding extra pitches to the valveless harmonic series can be seen in the \"Baroque horn. \n\n" +
        " \" Here a vent covered by the right hand thumb can be opened to raise the tuning a perfect 4th (similar to the \"B-flat side\" of the modern double horn). \n\n" +
        "  A second vent covered by the left thumb raises the tuning a tritone (not used in this example). \n\n" +
        "Here is the same \"Water Music\" example heard on the natural horn page. \n\n" +
        "  When the vent is open, B-flat partials are used. \n\n"
}

const gridHeights = [155, 80, 80, 120]
const gridWidths = [[40, 480], [40, 480], [40, 480], [40, 480]]
const gridTimes = [[0], [6], [10], [14]]

export default function MakePage() {
    return (
        <div>
            <Instrument
                instrument="Horn"
                title="Baroque Horn"
                vid={vid}
                instrumentText={instrumentText}
                score={score}
                gridHeights={gridHeights}
                gridWidths={gridWidths}
                gridTimes={gridTimes} />
        </div>
    );
}
