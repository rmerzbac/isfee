/* Instrument files inherit their functionality from this class. */
import React from "react";

var instrument;
var title;
var instrumentText;
var score;
var gridHeights;
var gridWidths;
var gridTimes;
var morePages;

function Text(props) {
  let list = "<ul>";
  if (morePages !== undefined) {
    morePages.forEach((value) => list += "<li><a href= \"" + value[0] + "\"/>" + value[1] + "</a></li>");
  }
  list += "</ul>";
  console.log(list);
  return (
    <div>
    <p className="display-linebreak">{instrumentText[props.value]}</p>
    <br/>
    <p hidden={morePages === undefined}><b>More pages:</b></p>
    <div dangerouslySetInnerHTML={{ __html: list }}></div>
    <br/>
    </div>
  )
}

function Video(props) {
  return (
    <div>
      <video id="vid" onClick={playPause}>
        <source src={props.vid + "#t=" + props.value} type="video/mp4"/>
      </video>
      <p className="vid-instruction">Click the video to play and pause, or use the spacebar. Mouse over the score and click to choose matching video and commentary.</p>
    </div>
  );
}

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 0,
    };
  }
  renderVideo() {
    return (
      <div>
      <Video value={this.state.timestamp} vid={this.props.vid} />
      <Text value={this.state.timestamp} />
      </div>
    );
  }
  renderTable(heights, widths, times) {
    return (
      <div>
      {heights.map((i, iIndex) => (
        <table key={iIndex}><tbody>
          <tr height={i + "px"} key={iIndex}>
            {widths[iIndex].map((j, jIndex) => (jIndex === 0 ? <th key={iIndex + "," + jIndex} width={j + "px"} /> : <td key={iIndex + "," + jIndex} width={j + "px"}  onClick={() => this.handleClick(times[iIndex][jIndex - 1])}/> ))}
          </tr>
        </tbody></table>
      ))}
      </div>
    )
  }
  handleClick(t) {
    this.setState({timestamp: t});
    document.getElementById("vid").currentTime = t;
  }
  render() {
    return (
      <div className="body">
        <h2>{instrument + ": " + title}</h2>
        <div className="column left">
          {this.renderVideo()}
        </div>
        <div className="column right">
          <div className="grid">
            {this.renderTable(gridHeights, gridWidths, gridTimes)}
          </div>
          <img className="score" src={score} alt="Score failed to load."/>
        </div>
      </div>
    )
  }
}

function playPause() {
  var video = document.getElementById("vid");
  if (video.paused)
    video.play();
  else
    video.pause();
}

export default function Instrument(props) {
  instrument = props.instrument;
  title = props.title;
  instrumentText = props.instrumentText;
  score = props.score;
  gridHeights = props.gridHeights;
  gridWidths = props.gridWidths;
  gridTimes = props.gridTimes;
  morePages = props.morePages;
  return (
    <div>
      <Body vid={props.vid}/>
      {document.addEventListener("keydown", event => {
        if (event.code === 'Space') {
          event.preventDefault()
          playPause()
        }
      })}
    </div>
  );
}
